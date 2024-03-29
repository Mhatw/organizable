import DOMHandler from "../dom-handler.js";
import { destroyBoard, updateBoard } from "../services/boards-service.js";
import STORE from "../store.js";
import { HomePage } from "./home.js";

export function renderCard(title, id, color, typeTag, type) {
  return `
  <div class="boardCard box" style="background:${color}" id="${id}">
    <div class="boardCardHeader">
      <h4>${title}</h4>
    </div>
    <div class="boardCardFooter">
      <span class="icon" id="board-closed-btn">
        <i class="fas ${
          type == "closed" ? "fa-solid fa-arrow-up" : "fa-solid fa-arrow-down"
        }"></i>
        </span>
        <span class="icon js-trash" id="board-${typeTag}-btn">
          <i class="fas ${type == "closed" ? "fa-trash" : "fa-star"}"></i>
        </span>
    </div>
  </div>
  `;
}

export function closedBoardBtn() {
  document.querySelectorAll("#board-closed-btn").forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const cardId = e.target.closest(".boardCard").id;
      const card = document.getElementById(cardId);
      card.remove();
      const response = await updateBoard(cardId, { closed: true });
      STORE.closed.unshift(response);
      if (response.starred === true) {
        const index = STORE.favorites.findIndex((board) => board.id == cardId);
        STORE.favorites.splice(index, 1);
      } else {
        const index = STORE.boards.findIndex((board) => board.id == cardId);
        STORE.boards.splice(index, 1);
      }
      DOMHandler.reload();
    });
  });
}
export function reOpenBoardBtn() {
  document.querySelectorAll("#board-closed-btn").forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const cardId = e.target.closest(".boardCard").id;
      const card = document.getElementById(cardId);
      const response = await updateBoard(cardId, { closed: false });
      const index = STORE.closed.findIndex((board) => board.id == cardId);
      STORE.closed.splice(index, 1);
      if (response.starred === true) {
        STORE.favorites.unshift(response);
      } else {
        STORE.boards.unshift(response);
      }

      DOMHandler.reload();
    });
  });
}

export function startedBoardBtn() {
  document.querySelectorAll("#board-unStarted-btn").forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      // console.dir(STORE);
      const cardId = e.target.closest(".boardCard").id;
      const card = document.getElementById(cardId);
      // card.remove();
      const response = await updateBoard(cardId, { starred: true });
      STORE.favorites.push(response);
      const index = STORE.boards.findIndex((board) => board.id == cardId);
      STORE.boards.splice(index, 1);
      DOMHandler.reload();
    });
  });
}
export function unStartedBoardBtn() {
  document.querySelectorAll("#board-started-btn").forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const cardId = e.target.closest(".boardCard").id;
      const card = document.getElementById(cardId);
      // card.remove();
      const response = await updateBoard(cardId, { starred: false });
      STORE.boards.push(response);
      const index = STORE.favorites.findIndex((board) => board.id == cardId);
      // console.dir(STORE);
      STORE.favorites.splice(index, 1);
      DOMHandler.reload();
    });
  });
}

export function destroyBoardBtn() {
  document.querySelectorAll(".js-trash").forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      // console.dir(STORE);
      if (confirm("Are you sure you want to delete this board?")) {
        const cardId = e.target.closest(".boardCard").id;
        const card = document.getElementById(cardId);
        console.log(cardId);
        await destroyBoard(cardId);
        const index = STORE.closed.findIndex((board) => board.id == cardId);
        STORE.closed.splice(index, 1);
        DOMHandler.reload();
      }
    });
  });
}
