import { createContext, ReactNode, useContext } from "react";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";

interface AuthContextProps {
  session: Session | null;
}

export const AuthContext = createContext<AuthContextProps>({
  session: null,
});

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSession();

  return (
    <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
