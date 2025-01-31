import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Component/Profile";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
