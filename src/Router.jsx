import { Router, Switch, Route } from "react-router-dom";
// utils
import history from "./utils/history";
import { ROUTERS } from "./constants/router";
// components
import DefaultLayout from "./components/DefaultLayout";
import LoginLayout from "./components/LoginLayout";
import Home from "./pages/Home";
import ProductPage from './pages/Products';
import ProductDetailPage from './pages/ProductDetail';
import cartPage from './pages/Cart';
import Profile from './pages/Profile';
import FormLogin from './pages/FormLogin'
import FormSignup from './pages/FormSignup'

function BrowserRouter() {
  return (
    <Router history={history}>
      <Switch>
        <DefaultLayout exact path={ROUTERS.HOME} component={Home} />
        <DefaultLayout exact path={ROUTERS.PRODUCT} component={ProductPage} />
        <DefaultLayout exact path={ROUTERS.PROD_DETAIL} component={ProductDetailPage} />
        <DefaultLayout exact path={ROUTERS.CART} component={cartPage} />
        <LoginLayout exact path={ROUTERS.LOGIN} component={FormLogin} />
        <LoginLayout exact path='/profile' component={Profile} />
        <Route exact path='/register' component={FormSignup} />
      </Switch>
    </Router>
  );
}

export default BrowserRouter;
