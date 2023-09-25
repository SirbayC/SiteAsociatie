import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  // const navigate = useNavigate()

  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || "regularUser"
  );

  const [accessToken, setAccessToken] = useState(
    JSON.parse(sessionStorage.getItem("accessToken")) || null
  );

  const login = async (inputs) => {
    const res = await axios.post(process.env.REACT_APP_API_URL + "auth/login", inputs);
    setUser(res.data.user);
    setAccessToken(res.data.accessToken);
  };

  const logout = async () => {
    setUser(null);
    setAccessToken(null);
  };

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(user));
    sessionStorage.setItem("accessToken", JSON.stringify(accessToken));
  }, [user, accessToken]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};