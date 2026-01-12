import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "../styling/lumeaimagini.scss";
import Gallery from "react-photo-gallery";

// Import Photos
import { p20152022 } from "../resources/pics/2015-2022/photos.js";
import { p2023 } from "../resources/pics/2023/photos.js";

// Import Event Components
import Evenimente from "../components/Evenimente.jsx"; // This contains your 2024 logic
import Evenimente2025 from "../components/Evenimente2025.jsx"; // The new file we created above

const LumeaImagini = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState({});

  const handleButtonClick = (year) => {
    navigate(`?year=${year}`);
  };

  const query = new URLSearchParams(location.search);
  // Default to 2025 if you want the newest first, or keep your preference
  const year = query.get('year') || '2025'; 

  useEffect(() => {
    setLoading(true);
    let c;

    switch (year) {
      case '2025':
        // No < /> brackets needed if it's a component reference, 
        // BUT since you are storing it in state to render later, 
        // it is safer to store the Element.
        c = <Evenimente2025 />;
        break;
      case '2024':
        c = <Evenimente />;
        break;
      case '2023':
        c = <Gallery photos={p2023} />;
        break;
      case '2015-2022':
        c = <Gallery photos={p20152022} />;
        break;
      default:
        // Fallback
        c = <Evenimente2025 />;
        break;
    }
    
    // Smooth loading effect
    setTimeout(() => {
      setContent(c);
      setLoading(false);
    }, 500); 
  }, [year]);

  return (
    <div className="lumeamea">
      <div className="centered">
        <nav className="second-navbar">
          {/* Add the new 2025 button */}
          <button 
            className={year === '2025' ? 'clicked' : ''} 
            onClick={() => handleButtonClick('2025')}
          >
            2025
          </button>
          
          <button 
            className={year === '2024' ? 'clicked' : ''} 
            onClick={() => handleButtonClick('2024')}
          >
            2024
          </button>

          <button 
            className={year === '2023' ? 'clicked' : ''} 
            onClick={() => handleButtonClick('2023')}
          >
            2023
          </button>
          
          <button 
            className={year === '2015-2022' ? 'clicked' : ''} 
            onClick={() => handleButtonClick('2015-2022')}
          >
            2015-2022
          </button>
        </nav>

        {loading ? (
          <div className="loading"></div>
        ) : (
          content
        )}
      </div>
    </div>
  );
}

export default LumeaImagini;