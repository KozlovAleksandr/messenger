import {Block, CoreRouter, Store} from "../../core";
import { register } from "../../services/auth";

import withRouter from "../../utils/withRouter";
import withStore from "../../utils/withStore";


type SignUpPageProps = {
  router: CoreRouter;
  store: Store<AppState>;
  onNavigate?: () => void;
  onRegister?: () => void;

  formError?: () => string | null;
};

class SignUp extends Block<SignUpPageProps> {
  static componentName = "SignUp";

  constructor(props: SignUpPageProps){
    super(props);

    this.setProps({
      onNavigate: () => this.onNavigate(),
      onRegister: (event: Event) => this.onRegister(event),
    });
    // this.setProps({
    //   error: "",
    //   firstNameValue: "",
    //   secondNameValue: "",
    //   loginValue: "",
    //   passwordValue: "",
    //   emailValue: "",
    //   phoneValue: "",
    //   onInput: (e: FocusEvent) => {
    //     this.refs.firstNameInputRef.refs.errorRef.setProps({ text: "" });
    //     this.refs.lastNameInputRef.refs.errorRef.setProps({ text: "" });
    //     this.refs.loginInputRef.refs.errorRef.setProps({ text: "" });
    //     this.refs.passwordInputRef.refs.errorRef.setProps({ text: "" });
    //     this.refs.emailInputRef.refs.errorRef.setProps({ text: "" });
    //     this.refs.phoneInputRef.refs.errorRef.setProps({ text: "" });
    //   },
    //   onBlur: () => console.log("onBlur"),
    //   onFocus: () => console.log("onFocus"),
    // });
  }

  onNavigate() {
    this.props.router.go("/login");
  }

  onRegister(event: Event) {
    const registerData = {
      first_name: (document.querySelector("input[name=\"first_name\"]") as HTMLInputElement).value,
      second_name: (document.querySelector("input[name=\"second_name\"]") as HTMLInputElement).value,
      login: (document.querySelector("input[name=\"login\"]") as HTMLInputElement).value,
      password: (document.querySelector("input[name=\"password\"]") as HTMLInputElement).value,
      email: (document.querySelector("input[name=\"email\"]") as HTMLInputElement).value,
      phone: (document.querySelector("input[name=\"phone\"]") as HTMLInputElement).value,
    };
    console.log(registerData);
    this.props.store.dispatch(register, registerData);
  }
  

  render(): string {
    return `
      <div class="container">
        <div class="form-box">
          <form action="#" class="form">
              <fieldset>
                <h1 class="form__title">sign up</h1>
                {{{ControlledInput
                  ref="firstNameInputRef"
                  onInput=onInput
                  onFocus=onFocus
                  label="name"
                  type="text"
                  name="first_name"
                }}}
                {{#if error}}{{error}}{{/if}}
                {{{ControlledInput
                  ref="lastNameInputRef"
                  onInput=onInput
                  onFocus=onFocus
                  label="last name"
                  type="text"
                  name="second_name"
                }}}
                {{#if error}}{{error}}{{/if}}
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
                {{#if error}}{{error}}{{/if}}
                {{{ControlledInput
                  ref="emailInputRef"
                  onInput=onInput
                  onFocus=onFocus
                  label="email"
                  type="text"
                  name="email"
                }}}
                {{#if error}}{{error}}{{/if}}
                {{{ControlledInput
                  ref="phoneInputRef"
                  onInput=onInput
                  onFocus=onFocus
                  label="phone"
                  type="text"
                  name="phone"
                }}}
                {{#if error}}{{error}}{{/if}}
                {{{Button 
                  title="sign up"
                  onClick=onRegister
                }}}
                {{{Link 
                  title="login" 
                  onClick=onNavigate
                }}}
              </fieldset>
          </form>
        </div>
      </div>
      `;
  }
}

export default withRouter(withStore(SignUp));
