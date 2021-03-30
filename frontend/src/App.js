import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListingScreen from "./screens/ListingScreen";
import HeaderAndForm from "./screens/HeaderAndForms";

function App() {
  return (
    <Router>
      <HeaderAndForm />
      <Switch>
        <Route path="/" exact>
          <ListingScreen />
        </Route>
        <Route path="*"></Route>
      </Switch>
    </Router>
  );
}

export default App;
