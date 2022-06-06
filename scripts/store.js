import { userKey } from "./config.js";
import { indexBoards } from "./services/boards-service.js";
import { toLocalStorage } from "./utils.js";

async function fetchBoards() {
  const all_boards = await indexBoards();
  this.allBoards = [...all_boards];
  this.boards = all_boards.filter((board) => board.closed === false).reverse();
  this.favorites = all_boards
    .filter((board) => board.starred === true && board.closed === false)
    .reverse();
  this.closed = all_boards.filter((board) => board.closed === true).reverse();
  console.log(STORE);
}
function setUser(user) {
  toLocalStorage(userKey, user);
  this.user = user;
}
let STORE = {
  user: null,
  allBoards: [],
  boards: [],
  favorites: [],
  closed: [],
  hiddenStarted: true,
  // currentContact: null,
  fetchBoards,
  setUser,
  // favoriteContact,
  // unFavoriteContact,
};

export default STORE;
