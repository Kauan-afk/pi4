import { useBackendApi } from "@/hooks/useBackendApi";
import { createContext, useState, useEffect, JSX } from "react";

interface AuthContextProps {
  user: UserProps | null;
  signin: (username: string, password: string) => Promise<boolean>;
  signout: () => void;
}

interface UserProps {
  _id: string,
  username: string,
  email: string,
  password: string,
}

export const AuthContext = createContext<AuthContextProps>(null!);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<UserProps | null>(null);

  const api = useBackendApi();

  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem("authToken");
      if (storageData) {
        const data = await api.getUserByToken();
        if (data.username) {
          setUser(data.username);
        }
      }
    };
    validateToken();
  }, []);
  

  const signin = async (username: string, password: string) => {
    const data = await api.login(username, password)
    if (data.username) {
      console.log(data.username)
      console.log("data.token")
      setUser(data.username);
      setToken(data.token)
      return true;
    }
  
    return false;
  };

  const signout = async () => {
    await api.logout();
    setUser(null);
    setToken("");
  };

  const setToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};