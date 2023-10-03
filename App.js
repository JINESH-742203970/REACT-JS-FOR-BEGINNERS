const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hanuman"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Khatushyam"),
    React.createElement("h2", {}, "Hanuman"),
  ]),
]);
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Khatushyam"
);
// It creates an Javascript object(React Element)
// console.log(heading); //Return an object to you
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// It will take this object and put into doom and converted into heading tag
