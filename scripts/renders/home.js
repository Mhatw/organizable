import DOMHandler from "../dom-handler.js";
import STORE from "../store.js";
import {
  listenLogout,
  renderAside,
  asideRenderProfile,
  asideRenderClosed,
} from "./aside.js";
import { closedBoardBtn, renderCard } from "./card.js";
import {
  createBoardButton,
  listenModal,
  modal,
  listenColorPicker,
  createBoardSubmit,
} from "./create.js";

function renderHome() {
  return `
  <main class="mainApp">
      <!-- aside -->
      ${renderAside()}
      
      <!-- right panel -->
      <section class="appBoards">
        <div class="myBoards">
          <h2>My Boards</h2>
          <!-- starred -->
          ${renderBoards("fav")}

          <!-- Boards -->
          ${renderBoards()}

        </div>
      </section>
    </main>
    ${modal}
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
  return `
    <!-- starred -->
      <div class="appBoardsStarted">
        <h3>${type == "fav" ? icon : "Boards"}
        </h3>

        <div class="boardContainer">

          <!-- card -->
          ${type == "fav" ? "" : createBoardButton}
          ${renderCards(type)}          
        </div>
      </div>
    `;
}

function renderCards(type) {
  let render = `<hr style="width:80%;background:#bababa;margin-top:-2rem">`;
  if (type == "fav") {
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
function hiddenStartedBoards() {
  const listener = $("#hiddenStarted");
  if (listener) {
    listener.addEventListener("click", (event) => {
      const icon = $("#hiddenStartedIcon");
      STORE.hiddenStarted = !STORE.hiddenStarted;
      DOMHandler.reload();
      icon.classList.toggle("fa-eye-slash");
    });
  }
}

export const HomePage = {
  toString() {
    return renderHome();
  },
  addListeners() {
    // listenCreate()
    listenLogout(),
      hiddenStartedBoards(),
      asideRenderProfile(),
      asideRenderClosed(),
      listenModal(),
      listenColorPicker(),
      createBoardSubmit(),
      closedBoardBtn();
  },
};
