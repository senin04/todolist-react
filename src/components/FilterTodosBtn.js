import styled from "styled-components";

const StyledFilterTodosBtn = styled.input`
  padding: 12px;
  background-color: red;
  transform: translateX(-5px);
  border: none;
  outline: none;
  cursor: pointer;
  min-width: 10%;
`;

const FilterTodosBtn = () => {
  return <StyledFilterTodosBtn type="submit" value="Add"/>;
};

export default FilterTodosBtn;
