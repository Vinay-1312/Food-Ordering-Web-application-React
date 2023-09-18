const parent = React.createElement("div",{id:"parent"},
[ React.createElement("div",{id:"child1", t:"h2"},[
    React.createElement("h1",{id:"h11"},"H1"),
    React.createElement("h1",{id:"h12"},"H2")
]),
React.createElement("div",{id:"child2"},[
    React.createElement("h1",{id:"h11"},"H1"),
    React.createElement("h1",{id:"h12"},"H2")
])


])
 


//const heading = React.createElement("h1",{id:"heading"},"Hello from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.appendChild(parent);