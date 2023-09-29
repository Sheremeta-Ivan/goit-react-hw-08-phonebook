import styled from 'styled-components';

export const Section = styled.section`
  max-width: 740px;
`;

export const Form = styled.form`
  margin-bottom: 20px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  input {
    padding: 8px;
    border-radius: 5px;
    border: 1px solid grey;
  }
`;

export const FormList = styled.ul`
  padding: 0;
  display: flex;
`;

export const FormListItem = styled.li`
  margin-right: 10px;
  list-style: none;
  p {
    margin-bottom: 8px;
    font-size: 25px;
    color: #fff;
    font-weight: 500;
  }
`;

export const FormButton = styled.button`
  border-radius: 5px;
  height: 40px;
  border: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  padding: 5px;

  &:hover,
  &:focus {
    color: rgb(255, 255, 255);
    background-color: teal;
    cursor: pointer;
  }

  svg {
    margin-right: 10px;
    width: 25px;
    height: 25px;
  }
`;
