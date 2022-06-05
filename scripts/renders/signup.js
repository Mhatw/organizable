import DOMHandler from "../dom-handler.js";
import { login } from "../services/sessions-service.js";
import { createUser } from "../services/users-service.js";
import STORE from "../store.js";
import { HomePage } from "./home.js";
import LoginPage from "./login.js";
function renderSignup() {
  const { signupError } = SignupPage.state;
  return `
  <section id="signup" class="session">
    <!-- form -->
    <form action="" class="formComponent form box">
      <h2>Signup</h2>
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
            <input class="input" type="email" name="email" placeholder="email" required />
            <span class="icon is-small is-left">
              <i class="fas fa-solid fa-at"></i>
            </span>
          </p>
        </div>
        <!-- first name -->
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="text" name="firstName" placeholder="first name" />
            <span class="icon is-small is-left">
              <i class="fas fa-solid fa-clipboard"></i>
            </span>
          </p>
        </div>
        <!-- last name -->
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="text" name="lastName" placeholder="last name" />
            <span class="icon is-small is-left">
              <i class="fas fa-solid fa-clipboard"></i>
            </span>
          </p>
        </div>
        <!-- password -->
        <div class="field">
          <p class="control has-icons-left">
            <input
              class="input"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <span class="icon is-small is-left">
              <i class="fas fa-solid fa-key"></i>
            </span>
          </p>
        </div>
      </div>
      <!-- submit btn -->
      <div class="control">
        <button
          type="submit"
          class="button is-fullwidth is-link"
          id="submit-btn"
        >
          🚀Signup
        </button>
      </div>
      <!-- create account -->
      <p class="has-text-centered">
        already have an account?
        <a href="#" id="login-link" class="has-text-weight-semibold"
          >Login</a
        >
      </p>
    </form>
  </section>
  `;
}

const $ = (selector) => document.querySelector(selector);
function listenSubmitForm() {
  console.log("listenSubmitForm");
  const $form = $(".form");
  $form.addEventListener("submit", async (event) => {
    console.log("listenSubmitForm22222222");
    event.preventDefault();
    $("#submit-btn").classList.toggle("is-loading");
    try {
      console.dir(event.target);
      const { username, email, firstName, lastName, password } = event.target;
      const user = await createUser({
        username: username.value,
        email: email.value,
        first_name: firstName.value,
        last_name: lastName.value,
        password: password.value,
      });
      STORE.user = user;

      console.log(user);
      setTimeout(function () {
        // loadingPage();
        setTimeout(async () => {
          await STORE.fetchBoards();
          DOMHandler.load(HomePage);
        }, 500);
      }, 500);
    } catch (error) {
      SignupPage.state.signupError = error.message;
      setTimeout(function () {
        DOMHandler.reload();
      }, 1000);
    }
  });
}
function goToLogin() {
  $("#login-link").addEventListener("click", () => {
    DOMHandler.load(LoginPage);
  });
}

const SignupPage = {
  toString() {
    return renderSignup();
  },
  addListeners() {
    listenSubmitForm(), goToLogin();
  },
  state: {
    signupError: null,
  },
};

export default SignupPage;
