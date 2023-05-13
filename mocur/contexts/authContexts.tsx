import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

interface AuthContextProps {}

export const AuthContext = createContext<AuthContextProps>({});

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSession();

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
