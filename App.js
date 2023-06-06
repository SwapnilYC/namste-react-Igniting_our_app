
const heading3 = React.createElement('h2', { className: "reactHeading" }, "Hello World from React");
// React.creteElement takes 3 parameters as an argujment: tag name, {attributes object}, children
// React.createElement basically returns an object which has props key which contains all the properties like attributes and children of that tag
console.log(heading3);
const root3 = ReactDOM.createRoot(document.getElementById('root3'));
const root4 = ReactDOM.createRoot(document.getElementById('root4'));

root3.render(heading3);
// here this render method is responsible to take that object convert it into the tag and render it to root(replacing the old tags present in root)

const parent = React.createElement('div', { id: "parent" },
  [
    React.createElement('div', { id: "child1" },
      [
        React.createElement('h2', {},
          "Hii i am h2 of child1 "
        ),
        React.createElement('h3', {},
          "Hii i am h3 of child1 "
        ),
      ]
    ),
    React.createElement('div', { id: "child2" },
      [
        React.createElement('h2', {},
          "Hii i am h2 of child2 "
        ),
        React.createElement('h3', {},
          "Hii i am h3 of child2 "
        ),
      ]
    ),
  ]
)

root4.render(parent);