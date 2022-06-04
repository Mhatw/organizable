export function renderAside() {
  return `
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
            <li class="asideMyBoards ${selected ? "" : "asideSelected"}">
              <span class="icon-text">
                <span class="icon">
                  <i class="fas fa-solid fa-border-all"></i>
                </span>
                <span>My Boards</span>
              </span>
            </li>

            <!-- closed boards -->
            <li class="asideClosedBoards ${
              selected == "closed" ? "asideSelected" : ""
            }">
              <span class="icon-text">
                <span class="icon">
                  <i class="fas fa-solid fa-trash"></i>
                </span>
                <span>Closed Boards</span>
              </span>
            </li>

            <!-- my profile -->
            <li class="asideMyProfile ${
              selected == "profile" ? "asideSelected" : ""
            }">
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
  `;
}
