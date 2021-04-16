import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListingScreen from "./screens/ListingScreen/ListingScreen";
import HeaderAndForm from "./screens/HeaderAndForms/HeaderAndForms";
import HomePage from "./screens/HomePage/HomePage";
import ProductPage from "./screens/ProductPage/ProductPage";
import CarPage from "./screens/CartPage/CartPage";
import { PrivateRoute } from "./private-route/PrivateRoute";
import { useDispatch } from "react-redux";
import * as UserStates from "./states/user/states";
import * as UserActions from "./states/user/action";
import * as ProductActions from "./states/product/action";
import { useEffect } from "react";
import CartPage from "./screens/CartPage/CartPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(UserActions.checkValidUser());
    dispatch(ProductActions.fetchCategories());
  });
  return (
    <Router>
      <HeaderAndForm />
      <Switch>
        <Route path="/homepage" exact={true} component={HomePage} />
        <Route
          path="/:typeCustomer/:typeClothes/:types"
          exact={true}
          component={ListingScreen}
        />
        <Route
          path="/:typeCustomer/:typeClothes"
          exact={true}
          component={ListingScreen}
        />
        <Route
          path="/:typeCustomer/:typeClothes/:types/:id"
          exact={true}
          component={ProductPage}
        />
        <Route path="/cart" exact={true} component={CartPage} />
      </Switch>
    </Router>
  );
}

export default App;
