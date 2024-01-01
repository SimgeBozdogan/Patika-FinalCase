import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateApplication from "./pages/CreateApplication";
import ApplicationSuccess from "./pages/ApplicationSuccess";
import QueryApplication from "./pages/QueryApplication";
import ViewApplication from "./pages/ViewApplication";
import AdminLogin from "./pages/AdminLogin";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/basvuru-olustur" element={<CreateApplication />} />
        <Route path="/basvuru-basarili" element={<ApplicationSuccess />} />
        <Route path="/basvuru-sorgula" element={<QueryApplication />} />
        <Route path="/basvuru/:basvuruNo" element={<ViewApplication />} />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
