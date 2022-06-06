import DOMHandler from "../dom-handler.js";
import { logout } from "../services/sessions-service.js";
import { ClosedPage } from "./closed.js";
import { HomePage } from "./home.js";
import { goodbye } from "./loaders.js";
import LoginPage from "./login.js";
import { ProfilePage } from "./profile.js";
// selected default myBoards, options: closed || profile
export function renderAside(selected) {
  return `
  <aside class="lateralBar">
        <ul>
          <div>
            <!-- logo -->
            <li class="asideLogo">
              <span class="icon-text">
                <span class="textLogoAside" is-unselectable></span>
              </span>
            </li>

            <!-- my boards -->
            <li class="asideMyBoards ${selected ? "" : "asideSelected"}">
              <span class="icon-text">
                <span class="icon">
                  <i class="fas fa-solid fa-border-all"></i>
                </span>
                <span class="textAside">My Boards</span>
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
                <span class="textAside">Closed Boards</span>
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
                <span class="textAside">My Profile</span>
              </span>
            </li>
          </div>
          <!-- logout -->
          <li class="asideLogout">
            <span class="icon-text">
              <span class="icon">
                <i class="fas fa-solid fa-power-off"></i>
              </span>
              <span class="textAside">Log out</span>
            </span>
          </li>
        </ul>
      </aside>
  `;
}

const $ = (selector) => document.querySelector(selector);
export function asideRenderMyBoards() {
  document.querySelector(".asideMyBoards").addEventListener("click", () => {
    DOMHandler.load(HomePage);
  });
}
export function asideRenderProfile() {
  document.querySelector(".asideMyProfile").addEventListener("click", () => {
    DOMHandler.load(ProfilePage);
  });
}
export function asideRenderClosed() {
  document.querySelector(".asideClosedBoards").addEventListener("click", () => {
    DOMHandler.load(ClosedPage);
  });
}
export function listenLogout() {
  document.querySelector(".asideLogout").addEventListener("click", () => {
    if (confirm("Are you sure you want to log out?")) {
      logout();
      setTimeout(function () {
        $("body").innerHTML = goodbye;
        setTimeout(async () => {
          window.location.reload();
        }, 3000);
      }, 500);
    }
  });
}
