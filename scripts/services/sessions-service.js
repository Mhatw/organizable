import { tokenKey } from "../config.js";
import apiFetch from "./api-fetch.js";

export async function login(credentials = { username, password }) {
  const { token, ...user } = await apiFetch("login", { body: credentials });
  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function logout() {
  try {
    const data = await apiFetch("logout", { method: "POST" });
    sessionStorage.removeItem(tokenKey);
    return data;
  } catch (error) {
    console.log(error);
  }
}

// const credentialsModel = {
//   username: "mhatw",
//   password: "asdfasdf",
// };

// login(credentialsModel);

// const button = document.querySelector("button");
// button.addEventListener("click", logout);
