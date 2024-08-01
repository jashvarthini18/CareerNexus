// AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser, userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
