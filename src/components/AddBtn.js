import styled from "styled-components";

const StyledAddBtn = styled.input`
  padding: 12px;
  background-color: red;
  transform: translateX(-5px);
  border: none;
  outline: none;
  cursor: pointer;
  min-width: 10%;
`;

const AddBtn = () => {
  return <StyledAddBtn type="submit" value="Add"/>;
};

export default AddBtn;
