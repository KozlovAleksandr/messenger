import { Block } from "core";
import "./splash.scss";

type SplashPageProps = {};

export class SplashPage extends Block<SplashPageProps> {
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
