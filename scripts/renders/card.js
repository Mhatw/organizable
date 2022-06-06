import DOMHandler from "../dom-handler.js";
import { updateBoard } from "../services/boards-service.js";
import STORE from "../store.js";

export function renderCard(title, id, color) {
  return `
  <div class="boardCard box" style="background:${color}" id="${id}">
    <div class="boardCardHeader">
      <h4>${title}</h4>
    </div>
    <div class="boardCardFooter">
      <span class="icon" id="board-closed-btn">
        <i class="fas fa-trash"></i>
      </span>
      <span class="icon">
        <i class="fas fa-star"></i>
      </span>
    </div>
  </div>
  `;
}

export function closedBoardBtn() {
  document.querySelectorAll("#board-closed-btn").forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const cardId = e.target.closest(".boardCard").id;
      console.dir(cardId);
      const card = document.getElementById(cardId);
      card.remove();
      const response = await updateBoard(cardId, { closed: true });
      STORE.closed.push(response);
    });
  });
}
