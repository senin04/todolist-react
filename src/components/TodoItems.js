import styled from "styled-components";
import TodoItem from "./TodoItem";
import React from "react";

const StyledUnordered = styled.ul`
    transition: 0.5;
    overflow: hidden;
`;

const EmptyList = styled.h2`
    color: red;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    &.active {
        opacity: 1;
    }

    &.inactive {
        opacity: 0;
    }
`;

const TodoItems = ({ toDoList, onDeleteTodo, filteredList }) => {
    let mainClass = "inactive";
    if (toDoList.length === 0) {
        mainClass = "active";
    } else {
        mainClass = "inactive";
    }

    return (
        <StyledUnordered>
            {filteredList.map((oneTodo) => {
                return (
                    <TodoItem
                        key={oneTodo.id}
                        todo={oneTodo}
                        onDeleteTodo={onDeleteTodo}
                    ></TodoItem>
                );
            })}
            <EmptyList className={mainClass}>To do list is empty!</EmptyList>
        </StyledUnordered>
    );
};

export default TodoItems;
