import React from "react";
import styled from "styled-components";
import { DefaultNavLink } from "../styles/linkStyles";
import { Switch, Route, Redirect } from "react-router-dom";
import {
  Banner,
  SellingProducts,
  Introduction,
} from "../components/designerShopPage";

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 4rem 0 2rem;

  & > a {
    font-size: 1.1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.darkGray};
    padding: 0 2rem;
    border-right: 1px solid ${({ theme }) => theme.colors.gray};

    &:last-child {
      border-right: none;
    }
  }

  .active {
    & > a {
      color: black;
    }
  }
`;

const DesignerShopPage = () => {
  const domain = "test";

  return (
    <React.Fragment>
      <Banner />

      <StyledNav>
        <DefaultNavLink
          to={`/shop/:${domain}`}
          exact
          activeStyle={{ color: "black" }}
        >
          판매제품
        </DefaultNavLink>
        <DefaultNavLink
          to={`/shop/:${domain}/introduction`}
          activeStyle={{ color: "black" }}
        >
          디자이너소개
        </DefaultNavLink>
        {/* <DefaultLink>협업안내</DefaultLink> */}
      </StyledNav>
      <Switch>
        <Route path={`/shop/:${domain}`} exact component={SellingProducts} />
        <Route
          path={`/shop/:${domain}/introduction`}
          component={Introduction}
        />
        <Redirect to="/not-found" />
      </Switch>
    </React.Fragment>
  );
};

export default DesignerShopPage;
