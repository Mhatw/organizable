import { tokenKey, userKey } from "./scripts/config.js";
import DOMHandler from "./scripts/dom-handler.js";
import { HomePage } from "./scripts/renders/home.js";
import LoginPage from "./scripts/renders/login.js";
import { ProfilePage } from "./scripts/renders/profile.js";
import STORE from "./scripts/store.js";
import { fromLocalStorage } from "./scripts/utils.js";
async function init() {
  try {
    const token = sessionStorage.getItem(tokenKey);
    console.log(token);
    if (!token) throw new Error();
    await STORE.fetchBoards();

    STORE.setUser(fromLocalStorage(userKey));
    DOMHandler.load(HomePage);
  } catch (error) {
    console.log("main errors", error);
    sessionStorage.removeItem(tokenKey);
    DOMHandler.load(LoginPage);
  }
}

init();
