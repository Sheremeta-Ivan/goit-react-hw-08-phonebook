import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavAuthBox = styled.div`
  display: flex;
  gap: 25px;
`;

export const Nav = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 25px;
  font-weight: 700;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: teal;
  }

  &.active {
    color: teal;
  }
`;
