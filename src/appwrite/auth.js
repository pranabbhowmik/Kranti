import { Client, Account, ID } from "appwrite";
import confige from "../confige/confige";
export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(confige.appwriteUrl)
      .setProject(confige.appwriteProjectId);
    this.account = new Account(this.client);
  }
  async creatAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // direct Login function
        this.account.loginAccount({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("CreateAccount Error:", error);
    }
  }

  async loginAccount({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Login Error:", error);
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("getuser Error:", error);
    }
    return null;
  }
  async logoutAccount() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Logout Error:", error);
    }
  }
}

const authservice = new AuthService();
export default authservice;
