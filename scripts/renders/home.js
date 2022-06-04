function renderHome() {
  return `
  <main class="mainApp">
      <!-- aside -->

      <aside class="lateralBar">
        <ul>
          <div>
            <!-- logo -->
            <li class="asideLogo">
              <span class="icon-text">
                <span>{ organizable }</span>
              </span>
            </li>

            <!-- my boards -->
            <li class="asideMyBoards">
              <span class="icon-text">
                <span class="icon">
                  <i class="fas fa-solid fa-border-all"></i>
                </span>
                <span>My Boards</span>
              </span>
            </li>

            <!-- closed boards -->
            <li class="asideClosedBoards">
              <span class="icon-text">
                <span class="icon">
                  <i class="fas fa-solid fa-trash"></i>
                </span>
                <span>Closed Boards</span>
              </span>
            </li>

            <!-- my profile -->
            <li class="asideMyProfile">
              <span class="icon-text">
                <span class="icon">
                  <i class="fas fa-solid fa-id-badge"></i>
                </span>
                <span>My Profile</span>
              </span>
            </li>
          </div>
          <!-- logout -->
          <li class="asideLogout">
            <span class="icon-text">
              <span class="icon">
                <i class="fas fa-solid fa-power-off"></i>
              </span>
              <span>Log out</span>
            </span>
          </li>
        </ul>
      </aside>
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
