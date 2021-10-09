import "./App.css";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AuthProvider from "./context/AuthProvider";
import Shipping from "./components/Shipping/Shipping";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import OrderPlace from "./components/OrderPlace/OrderPlace";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/shipping">
              <Shipping></Shipping>
            </PrivateRoute>
            <PrivateRoute path="/orderplace">
              <OrderPlace></OrderPlace>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
