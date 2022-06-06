import DOMHandler from "../dom-handler.js";
import STORE from "../store.js";
import {
  listenLogout,
  renderAside,
  asideRenderProfile,
  asideRenderMyBoards,
} from "./aside.js";
import { renderCard } from "./card.js";

function renderClosedBoards() {
  return `
  <main class="mainApp">
      <!-- aside -->
      ${renderAside("closed")}
      
      <!-- right panel -->
      <section class="appBoards">
        <div class="myBoards">
          <h2>Boards</h2>

          ${renderBoards("closed")}

        </div>
      </section>
    </main>
  `;
}
const $ = (selector) => document.querySelector(selector);

function renderBoards(type) {
  if (type == "fav" && STORE.favorites.length <= 0) return ``;

  const icon = `Started boards 
    <span class="icon mx-2" id="hiddenStarted">
      <i class="fas fa-eye ${
        STORE.hiddenStarted ? "" : "fa-eye-slash"
      }" id="hiddenStartedIcon"></i>
    </span>`;
  const mainTitle =
    type == "fav" ? icon : type == "closed" ? "Closed boards" : "Boards";
  return `
    <!-- ${type} -->
      <div class="appBoardsStarted">
        <h3>${mainTitle}</h3>

        <div class="boardContainer">

          <!-- card -->
          ${renderCards(type)}          
        </div>
      </div>
    `;
}

function renderCards(type) {
  let render = `<hr style="width:80%;background:#bababa;margin-top:-2rem">`;
  if (type == "closed") {
    console.log("this", STORE.closed);
    render = STORE.closed
      .map((board) => renderCard(board.name, board.id, board.color))
      .join("");
  } else if (type == "fav") {
    if (STORE.hiddenStarted === true) {
      render = STORE.favorites
        .map((board) => renderCard(board.name, board.id, board.color))
        .join("");
    }
  } else {
    render = STORE.boards
      .map((board) => renderCard(board.name, board.id, board.color))
      .join("");
  }
  return render;
}

export const ClosedPage = {
  toString() {
    return renderClosedBoards();
  },
  addListeners() {
    // listenCreate()
    listenLogout(), asideRenderProfile(), asideRenderMyBoards();
  },
};
