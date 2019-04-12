import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 80px;
  background: #e5556e;
  padding: 10px 40px;
`;

export const Go = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const Image = styled.img``;

export const Menu = styled.nav`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  margin-left: 20px;
`;

export const MenuItem = styled.li`
  display: inline;
  margin: 0 20px;
  font-weight: bold;
`;

export const Profile = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;
