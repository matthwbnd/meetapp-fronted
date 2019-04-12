import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import Logo from '../../assets/images/logo-white.svg';

import {
  Container, Image, Menu, MenuList, MenuItem, Go, Profile,
} from './styles';

const Header = () => (
  <Container>
    <Menu>
      <Image src={Logo} alt="Meetapp" />
      <MenuList>
        <MenuItem>
          <Go to="/">Início</Go>
        </MenuItem>
        <MenuItem>
          <Go to="/search">Buscar</Go>
        </MenuItem>
        <MenuItem>
          <Go to="/new-meetup">Novo meetup</Go>
        </MenuItem>
      </MenuList>
    </Menu>
    <Profile>
      <Go to="/profile">
        <FontAwesomeIcon icon={faUser} size="lg" />
      </Go>
    </Profile>
  </Container>
);

export default Header;
