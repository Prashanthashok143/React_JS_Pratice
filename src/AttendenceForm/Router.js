import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import AddIntern from "./AddIntern";
import Attendence from "./Attendence";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AddIntern />} />
        <Route path="/attendence" element={<Attendence />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
