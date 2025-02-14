import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Component/Profile";
import SignUp from "./Component/SignUp";
import SignIn from "./Component/SignIn";
import Admin from "./Component/Admin";
import User from "./Component/User";
// import Landing from "./Component/Landing";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<User />} />
          {/* <Route path="/landing" element={<Landing />} /> */}
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
