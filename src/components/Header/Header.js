import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <HeaderLogo />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <GhostLogo />
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 8px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
`;

const Nav = styled.nav`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  gap: 32px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const HeaderLogo = styled(Logo)`
  margin-right: 32px;
`;

// This is obviously a huge hack, but hey, it works
const GhostLogo = styled(Logo)`
  visibility: hidden;
`

export default Header;
