import { tokenKey } from "../config.js";
import apiFetch from "./api-fetch.js";

export async function createUser(
  credentials = { username, email, first_name, last_name, password }
) {
  const { token, ...user } = await apiFetch("users", { body: credentials });
  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function updateUser(
  id,
  payload = { username, email, first_name, last_name }
) {
  const { token, ...user } = await apiFetch(`users/${id}`, {
    method: "PATCH",
    body: payload,
  });
  return user;
}
export async function destroyUser(id) {
  return await apiFetch(`users/${id}`, { method: "DELETE" });
}
