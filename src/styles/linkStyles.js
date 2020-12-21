import styled from 'styled-components'; 
import { Link, NavLink } from 'react-router-dom'

const DefaultLink = styled(Link)`
  color: black;

  &:hover {
    color: black;
    text-decoration: none;
    font-weight: bolder;
  }
`

const DefaultNavLink = styled(NavLink)`
  color: black;

  &:hover {
    color: black;
    text-decoration: none;
    font-weight: bolder;
  }
`

export { DefaultLink, DefaultNavLink };