import React from "react";
import styled from "styled-components";
import { DefaultLink } from "../../styles/linkStyles";
import NavList from "./navList";

const Nav = styled.nav`
  width: 100%;
  max-width: 1280px;
  margin: 0rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WorkplaceLink = styled(DefaultLink)`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* p {
    font-size: 0.5rem;
    color: black;
  } */

  /* @media (max-width: ${({ theme }) => theme.media.mobile}) { */
  p {
    font-size: 0.9rem;
    font-weight: 400;
    color: white;
    padding: 0.45rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.primary};
  }
  /* } */
`;

const WorkplaceButton = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 1.2rem;
  border: 2px solid white;
  box-shadow: 0px 0px 5px #00000040;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.2rem;

  /* @media (max-width: ${({ theme }) => theme.media.mobile}) { */
  display: none;
  /* } */
`;

const Line = styled.hr`
  margin: 0;
  color: ${({ theme }) => theme.colors.gray};
`;

const NavBar = () => {
  return (
    <React.Fragment>
      <Nav>
        <NavList />

        <WorkplaceLink>
          <WorkplaceButton />
          <p>내 작업실</p>
        </WorkplaceLink>
      </Nav>
      <Line />
    </React.Fragment>
  );
};

export default NavBar;
