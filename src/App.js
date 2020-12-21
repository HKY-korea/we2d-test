import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/header';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import MainPage from './pages/mainPage';
import ProductPage from './pages/productPage';
import ProductDetailPage from './pages/productDetailPage';
import AuthPage from './pages/authPage';
import DesignerPage from './pages/designerPage';
import DesignerShopPage from './pages/designerShopPage';
import MyPage from './pages/myPage';

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Switch>
        <Route path="/main" component={MainPage} />
        <Route path="/category/:category" component={ProductPage} />
        <Route path="/products/:product" component={ProductDetailPage} />
        <Route path="/auth" component={AuthPage} />
        <Route path="/designers" component={DesignerPage} />
        <Route path="/shop/:designer" component={DesignerShopPage} />
        <Route path="/my-page" component={MyPage} />
        <Redirect from="/" exact to="/main" />
        <Redirect to="/not-found" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
