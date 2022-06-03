import { tokenKey } from "../config.js";
import apiFetch from "./api-fetch.js";
import { login } from "./sessions-service.js";

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

// const credentialsModelLogin = {
//   username: "mhatw1",
//   password: "asdfasdf",
// };
// const credentialsModelLogin2 = {
//   username: "mhatw1",
//   email: "mhatw2@mail.com",
//   first_name: "mhatw",
//   last_name: "mhatw",
//   password: "asdfasdf",
// };
// const user2 = await createUser(credentialsModelLogin2);
// const user = await login(credentialsModelLogin);
// destroyUser(user.id);

// const credentialsModel = {
//   username: "mhatw22",
//   email: "mhatw2@mail.com",
//   first_name: "mhatw",
//   last_name: "mhatw",
// };

// await updateUser(user.id, credentialsModel);
