import styled from 'styled-components';

export const ContactsList = styled.ul`
  padding: 10px;
`;

export const ContactItem = styled.li`
  margin-bottom: 10px;
  padding: 8px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border: solid 1px #787878;
  border-radius: 5px;
`;

export const ContactIcon = styled.div`
  margin-right: 15px;
  border: 1px solid #787878;
  border-radius: 4px;
  width: 27px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const ContactText = styled.p`
  font-size: 24px;

  span {
    text-decoration: underline;
  }
`;

export const ContactDelete = styled.button`
  padding: 5px;
  color: black;
  margin-right: 0;
  margin-left: auto;
  border: none;
  border-radius: 5px;
  height: 40px;
  border: none;
  font-size: 16px;
  display: flex;
  align-items: center;

  svg {
    width: 25px;
    height: 25px;
  }

  &:hover,
  &:focus {
    color: rgb(255, 255, 255);
    background-color: red;
    cursor: pointer;
  }
`;
