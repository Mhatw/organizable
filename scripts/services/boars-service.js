import { tokenKey } from "../config.js";
import apiFetch from "./api-fetch.js";
import { login } from "./sessions-service.js";

// function for index all boards of a user
export async function indexBoards() {
  console.log(await apiFetch("boards"));
  return await apiFetch("boards");
}
