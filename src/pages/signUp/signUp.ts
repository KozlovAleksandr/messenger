import Block from "../../core/Block";
import template from "bundle-text:./template.hbs";
import { valodateForm, VatidateRuleType } from "helpers/validateForms";


import "./form.scss";

export class SignUp extends Block {
  constructor(){
    super();

    this.setProps({
      error: "",
      firstNameValue: "",
      secondNameValue: "",
      loginValue: "",
      passwordValue: "",
      emailValue: "",
      phoneValue: "",
      onInput: (e: FocusEvent) => {
        this.refs.firstNameInputRef.refs.errorRef.setProps({ text: "" });
        this.refs.lastNameInputRef.refs.errorRef.setProps({ text: "" });
        this.refs.loginInputRef.refs.errorRef.setProps({ text: "" });
        this.refs.passwordInputRef.refs.errorRef.setProps({ text: "" });
        this.refs.emailInputRef.refs.errorRef.setProps({ text: "" });
        this.refs.phoneInputRef.refs.errorRef.setProps({ text: "" });
      },
      onBlur: () => console.log("onBlur"),
      onFocus: () => console.log("onFocus"),
    });
  }

  render(): string {
//    return template;
    return `
      <div class="container">
        {{{Header}}}
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
                {{{Button title="sign in" link="#" link_name="create account"}}}
              </fieldset>
          </form>
        </div>
      </div>
      `;
  }
}
