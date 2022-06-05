import DOMHandler from "../dom-handler.js";
import { destroyUser, updateUser } from "../services/users-service.js";
import STORE from "../store.js";
import { asideRenderMyBoards, listenLogout, renderAside } from "./aside.js";
import { HomePage } from "./home.js";
import { goodbyeDeleteUser, successMsg } from "./loaders.js";

function renderProfile() {
  return `
  <main class="mainApp">
      <!-- aside -->
      ${renderAside("profile")}
      
      <!-- right panel -->
      <section class="editProfile appBoards">
        
      <h2>My Profile</h2>
      <form action="" class="form">
        <div class="inputContainer">
          <!-- username -->
          <div class="field">
            <p class="control has-icons-left">
              <input
                class="input"
                type="text"
                name="username"
                placeholder="username"
                required
              />
              <span class="icon is-small is-left">
                <i class="fas fa-solid fa-user"></i>
              </span>
            </p>
          </div>
          <!-- email -->
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="email" 
              name="email" placeholder="email" required />
              <span class="icon is-small is-left">
                <i class="fas fa-solid fa-at"></i>
              </span>
            </p>
          </div>
          <!-- first name -->
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="text" 
              name="firstName" placeholder="first name" />
              <span class="icon is-small is-left">
                <i class="fas fa-solid fa-clipboard"></i>
              </span>
            </p>
          </div>
          <!-- last name -->
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="text" 
              name="lastName" placeholder="last name" />
              <span class="icon is-small is-left">
                <i class="fas fa-solid fa-clipboard"></i>
              </span>
            </p>
          </div>
        <!-- submit btn -->
        <div class="control">
          <button
            type="submit"
            class="button is-fullwidth is-link"
            id="submit-btn"
          >
            🚀Update Profile
          </button>
        </div>
        <!-- submit btn -->
        <div class="">
          <button
            class="button is-fullwidth is-danger is-light"
            id="delete-user-btn"
          >
          😥Delete My Account
          </button>
        </div>
      </form>

      </section>
    </main>
  `;
}

const $ = (selector) => document.querySelector(selector);

function loadUserData() {
  const $form = $(".form");
  console.log(STORE.user);
  $form.username.value = STORE.user.username;
  $form.email.value = STORE.user.email;
  $form.firstName.value = STORE.user.firstName;
  $form.lastName.value = STORE.user.lastName;
}

function updateMyProfile() {
  const $form = $(".form");
  $form.addEventListener("submit", async (event) => {
    event.preventDefault();
    $("#submit-btn").classList.toggle("is-loading");
    try {
      const { username, email, firstName, lastName } = event.target;
      const user = await updateUser(STORE.user.id, {
        username: username.value,
        email: email.value,
        first_name: firstName.value,
        last_name: lastName.value,
      });
      STORE.user = user;
      setTimeout(function () {
        // loadingPage();
        successMsg;
        $form.innerHTML = successMsg;
        setTimeout(async () => {
          // await STORE.fetchBoards();
          DOMHandler.load(ProfilePage);
        }, 1000);
      }, 500);
    } catch (error) {
      ProfilePage.state.updateError = error.message;
      setTimeout(function () {
        DOMHandler.reload();
      }, 1000);
    }
  });
}
function deleteMyAccount() {
  const $deleteBtn = $("#delete-user-btn");
  $deleteBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    if (confirm("Are you sure you want to delete your account?")) {
      $deleteBtn.classList.toggle("is-loading");
      try {
        await destroyUser(STORE.user.id);
        sessionStorage.removeItem("token");
        setTimeout(function () {
          $("body").innerHTML = goodbyeDeleteUser;
          setTimeout(async () => {
            window.location.reload();
          }, 4000);
        }, 500);
      } catch (error) {
        console.log("error", error);
        setTimeout(function () {
          $deleteBtn.classList.toggle("is-loading");
        }, 1000);
      }
    }
  });
}

export const ProfilePage = {
  toString() {
    return renderProfile();
  },
  addListeners() {
    listenLogout(),
      updateMyProfile(),
      deleteMyAccount(),
      asideRenderMyBoards(),
      loadUserData();
  },
  state: {
    updateError: null,
  },
};
