import { tokenKey } from "../config.js";
import apiFetch from "./api-fetch.js";
import { createBoard, indexBoards, showBoard } from "./boards-service.js";
import { login } from "./sessions-service.js";
import { createUser } from "./users-service.js";

//  function for create a list
export async function createList(boardId, list = { name }) {
  const newList = await apiFetch(`boards/${boardId}/lists`, { body: list });
  console.log(newList);
  return newList;
}

// function for update a list
export async function updateList(boardId, listId, list = { name }) {
  const updatedList = await apiFetch(`boards/${boardId}/lists/${listId}`, {
    method: "PATCH",
    body: list,
  });
  console.log(updatedList);
  return updatedList;
}
