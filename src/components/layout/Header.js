import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

function Header() {

    const { isAuthenticated, keycloak } = useContext(AuthContext);


    const handleLogin = () => {
        keycloak.login();
    };

    const handleLogout = () => {
        keycloak.logout({ redirectUri: window.location.origin });
    };

    return (
        <div className="container header">
            <div>
                <Link to="/" className="header__logo">Management System</Link>
            </div>
            <div className="header__action">
                {!isAuthenticated ? (
                    <>
                        <Link to="/register" className="header__signup">Sign Up</Link>
                        <button onClick={handleLogin} className="header__login">Login</button>
                    </>
                ) : (
                    <>
                        <Link to="/my-profile" className="header-my-profile">My Profile</Link>
                        <button onClick={handleLogout} className="header__logout">Logout</button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Header;