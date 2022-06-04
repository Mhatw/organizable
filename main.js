import { tokenKey } from "./scripts/config.js";
import DOMHandler from "./scripts/dom-handler.js";
import { HomePage } from "./scripts/renders/home.js";
import LoginPage from "./scripts/renders/login.js";
async function init() {
  try {
    const token = sessionStorage.getItem(tokenKey);

    if (!token) throw new Error();

    await STORE.fetchContacts();
    DOMHandler.load(LoginPage);
  } catch (error) {
    sessionStorage.removeItem(tokenKey);
    DOMHandler.load(HomePage);
  }
}

init();
