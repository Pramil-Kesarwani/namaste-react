
/* <div id="parent">
    <div id="child"> 
        <h1>I am a h1 tag</h1>
        <h2>I am a h1 tag</h2>
    </div>
    <div id="child2"> 
        <h1>I am a h1 tag</h1>
        <h2>I am a h1 tag</h2>
    </div>
</div> */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },[
      React.createElement("h1", {}, "I am a h1 tag"),
      React.createElement("h2", {}, "I am a h2 tag"),
    ]
  )
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World!! I am Pramil"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// console.log(heading);
