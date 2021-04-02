import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListingScreen from "./screens/ListingScreen";
import HeaderAndForm from "./screens/HeaderAndForms";
import HomePage from "./screens/HomePage";

function App() {
  return (
    <Router>
      <HeaderAndForm />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="*"></Route>
      </Switch>
    </Router>
  );
}

export default App;
