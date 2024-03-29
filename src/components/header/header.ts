import Block from "../../core/Block";

export class Header extends Block {
  static cName = "Header";

  constructor(){
    super();

  }

  render(): string {
    return `
    <header class="header">
      <div class="container">
          <div class="header__list">
              <nav class="menu">
                  <ul class="menu__list">
                      <li class="menu__list-item"><a class="menu__list-link" href="../../indexSignIn.html">SIGN IN</a></li>
                      <li class="menu__list-item"><a class="menu__list-link" href="../../indexSignUp.html">SIGN UP</a></li>
                      <li class="menu__list-item"><a class="menu__list-link" href="../../indexChat.html">CHAT</a></li>
                      <li class="menu__list-item"><a class="menu__list-link" href="../../indexSettingsPage.html">SETTINGS</a></li>
                      <li class="menu__list-item"><a class="menu__list-link" href="../../indexError404.html">ERROR 404</a></li>
                      <li class="menu__list-item"><a class="menu__list-link" href="../../indexError500.html">ERROR 5**</a></li>
                  </ul>
              </nav>
          </div>
      </div>
    </header>
    `;
  }
}
