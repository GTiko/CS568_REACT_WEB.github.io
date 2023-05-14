import "./App.css";
import React from "react";
import { CS516, CS568 } from "./components/Tables.js";
import { ToDoList } from "./components/ToDoList.js";
import FavoriteHTML from './components/FavoriteHTML.js'
import Element from './components/Element.js';
import FunctionalComponent from './components/FunctionalComponent.js';
import ClassComponent from './components/ClassComponent.js'

function App() {
  return (
    <>
      <CS568 code1="985431" code2="985231" name1="John" name2="Bat" />
      <CS516 code1="185431" code2="185431" name1="Sara" name2="Cat" />
      <ToDoList />
      <FavoriteHTML/>
      <Element/>
      <FunctionalComponent/>
      <ClassComponent/>
    </>
  );
}

export default App;
