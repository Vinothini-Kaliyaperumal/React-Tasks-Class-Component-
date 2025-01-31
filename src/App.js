import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Component/Profile";
import SignUp from "./Component/SignUp";
import SignIn from "./Component/SignIn";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
