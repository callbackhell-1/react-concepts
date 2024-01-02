const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world from React !"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

console.log(heading); //object
/**
 * heading is object not a h1 tag, ,
 * we are creating react element
 * h1 is react element
 * If we expand the console , it has props which contain child & attributes
 * props : { id: "heading", xyz: "abc" } + "Hello world from React !"
 * children -> 3rd argument in createElement.
 * attributes(heading,xyz)
 * React.createElement create a just an js obj., not actual h1 tag
 *
 *root.render(heading); -> rendor method, converts react element which is an object into html tag ie, <h1>...</h1> and render it to root element in html file
 */
