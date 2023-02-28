import styled from "styled-components";
import AddBtn from "./AddBtn";
import { useState } from "react";

const StyledH1 = styled.h1`
  color: red;
  text-align: center;
  margin-bottom: 10px;
`;

const StyledMyTodo = styled.div`
  padding: 40px 0px 10px 0px;
  background-color: rgb(40, 138, 138);
  width: 700px;

  form {
    text-align: center;
  }
`;

const StyledInputTodo = styled.input`
  font-size: 16px;
  padding: 10px;
  outline: none;
  border: none;
  min-width: 30%;
`;

const AddTodo = ({ onAddTodo }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTodo(userInput);
    setUserInput("");
  };
  return (
    <StyledMyTodo>
      <StyledH1>My to do list</StyledH1>
      <form action="" onSubmit={handleSubmit} required>
        <StyledInputTodo
          value={userInput}
          type="text"
          onChange={handleChange}
          placeholder="Pridaj úlohu"
          required
        ></StyledInputTodo>
        <AddBtn></AddBtn>
      </form>
    </StyledMyTodo>
  );
};

export default AddTodo;
