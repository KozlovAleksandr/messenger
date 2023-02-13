import Block from "../../core/Block";

export class Error5Page extends Block {
  constructor(){
    super();

    this.setProps({
      onButtonClick: () => console.log("btn clck")
    });
  }

  render() {
    return `
    <div class="container">
      <div class="error">
          <h1 class="error__number">5 * *</h1>
          <h2 class="error__desc">something is wrong</h2>
      </div>
    </div>
    `;
  }
}
