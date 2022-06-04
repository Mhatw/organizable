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
              <input class="input" type="text" placeholder="username" />
              <span class="icon is-small is-left">
                <i class="fas fa-solid fa-user"></i>
              </span>
            </p>
          </div>
          <!-- password -->
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="password" placeholder="Password" />
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

const LoginPage = {
  toString() {
    return renderLogin();
  },
  addListeners() {
    return;
  },
  state: {
    loginError: null,
  },
};

export default LoginPage;
