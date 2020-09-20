import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import Items from "./pages/items/Items";
import CustomersPage from "../src/pages/customers/CustomersPage";
import Settings from "./pages/settings/settings";
=======
import Items from './pages/items/items'
import Customers from "./pages/customers/customers";
>>>>>>> 732e97fd8a74ed747d16ceee67faa1d16f29f30a
import "./App.css";
import Login from "./pages/login/login";
import Sales from "./pages/sales/sales";
import Employees from "./pages/employees/employees";
import Categories from "./pages/categories/categories";
<<<<<<< HEAD
import Nav from "./components/Nav";

class App extends Component {
=======
import Reports from "./pages/reports/reports";

class App extends Component {

>>>>>>> 732e97fd8a74ed747d16ceee67faa1d16f29f30a
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/" component={Login} exact={true} />
            <Route path="/login" component={Login} />
            <Route path="/items" component={Items} />
            <Route path="/customers" component={Customers} />
            <Route path="/sales" component={Sales} />
<<<<<<< HEAD
            <Route path="/employees" component={Employees} />
            <Route path="/categories" component={Categories} />
            <Route path="/settings" component={Settings} />
=======
            <Route path="/employees" component={Employees}/>
            <Route path="/categories" component={Categories}/>
            <Route path="/reports" component={Reports}/>
>>>>>>> 732e97fd8a74ed747d16ceee67faa1d16f29f30a
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
