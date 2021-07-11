import React from "react";
import Login from "./components/Login";
import ChatRoom from "./components/ChatRoom";
import AuthProvider from "./Context/AuthProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route component={Login} path="/login"></Route>
          <Route component={ChatRoom} path="/"></Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
