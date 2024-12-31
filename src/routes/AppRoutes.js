import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "../components/Registration";
import MainLayout from "../components/layout/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "../components/Profile"; // Trang xem thông tin user
import Home from "../components/Home"
import Login from "../components/Login";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/register" element={<MainLayout><Registration /></MainLayout>} />
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/my-profile" element={<MainLayout><Profile /></MainLayout>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
