import { indexBoards } from "./services/boards-service.js";

async function fetchBoards() {
  const all_boards = await indexBoards();
  console.log(all_boards);
  this.boards = [...all_boards];
  console.log(this.boards);
  this.favorites = all_boards
    .filter((board) => board.starred === true)
    .reverse();
}
let STORE = {
  user: null,
  // contacts: [],
  favorites: [],
  // currentContact: null,
  fetchBoards,
  // deleteContact,
  // favoriteContact,
  // unFavoriteContact,
};

export default STORE;
