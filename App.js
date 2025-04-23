const heading = React.createElement("h1", {id: "heading"}, "Hello from React");
const heading2 = React.createElement("h1", {}, "Hello from React2");

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));


const grandparent = React.createElement("div", {}, [
    React.createElement("div", {}, [
        React.createElement("h1", {}, "Hello from h1"),
        React.createElement("h2", {}, "Hello from h2"),
    ]),
    React.createElement("div", {}, [
        React.createElement("h1", {}, "Hello from h1"),
        React.createElement("h2", {}, "Hello from h2")    
    ]),
]);

const parent = React.createElement("div", {}, [
    React.createElement("h1", {}, "Hello from h1"),
    React.createElement("h2", {}, "Hello from h2")
])

root.render(grandparent);