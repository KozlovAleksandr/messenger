import Block from "../../core/Block";

export class Footer extends Block {
  static cName = "Footer";

  constructor(){
    super();

  }

  render(): string {
    return `
    <footer class="footer">
      <div class="container">
          <div class="footer__block"></div>
      </div>
    </footer>
    `;
  }
}
