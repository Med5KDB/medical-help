import { AuthProvider, UserIdentity } from "react-admin";
import { users } from "../users.json"



const authProvider: AuthProvider = {
  login: ({ username, password }) => {
    const request = new Request(
      `${import.meta.env.VITE_SIMPLE_REST_URL}/auth/login`,
      {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: new Headers({ "Content-Type": "application/json" }),
      }
    );
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((auth) => {

        const token = JSON.parse(JSON.stringify(auth)).replace(/['"]+/g, '');
        localStorage.setItem("token", token);
      })
      .catch((error) => {
        throw new Error(error.json);
      });
  },
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return Promise.resolve();
  },
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("token");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () =>

    localStorage.getItem("token") ? Promise.resolve() : Promise.reject(),
  getPermissions: () => {
    const persistedUser = localStorage.getItem("user");
    const user = persistedUser ? JSON.parse(persistedUser) : null;
    return Promise.resolve(user.role);
  },
  getIdentity: () => {
    const persistedUser = localStorage.getItem("user");
    const user = persistedUser ? JSON.parse(persistedUser) : null;
    if (user) return Promise.resolve(user);
    const persistedToken = localStorage.getItem("token");
    if (!persistedToken) {
      return Promise.resolve({});
    }

    return fetch(`${import.meta.env.VITE_SIMPLE_REST_URL}/auth/profile`, {
      headers: {
        Authorization: `Bearer ${persistedToken}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user profile");
        }
        return response.json();
      })
      .then((profileData) => {
        profileData.avatar = users[1].avatar
        localStorage.setItem("user", JSON.stringify(profileData));
        return profileData;
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
        return {};
      });
  },

};
export const resourceToPermissionMapper: Record<string, string[]> = {
  ADMIN: ["hospital", "doctor", "medical-assistant", "patient", "medicalRecord", "medicine", 'appointment'],
  DOCTOR: ["medical-assistant", "patient", "medicalRecord", "medicine", 'appointment'],
  MEDICAL_ASSISTANT: ["patient", "medicalRecord", "medicine"],
};




export default authProvider;
