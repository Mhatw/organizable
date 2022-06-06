import DOMHandler from "../dom-handler.js";
import { login } from "../services/sessions-service.js";
import STORE from "../store.js";
import { toLocalStorage } from "../utils.js";
import { HomePage } from "./home.js";
import SignupPage from "./signup.js";
function renderLogin() {
  const { loginError } = LoginPage.state;
  return `
  <section id="login" class="session">
      <!-- form -->
      <form action="" class="formComponent form box">
        <h2>Login</h2>
        <div class="inputContainer">
          <!-- username -->
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="text" placeholder="username" required/>
              <span class="icon is-small is-left">
                <i class="fas fa-solid fa-user"></i>
              </span>
            </p>
          </div>
          <!-- password -->
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="password" placeholder="Password" required/>
              <span class="icon is-small is-left">
                <i class="fas fa-solid fa-key"></i>
              </span>
            </p>
            
          </div>
          </div>
          ${
            loginError
              ? `<p class="tag is-danger is-light mx-6"> 😨 ${loginError}</p>`
              : ""
          }
        <!-- submit btn -->
        <div class="control">
          <button
            type="submit"
            class="button is-fullwidth is-link"
            id="submit-btn"
          >
            Login
          </button>
        </div>
        <!-- create account -->
        <p class="has-text-centered">
          don't have an account?
          <a href="#" id="signup-link" class="has-text-weight-semibold"
            >Signup</a
          >
        </p>
      </form>
    </section>
  `;
}

const $ = (selector) => document.querySelector(selector);
function listenSubmitForm() {
  const $form = $(".form");
  $form.addEventListener("submit", async (event) => {
    event.preventDefault();
    $("#submit-btn").classList.toggle("is-loading");
    try {
      const username = $("input[type=text]").value;
      const password = $("input[type=password]").value;
      console.log(username, password);
      const user = await login({ username: username, password: password });
      STORE.setUser(user);
      console.log(user);
      setTimeout(function () {
        // loadingPage();
        setTimeout(async () => {
          await STORE.fetchBoards();
          DOMHandler.load(HomePage);
        }, 500);
      }, 500);
    } catch (error) {
      LoginPage.state.loginError = error.message;
      setTimeout(function () {
        DOMHandler.reload();
      }, 1000);
    }
  });
}
function goToSignup() {
  $("#signup-link").addEventListener("click", () => {
    DOMHandler.load(SignupPage);
  });
}
const LoginPage = {
  toString() {
    return renderLogin();
  },
  addListeners() {
    listenSubmitForm(), goToSignup();
  },
  state: {
    loginError: null,
  },
};

export default LoginPage;
