import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChatRoom from "./components/ChatRoom";
import Login from "./components/Login";
import AppProvider from "./Context/AppProvider";
import AuthProvider from "./Context/AuthProvider";
import ModalAddRoom from "./features/ModalAddRoom";

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppProvider>
          <Switch>
            <Route component={Login} path="/login"></Route>
            <Route component={ChatRoom} path="/"></Route>
          </Switch>
          <ModalAddRoom></ModalAddRoom>
        </AppProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
