import os
import re
from PIL import Image

# CONFIGURATION
BASE_DIR = os.path.join('client', 'src', 'resources', 'pics', '2025')

# --- HELPER FUNCTIONS ---

def sanitize_component_name(name):
    """ "2. Cursuri..." -> "Cursuridedezvoltare" """
    name_no_digits = re.sub(r'[0-9]', '', name)
    clean_name = re.sub(r'[^a-zA-Z]', '', name_no_digits)
    return clean_name

def clean_display_name(name):
    """ "2. Cursuri..." -> "Cursuri..." (Removes leading digits/dots) """
    return re.sub(r'^\d+[\.\s]*', '', name)

def get_description_from_txt(folder_path):
    """Finds the first .txt file and uses filename as description."""
    try:
        files = os.listdir(folder_path)
        txt_files = [f for f in files if f.endswith('.txt')]
        if txt_files:
            return os.path.splitext(txt_files[0])[0]
        return ""
    except Exception:
        return ""

def generate_photos_js(folder_path):
    """Scans for images and writes photos.js inside the specific folder."""
    try:
        files = sorted(os.listdir(folder_path))
        image_files = [f for f in files if f.lower().endswith(('.jpg', '.jpeg', '.png'))]
        
        if not image_files:
            return False

        imports = []
        photos_array = []
        
        for index, filename in enumerate(image_files, start=1):
            file_path = os.path.join(folder_path, filename)
            try:
                with Image.open(file_path) as img:
                    width, height = img.size
                
                var_name = f"p{index}"
                imports.append(f"import {var_name} from './{filename}';")
                photos_array.append(f"{{ src: {var_name}, width: {width}, height: {height} }}")
            except Exception as e:
                print(f"      ⚠️ Skipped {filename}: {e}")

        js_content = "\n".join(imports) + "\n\nexport const content = [\n  " + ",\n  ".join(photos_array) + "\n];"

        with open(os.path.join(folder_path, 'photos.js'), 'w', encoding='utf-8') as f:
            f.write(js_content)    
        return True
    except Exception as e:
        print(f"      ❌ Error creating photos.js: {e}")
        return False

# --- COMPONENT GENERATORS ---

def create_single_event_component(folder_path, folder_name):
    comp_name = sanitize_component_name(folder_name)
    disp_name = clean_display_name(folder_name)
    desc = get_description_from_txt(folder_path)
    
    if not comp_name: comp_name = "Event" + str(abs(hash(folder_name)))

    content = f"""import React from 'react';
import Gallery from "react-photo-gallery";
import {{ content }} from "./photos";

const {comp_name} = () => {{
    return (
        <div className="event">
            <div className="name">{disp_name}</div>
            <div className="desc">{desc}</div>
            <Gallery photos={{content}} />
        </div>
    );
}}
export default {comp_name};
"""
    with open(os.path.join(folder_path, f"{comp_name}.jsx"), 'w', encoding='utf-8') as f:
        f.write(content)
    return comp_name

def create_nested_event_component(parent_path, parent_folder_name, sub_dirs):
    comp_name = sanitize_component_name(parent_folder_name)
    disp_name = clean_display_name(parent_folder_name)
    
    imports_list = ["import React from 'react';", "import Gallery from \"react-photo-gallery\";"]
    render_parts = []
    
    valid_subs = 0

    # Sort sub_dirs so we process 1, 2, 3 in order
    for i, sub_name in enumerate(sorted(sub_dirs)):
        
        # 1. Capture the original "pretty" name for the UI (e.g. "1. Mosul nu ne uita!")
        original_display_name = clean_display_name(sub_name)
        
        # 2. Rename logic: Create a safe folder name (e.g. "1Mosulnuneuita")
        # Remove anything that isn't a letter or number
        safe_folder_name = re.sub(r'[^a-zA-Z0-9]', '', sub_name)
        
        current_sub_path = os.path.join(parent_path, sub_name)
        final_sub_path = os.path.join(parent_path, safe_folder_name)

        # Execute Rename if needed
        if sub_name != safe_folder_name:
            try:
                os.rename(current_sub_path, final_sub_path)
                print(f"      ✏️ Renamed subfolder: '{sub_name}' -> '{safe_folder_name}'")
                # Update variable so the rest of the script uses the new path
                sub_name = safe_folder_name
            except Exception as e:
                print(f"      ❌ Could not rename {sub_name}: {e}")
                continue

        # 3. Generate photos.js in the (possibly new) path
        has_photos = generate_photos_js(final_sub_path)
        
        if has_photos:
            valid_subs += 1
            alias = f"c{valid_subs}"
            # IMPORT from the SAFE folder name
            imports_list.append(f"import {{ content as {alias} }} from \"./{sub_name}/photos\";")
            
            # Get Description
            sub_desc = get_description_from_txt(final_sub_path)

            # RENDER using the ORIGINAL display name
            render_parts.append(f"""            <div className="subName">{original_display_name}</div>
            <div className="subDesc">{sub_desc}</div>
            <Gallery photos={{{alias}}} />
            <br />""")

    if valid_subs == 0:
        print(f"   ⚠️ No valid sub-galleries found in {parent_folder_name}")
        return None

    imports_block = "\n".join(imports_list)
    render_block = "\n".join(render_parts)

    jsx_content = f"""{imports_block}

const {comp_name} = () => {{
    return (
        <div className="event">
            <div className="name">{disp_name}</div>
{render_block}
        </div>
    );
}}
export default {comp_name};
"""
    
    with open(os.path.join(parent_path, f"{comp_name}.jsx"), 'w', encoding='utf-8') as f:
        f.write(jsx_content)
    
    return comp_name

# --- MAIN ---

def main():
    if not os.path.exists(BASE_DIR):
        print(f"❌ Error: Directory not found at: {os.path.abspath(BASE_DIR)}")
        return

    print(f"📂 Scanning directory: {BASE_DIR}\n")

    for item in sorted(os.listdir(BASE_DIR)):
        item_path = os.path.join(BASE_DIR, item)
        
        if os.path.isdir(item_path):
            print(f"🔹 Analyzing: {item}")
            
            contents = os.listdir(item_path)
            sub_dirs = [d for d in contents if os.path.isdir(os.path.join(item_path, d))]
            images = [f for f in contents if f.lower().endswith(('.jpg', '.jpeg', '.png'))]

            if sub_dirs:
                # CASE 1: Nested (Renaming happens here)
                cname = create_nested_event_component(item_path, item, sub_dirs)
                if cname: print(f"   ✅ Generated NESTED component: {cname}.jsx")

            elif images:
                # CASE 2: Single
                generate_photos_js(item_path)
                cname = create_single_event_component(item_path, item)
                print(f"   ✅ Generated SINGLE component: {cname}.jsx")
            
            else:
                print("   ⚠️ Empty or invalid folder, skipping.")

if __name__ == "__main__":
    main()