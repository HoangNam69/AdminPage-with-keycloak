import React from "react";
import { Outlet } from "react-router-dom";
import keycloak from "../keycloak";

const ProtectedRoute = () => {
  // Kiểm tra trạng thái xác thực từ Keycloak
  if (!keycloak.authenticated) {
    keycloak.login(); // Chuyển hướng đến trang đăng nhập của Keycloak nếu chưa đăng nhập
    return null; // Trả về null để chờ Keycloak xử lý login
  }
  
  return <Outlet />;
};

export default ProtectedRoute;