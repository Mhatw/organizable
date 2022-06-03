import { tokenKey } from "../config.js";
import apiFetch from "./api-fetch.js";
import { login } from "./sessions-service.js";

// function for index all boards of a user
export async function indexBoards() {
  console.log(await apiFetch("boards"));
  return await apiFetch("boards");
}
// function for show an expecified board
export async function showBoard(id) {
  const board = await apiFetch(`boards/${id}`);
  console.log(board);
  return board;
}

// function for create a new board
export async function createBoard(
  board = { name, color, starred, closed, createdAt }
) {
  const newBoard = await apiFetch("boards", { body: board });
  console.log(newBoard);
  return newBoard;
}

// fuctions for update a board
export async function updateBoard(
  id,
  board = { name, color, starred, closed }
) {
  const updatedBoard = await apiFetch(`boards/${id}`, {
    method: "PATCH",
    body: board,
  });
  console.log(updatedBoard);
  return updatedBoard;
}

