import {Block, CoreRouter, Store} from "../../core";
import { login } from "../../services/auth";

import withRouter from "../../utils/withRouter";
import withStore from "../../utils/withStore";

// import { validateForm, VatidateRuleType } from "helpers/validateForms";
// import ControlledInput from "components/controlledInput";

type LoginPageProps = {
  router: CoreRouter;
  store: Store<AppState>;
  onNavigate?: () => void;
  onLogin?:() => void;
};

class SignIn extends Block<LoginPageProps> {
  static componentName = "Login";

  constructor(props: LoginPageProps){
    super(props);

    this.setProps({
      onNavigate: () => this.onNavigate(),
      onLogin: (event: Event) => this.onLogin(event),
    });
  }

  onNavigate() {
    this.props.router.go("/sign-up");
  }

  onLogin(event: Event) {
    const loginData = {
      login: (document.querySelector("input[name=\"login\"]") as HTMLInputElement).value,
      password: (document.querySelector("input[name=\"password\"]") as HTMLInputElement).value,
    };
    this.props.store.dispatch(login, loginData);
  }
  

  render(): string {
    return `
      <div class="container">
        <div class="form-box">
          <form action="#" class="form">
            <fieldset>
              <h1 class="form__title">sign in</h1>
              {{{ControlledInput
                ref="loginInputRef"
                onInput=onInput
                onFocus=onFocus
                label="login"
                type="text"
                name="login"
              }}}
              {{#if error}}{{error}}{{/if}}
              {{{ControlledInput
                ref="passwordInputRef"
                onInput=onInput
                onFocus=onFocus
                label="password"
                type="password"
                name="password"
              }}}
              {{{Button 
                title="sign in"
                onClick=onLogin
              }}}
              {{{Link 
                title="create account" 
                onClick=onNavigate
              }}}
              {{#if error}}{{error}}{{/if}}
            </fieldset>
          </form>
        </div>
      </div>
    `;
  }
}

export default withRouter(withStore(SignIn));
