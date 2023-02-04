import Block from "../../core/Block";

export class Error4Page extends Block {
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
          <h1 class="error__number">4 0 4</h1>
          <h2 class="error__desc">not found</h2>
      </div>
    </div>
    `;
  }
}
