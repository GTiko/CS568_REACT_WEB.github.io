[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-8d59dc4de5201274e310e4c54b9627a8934c3b88527886e3b421487c677d23eb.svg)](https://classroom.github.com/a/bjljZ80T)
# CS568 - Assignment 2 - React elements and components
## Thinking in React
1. Read https://react.dev/learn/thinking-in-react. Write what you learned in your own words in **100** words in the README.md file.
2. Implement the "Table" example on the page. Fill it with the **Student** data instead of **Fruits** and **Vegetables**.

FILTER

CS568
| Code      | Name |
| ----------- | ----------- |
| 985431      | John       |
| 985231   | Bat        |

CS516
| Code      | Name |
| ----------- | ----------- |
| 185431      | Sara       |
| 185431   | Cat        |

3. Implement the following. Just log out the component names in the "p" tag for now. We will implement the rest starting tomorrow.
```
App (root component)
├─ TodoList (component)
│  └─ TodoItem (component)
│     ├─ TodoDeleteButton (component)
│     └─ TodoEditButton (component)
└─ TodoFooter (component)
```

## Microtasks
1. Add your favorite HTML tag to the root div. Add an attribute, "name" and assign your name to it. Refer:
```
const root = document.getElementById("root");
const strong = document.createElement('strong');
strong.textContent = 'Hello';
root.appendChild(strong);
root.setAttribute("name", "I am a root");
console.log(root.getAttribute("name"));
```
2. Create an element with the React.createElement. Please don't just copy and paste the following. Try to understand and come up with your own element.
```
import React from "react";

export default function App() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      { className: "App" },
      "Hello World. This is my first React App."
    )
  );
}

```
3. Pratice curly brackets "{}" to render a variable in JSX. Create a functional component. Declare a variable in the function and display it using the embedded expression on the page. 
4. Create a custom class-based component. Render the functional component in it.
```
App (root component)
├─ Class component
│  └─ Functional component
```
5. Return multiple elements using either Fragment, div, or an array. Implement the Table, Column example in the slide.
6. Implement the Advanced Hello example, both class and functional way.

---
Refer code below if need. Don't copy and paste.

*Class-based component*

```
import React from "react";

export default class Welcome extends React.Component {
  render() {
    return <p>Welcome!</p>;
  }
}
```

*App.js*

```
import React from "react";
// import Welcome from "./components/Welcome";

function Welcome({ data }) {
  const { name } = data;
  return <p>Weclome {name || "Stranger"}!</p>;
}

function App() {
  function getName() {
    return "name from function";
  }
  const name = "My Name";
  const name2 = "Name 2";
  const number = 5;
  const elementToRender = number > 2 ? name : name2;

  const element = (
    <>
      <div id="myId" className="myClass">
        <p>This is {getName()}.</p>
      </div>
      <div id="myId" className="myClass">
        <p>This is {getName()}.</p>
      </div>
    </>
  );

  const data = {
    attr1: "asd",
    attr2: "asd",
    name: "Unubold",
    attr3: "asd",
  };

  return <Welcome data={data} id="1"></Welcome>;
}

export default App;
```
