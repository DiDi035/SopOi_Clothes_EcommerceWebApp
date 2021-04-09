import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListingScreen from "./screens/ListingScreen/ListingScreen";
import HeaderAndForm from "./screens/HeaderAndForms/HeaderAndForms";
import HomePage from "./screens/HomePage/HomePage";
import { PrivateRoute } from "./private-route/PrivateRoute";

function App() {
  return (
    <Router>
      <HeaderAndForm />
      <Switch>
        <Route path="/homepage" exact={true} component={HomePage} />
        <PrivateRoute
          path="/:typePer/:typeClothes/:types"
          component={ListingScreen}
        />
      </Switch>
    </Router>
  );
}

export default App;
