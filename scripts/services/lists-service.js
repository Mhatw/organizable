import apiFetch from "./api-fetch.js";
import { showBoard } from "./boards-service.js";

//  function for create a list
export async function createList(boardId, list = { name }) {
  const newList = await apiFetch(`boards/${boardId}/lists`, { body: list });
  return newList;
}

// function for update a list
export async function updateList(boardId, listId, list = { name }) {
  const updatedList = await apiFetch(`boards/${boardId}/lists/${listId}`, {
    method: "PATCH",
    body: list,
  });
  return updatedList;
}

// function for destroy a list
export async function destroyList(boardId, listId) {
  const deletedList = await apiFetch(`boards/${boardId}/lists/${listId}`, {
    method: "DELETE",
  });
  return deletedList;
}

// function for sort a list
export async function sortLists(boardId) {
  const board = await showBoard(boardId);
  const listsIds = board.lists.map((list) => list.listId);
  const sortedList = await apiFetch(`boards/${boardId}/lists/sort`, {
    method: "POST",
    body: { ids: listsIds },
  });
  return sortedList;
}
