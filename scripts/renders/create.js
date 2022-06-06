import DOMHandler from "../dom-handler.js";
import { createBoard } from "../services/boards-service.js";
import STORE from "../store.js";

export const modal = `
    <!-- made a modal -->
    <div id="myModal" class="modal">

      <!-- Modal content -->
      <div class="modal-content">
        <div>
        <!-- card -->
        <div class="boardCardForm box" id="card">
          <form class="modalForm" action="">
                <input class="input is-small" type="text" placeholder="board name">
                <input type="hidden" name="color" id="input-color" value="#9cbced" />
              <button class="button is-dark is-small modalButton">Create board</button>
          </form>
        </div>
        <div class="modalPallete">
          <div class="mp-1 color-picker__item" data-value="#b5adde"></div>
          <div class="mp-2 color-picker__item" data-value="#9cbced"></div>
          <div class="mp-3 color-picker__item" data-value="#b5d6e8"></div>
          <div class="mp-4 color-picker__item" data-value="#9ee3db"></div>
          <div class="mp-5 color-picker__item" data-value="#d3e68f"></div>
          <div class="mp-6 color-picker__item" data-value="#ffb87d"></div>
          <div class="mp-7 color-picker__item" data-value="#ffa791"></div>
          <div class="mp-8 color-picker__item" data-value="#ffb0b0"></div>
          <div class="mp-9 color-picker__item" data-value="#eda1d2"></div>
        </div>
      </div>
      <span class="close">&times;</span>
      </div>
    </div>
`;

export const createBoardButton = `
  <div class="boardCard box" id="createNewCard">
    <i class="fas fa-solid fa-plus"></i>
  </div>
`;

export function listenColorPicker() {
  const colorPicker = document.getElementsByClassName("color-picker__item");
  for (let i = 0; i < colorPicker.length; i++) {
    colorPicker[i].onclick = function () {
      const color = colorPicker[i].dataset.value;
      const input = document.getElementById("input-color");
      input.value = color;
      const form = document.getElementsByClassName("boardCardForm")[0];
      form.style.backgroundColor = color;
    };
  }
}
export function listenModal() {
  const modal = document.getElementById("myModal");
  const span = document.getElementsByClassName("close")[0];
  console.dir(document.getElementById("createNewCard"));
  const modalButton = document.getElementById("createNewCard");
  modalButton.addEventListener("click", (event) => {
    modal.classList.toggle("modalNoHidden");
  });
  span.addEventListener("click", (event) => {
    modal.classList.toggle("modalNoHidden");
  });
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.classList.toggle("modalNoHidden");
    }
  };
}
export function createBoardSubmit() {
  const form = document.getElementsByClassName("modalForm")[0];
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = form.children[0].value;
    const color = form.children[1].value;
    const board = {
      name: name,
      color: color,
    };
    document.querySelector(".modalButton").classList.toggle("is-loading");
    await createBoard(board);
    await STORE.fetchBoards();
    setTimeout(() => {
      DOMHandler.reload();
      modal.classList.toggle("modalNoHidden");
    }, 500);
  });
}
