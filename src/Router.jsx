import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Informatique from "./pages/Informatique/Informatique.jsx";
import Telephonie from "./pages/Telephonie/Telephonie.jsx";
import MentionLegal from "./pages/Mention_Legal/Mention_Legal.jsx";
import Internet from "./pages/Internet/Internet.jsx";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/informatique" element={<Informatique />} />
      <Route path='/telephonie' element={<Telephonie />} />
      <Route path="/mentionlegal" element={<MentionLegal />} />
      <Route path='/Internet' element={<Internet />} />
    </Routes>
  );
}

export default Router;
