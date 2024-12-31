import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
function Home() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div className="home">
      <div>
        <h1>Welcome to Management System</h1>
      </div>
      <div>
        {!isAuthenticated && (
          <Link to={'/login'}>Login with API use User Provider Database</Link>
        )}
      </div>
    </div>
  );
}

export default Home;