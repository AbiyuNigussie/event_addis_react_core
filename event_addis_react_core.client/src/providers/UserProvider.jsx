import React, { useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(getToken());
  const [userId, setUserId] = useState(getUserId());
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true" || false;
  });

  function getToken() {
    const storedToken = localStorage.getItem("token");
    return storedToken ? JSON.parse(storedToken) : null;
  }
  function getUserId() {
    const storedUserId = localStorage.getItem("userId");
    return storedUserId ? JSON.parse(storedUserId) : null;
  }
  const login = (data) => {
    setToken(data.token);
    setUserId(data.id);
    localStorage.setItem("token", JSON.stringify(data.token));
    localStorage.setItem("userId", JSON.stringify(data.id));
    setIsAuthenticated(true);
  };
  const logout = () => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setIsAuthenticated(false);
  };

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <UserContext.Provider
      value={{ token, userId, isAuthenticated, login, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
