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

// function for destroy a list
export async function destroyList(boardId, listId) {
  const deletedList = await apiFetch(`boards/${boardId}/lists/${listId}`, {
    method: "DELETE",
  });
  console.log(deletedList);
  return deletedList;
}

// function for sort a list
export async function sortList(boardId) {
  const board = await showBoard(boardId);
  const listsIds = board.lists.map((list) => list.listId);
  const sortedList = await apiFetch(`boards/${boardId}/lists/sort`, {
    method: "POST",
    body: { ids: listsIds },
  });
  console.log(sortedList);
  return sortedList;
}
