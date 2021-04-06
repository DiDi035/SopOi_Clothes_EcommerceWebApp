import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListingScreen from "./screens/ListingScreen/ListingScreen";
import HeaderAndForm from "./screens/HeaderAndForms";
import HomePage from "./screens/HomePage";

function App() {
  return (
    <Router>
      <HeaderAndForm />
      <Switch>
        <Route path="/homepage" exact>
          <HomePage />
        </Route>
        <Route path="/">
          <ListingScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
