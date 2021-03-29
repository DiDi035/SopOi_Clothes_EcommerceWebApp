import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/Header";
import RegisterForm from "./components/RegisterForm";
import LogInForm from "./components/LogInForm"

function App() {
  return (
    <div>
      <Header />
      {/* <RegisterForm /> */}
      <LogInForm />
    </div>
  );
}

export default App;
