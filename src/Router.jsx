import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Informatique from "./pages/Informatique/Informatique.jsx";
import Telephonie from "./pages/Telephonie/Telephonie.jsx";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/informatique" element={<Informatique />} />
      <Route path='/telephonie' element={<Telephonie />} />
    </Routes>
  );
}

export default Router;
