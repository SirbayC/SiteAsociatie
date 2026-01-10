import "../styling/lumeaimagini.scss";

// Dynamically import all components from the 2024 directory
const componentsContext = require.context('../resources/pics/2024', true, /\.jsx$/);

const components = componentsContext.keys().map(key => {
  const Component = componentsContext(key).default;
  return <Component key={key} />;
});

const Evenimente = () => {
  return (
    <div className="evenimente">
      {components}
    </div>
  );
}

export default Evenimente;