import apiFetch from "./api-fetch.js";

// function for index all boards of a user
export async function indexBoards() {
  const boards = await apiFetch("boards");
  return boards;
}
// function for show an expecified board
export async function showBoard(id) {
  const board = await apiFetch(`boards/${id}`);
  return board;
}

// function for create a new board
export async function createBoard(
  board = { name, color, starred, closed, createdAt }
) {
  const newBoard = await apiFetch("boards", { body: board });
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
  return updatedBoard;
}

// function for delete a board
export async function destroyBoard(id) {
  const deletedBoard = await apiFetch(`boards/${id}`, { method: "DELETE" });
  return deletedBoard;
}
