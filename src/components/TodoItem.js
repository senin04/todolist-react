import styled from "styled-components";
import React, { useState } from "react";

const StyledLi = styled.li`
    font-size: 30px;
    overflow: hidden;
    padding-left: 40px;
    background: #ccc;
    overflow: hidden;
    transition: 0.2s;
    transform: translateX(-100%);
    -webkit-animation: slide 0.25s forwards;
    animation: slide 0.2s forwards;

    @-webkit-keyframes slide {
        100% {
            transform: translateX(0);
        }
    }

    @keyframes slide {
        100% {
            transform: translateX(0);
        }
    }

    &.removing {
        animation: slide-out 0.25s forwards;

        @keyframes slide-out {
            0% {
                transform: translateX(0);
                opacity: 1;
            }
            100% {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    }
`;

const StyledSpan = styled.span`
    padding: 0 20px;
    position: absolute;
    right: 0;
    transition: 0.5s linear;
    cursor: pointer;
`;

const TodoItem = ({ todo, onDeleteTodo }) => {
    const [mainClass, setMainClass] = useState("");

    let handleClassName = () => {
        setMainClass("removing");
    };
    return (
        <>
            <StyledLi className={mainClass}>
                {todo.name}
                <StyledSpan
                    onClick={() => {
                        handleClassName();
                        setTimeout(() => {
                            onDeleteTodo(todo.id);
                        }, 2000);
                    }}
                >
                    &#215;
                </StyledSpan>{" "}
            </StyledLi>
        </>
    );
};

export default TodoItem;
