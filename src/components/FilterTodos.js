import styled from "styled-components";
import { useState } from "react";

const StyledFilterDiv = styled.div`
    padding-bottom: 40px;
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

const FilterTodos = ({ onFilterTodos }) => {
    const [userInput, setUserInput] = useState("");

    const handleChange = (event) => {
        setUserInput(event.target.value);
        onFilterTodos(event.target.value);
    };

    return (
        <StyledFilterDiv>
            <form action="">
                <StyledInputTodo
                    value={userInput}
                    type="text"
                    onChange={handleChange}
                    placeholder="Vyfiltruj úlohy"
                    required
                ></StyledInputTodo>
            </form>
        </StyledFilterDiv>
    );
};

export default FilterTodos;
