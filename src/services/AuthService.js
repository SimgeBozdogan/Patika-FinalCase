import { getAllAdmins } from "./adminsService";

class AuthService {
  static async login(userName, password) {
    try {
      const allAdminsResponse = await getAllAdmins();
      const loggedInUser = allAdminsResponse.find(
        (element) =>
          element.userName === userName && element.password === password
      );

      localStorage.setItem("userLoggedIn", Boolean(loggedInUser));
    } catch (error) {
      console.error("Login failed:", error.message);
      localStorage.setItem("userLoggedIn", false);
    }
  }

  static logout() {
    localStorage.removeItem("userLoggedIn");
  }

  static isLoggedIn() {
    return localStorage.getItem("userLoggedIn") === "true";
  }
}

export default AuthService;
