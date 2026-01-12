import React from 'react';
import "../styling/lumeaimagini.scss";

// Dynamically import all .jsx components from the 2025 directory
const componentsContext = require.context('../resources/pics/2025', true, /\.jsx$/);

// Map over the found files and render them
const components = componentsContext.keys().map(key => {
  const Component = componentsContext(key).default;
  return <Component key={key} />;
});

const Evenimente2025 = () => {
  return (
    <div className="evenimente">
      {components}
    </div>
  );
}

export default Evenimente2025;