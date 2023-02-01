import { Block } from "core";
import "./splash.scss";

export class SplashPage extends Block {
  static componentName = "SplashPage";
  
  render() {
    return `
    <div class="container">
      <div class="greetings">
        <h1>HEY!</h1>
      </div>
    </div>
  `;
  }
}

export default SplashPage;
