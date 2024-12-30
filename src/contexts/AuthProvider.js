import React, { createContext, useState, useEffect } from "react";
import keycloak from "../keycloak";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(keycloak.authenticated);
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const updateAuthState = () => {
            setIsAuthenticated(keycloak.authenticated);
            if (keycloak.authenticated) {
                keycloak.loadUserProfile().then(userProfile => {
                    setProfile(userProfile);
                });
            } else {
                setProfile(null);
            }
        };

        keycloak.onAuthSuccess = updateAuthState;
        keycloak.onAuthLogout = updateAuthState;
        keycloak.onTokenExpired = () => keycloak.updateToken(30);

        updateAuthState();
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, profile, keycloak, setProfile }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
