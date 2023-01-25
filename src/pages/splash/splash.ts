import { Block } from "core";

type SplashPageProps = {};

export class SplashPage extends Block<SplashPageProps> {
  static componentName = "SplashPage";
  
  render() {
    return `
    <div class="container">
      <h1>Glad to see you again!</h1>
    </div>
  `;
  }
}

export default SplashPage;
