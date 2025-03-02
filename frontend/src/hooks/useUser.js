import { useState, useEffect } from "react";
import axios from "axios";

export function useUser() {
  const [user, setUser] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/users/me",
          {
            withCredentials: true, // Ensures cookies/session are sent
          }
        );

        // console.log("User data:", response);

        setUser(response.data);
        setIsAuthenticated(true);
      } catch (error) {
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setIsPending(false);
      }
    }

    fetchUser();
  }, []);

  return { user, isPending, isAuthenticated, setUser };
}
