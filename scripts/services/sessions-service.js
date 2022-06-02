import { tokenKey } from "../config.js";
import apiFetch from "./api-fetch.js";

export async function login(credentials = { username, password }) {
  const { token, ...user } = await apiFetch("login", { body: credentials });
  console.log(token);
  console.log("===========");
  console.log(user);
  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function logout() {
  try {
    // falta arreglar esto
    // const data = await apiFetch("logout", { method: "DELETE" });
    alert("fue pe");
    sessionStorage.removeItem(tokenKey);
    return data;
  } catch (error) {
    console.log(error);
  }
}

const credentialsModel = {
  username: "mhatw",
  password: "asdfasdf",
};

login(credentialsModel);
