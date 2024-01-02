import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateApplication from './pages/Application/CreateApplication';
import ApplicationSuccess from './pages/Application/ApplicationSuccess';
import QueryApplication from './pages/Application/QueryApplication';
import ViewApplication from './pages/Application/ViewApplication';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminApplicationList from './pages/Admin/AdminApplicationList';
import NotFound from './components/NotFound'; // Import the NotFound component

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/basvuru-olustur" element={<CreateApplication />} />
        <Route path="/basvuru-basarili" element={<ApplicationSuccess />} />
        <Route path="/basvuru-sorgula" element={<QueryApplication />} />
        <Route path="/basvuru/:basvuruNo" element={<ViewApplication />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/basvuru-listesi" element={<AdminApplicationList />} />
        {/* Add the NotFound route at the end */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;