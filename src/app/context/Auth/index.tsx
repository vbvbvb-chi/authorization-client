import React, { createContext, useMemo } from "react";

const AuthContext = createContext({});

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const toolkit = useMemo(()=> ({}),[]);

  return (
    <AuthContext.Provider value={toolkit}>
      {children}
    </AuthContext.Provider>
  )
}