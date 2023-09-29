import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Heading = styled.h2`
  text-align: center;
  font-size: 30px;
  margin-bottom: 20px;
  color: white;
`;
export const Form = styled.form`
  padding-top: 20px;
  width: 320px;
  border: 1px solid grey;
  border-radius: 5px;
  background-color: lightgray;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    font-size: 20px;
    color: black;
    font-weight: 500;
  }

  input {
    margin-top: 8px;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid grey;
  }

  button {
    margin-top: 5px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-weight: bold;

    &:hover,
    &:focus {
      background-color: teal;
      color: #fff;
      cursor: pointer;
    }
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: teal;
  font-size: 15px;
  font-weight: 700;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: gray;
  }

  &.active {
    color: gray;
  }
`;
export const TextLink = styled.p`
  text-align: center;
  margin-top: 10px;
  font-size: 15px;
  font-weight: 700;
  color: white;
`;
