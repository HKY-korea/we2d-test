import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {
  InfoSection,
  InnerNav,
  Nav,
  Account,
  Address,
  Written,
} from "../components/myPage";

const MyPage = () => {
  return (
    <React.Fragment>
      <InfoSection />
      <Nav />
      <InnerNav />

      <Switch>
        <Route path="/my-page/account" component={Account} />
        <Route path="/my-page/address" component={Address} />
        <Route path="/my-page/written" component={Written} />
        <Redirect path="/my-page" exact to="/my-page/account" />
        <Redirect to="not-found" />
      </Switch>
    </React.Fragment>
  );
};

export default MyPage;
