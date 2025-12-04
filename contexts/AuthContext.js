import { createContext, useContext, useMemo, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isGuest, setIsGuest] = useState(true);

  const isValid = !!user || isGuest;

  const auth = useMemo(
    () => ({
      login: async (email, password) => {
        setIsLoading(true);

        // --- API CALL LOGIC HERE ---

        const userData = {};
        setUser(userData);
        setIsGuest(false);
        setIsLoading(false);
      },

      guestLogin: () => {
        setUser(null);
        setIsGuest(true);
      },

      logout: () => {
        setUser(null);
        setIsGuest(false);
      },

      isValid: isValid,
    }),
    [isValid]
  );

  return (
    <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
