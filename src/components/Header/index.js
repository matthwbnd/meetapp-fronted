import React from 'react';

import Logo from '../../assets/images/logo-white.svg';

import {
  Container, Image, Menu, MenuList, MenuItem, Go, Profile, Icon,
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
          <Go to="/meetups/new">Novo meetup</Go>
        </MenuItem>
      </MenuList>
    </Menu>
    <Profile>
      <Go to="/profile">
        <Icon className="fa fa-user-circle-o" />
      </Go>
    </Profile>
  </Container>
);

export default Header;
