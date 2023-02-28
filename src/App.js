import AddTodo from "./components/AddTodo";
import { createGlobalStyle } from "styled-components";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import data from "./data";
import React from "react";
import FilterTodos from "./components/FilterTodos";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
}
`;

const App = () => {
  const [toDoList, setToDoList] = useState(data);
  const [filteredList, setFilteredList] = useState(data);

  const handleDeleteTodo = (idecko) => {
    let filtered = toDoList.filter((task) => {
      return task.id !== idecko;
    });
    setToDoList(filtered);
    setFilteredList(filtered);
  };

  const handleAddTodo = (userInput) => {
    let copyList = [...toDoList];
    copyList.push({
      id: toDoList.length + 1,
      name: userInput,
      complete: false,
    });
    setToDoList(copyList);
    setFilteredList(copyList);
  };

  const handleFilterTodos = (userInput) => {
    setFilteredList(...toDoList);
    let filteredList = toDoList.filter((oneTask) => {
      return oneTask.name.toLowerCase().includes(userInput.toLowerCase());
    });
    setFilteredList(filteredList);
  };

  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <AddTodo onAddTodo={handleAddTodo}></AddTodo>
      <FilterTodos onFilterTodos={handleFilterTodos}></FilterTodos>
      <TodoItems
        onDeleteTodo={handleDeleteTodo}
        toDoList={toDoList}
        filteredList={filteredList}
      ></TodoItems>
    </div>
  );
};

export default App;
