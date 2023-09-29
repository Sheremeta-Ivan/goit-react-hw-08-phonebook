import styled from 'styled-components';

export const UserTitle = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  p {
    font-size: 22px;
    color: #fff;
  }

  button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    &:hover,
    &:focus {
      background-color: teal;
      color: #fff;
      cursor: pointer;
    }
  }
  svg {
    width: 30px;
    height: 30px;
    border: 1px solid #fff;
    border-radius: 50%;
  }
`;
