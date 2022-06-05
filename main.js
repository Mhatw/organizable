import { tokenKey } from "./scripts/config.js";
import DOMHandler from "./scripts/dom-handler.js";
import { HomePage } from "./scripts/renders/home.js";
import LoginPage from "./scripts/renders/login.js";
import { ProfilePage } from "./scripts/renders/profile.js";
import STORE from "./scripts/store.js";
async function init() {
  try {
    const token = sessionStorage.getItem(tokenKey);
    console.log(token);
    if (!token) throw new Error();

    await STORE.fetchBoards();
    DOMHandler.load(ProfilePage);
  } catch (error) {
    console.log("main errors", error);
    sessionStorage.removeItem(tokenKey);
    DOMHandler.load(LoginPage);
  }
}

init();
