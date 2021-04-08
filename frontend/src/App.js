import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListingScreen from "./screens/ListingScreen/ListingScreen";
import HeaderAndForm from "./screens/HeaderAndForms/HeaderAndForms";
import HomePage from "./screens/HomePage/HomePage";

function App() {
  return (
    <Router>
      <HeaderAndForm />
      <Switch>
        <Route path="/homepage" exact>
          <HomePage />
        </Route>
        <Route path="/:typePer/:typeClothes">
          <ListingScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
