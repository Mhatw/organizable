import { renderAside } from "./aside.js";

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
          <div class="appBoardsStarted">
            <h3>Started boards</h3>
            <div class="boardContainer">

              <!-- card -->
              <div class="boardCard box">
                <div class="boardCardHeader">
                  <h4>Board name</h4>
                </div>
                <div class="boardCardFooter">
                  <span class="icon ">
                    <i class="fas fa-trash"></i>
                  </span>
                  <span class="icon">
                    <i class="fas fa-star"></i>
                  </span>
              </div>
            
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}

export const HomePage = {
  toString() {
    return renderHome();
  },
  addListeners() {
    // listenCreate()
  },
};
