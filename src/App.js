import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header";
import Main from "./pages/main";
import Employees from "./pages/employees";

import "./App.css";

const App = () => (
  <div className="container">
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/employees" component={Employees} />
      </Switch>
    </Router>
  </div>
  
);

export default App;