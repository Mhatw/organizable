import { indexBoards } from "./services/boards-service.js";

async function fetchBoards() {
  const all_boards = await indexBoards();
  this.boards = [...all_boards];
  this.favorites = all_boards
    .filter((board) => board.starred === true)
    .reverse();
  this.favorites = all_boards
    .filter((board) => board.closed === true)
    .reverse();
  console.log(STORE);
}
let STORE = {
  user: null,
  boards: [],
  favorites: [],
  closed: [],
  hiddenStarted: true,
  // currentContact: null,
  fetchBoards,
  // deleteContact,
  // favoriteContact,
  // unFavoriteContact,
};

export default STORE;
