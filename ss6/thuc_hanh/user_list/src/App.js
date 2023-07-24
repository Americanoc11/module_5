import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./component/Users";
import UserDetails from "./component/UserDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path={"/user/add"} element={<UserDetails />} />
        <Route path={`/user/:userId`} element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}