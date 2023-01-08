import Block from "core/Block";
import template from "bundle-text:./template.hbs";
import { valodateForm, VatidateRuleType } from "helpers/validateForms";
import ControlledInput from "components/controlledInput";

import "./form.scss";

export class SignIn extends Block {
  constructor(){
    super();

    this.setProps({
      error: "",
      loginValue: "",
      passwordValue: "",
      onInput: (e: FocusEvent) => {
        // const inputEl = e.target as HTMLInputElement;
        // const errorMessage =  valodateForm([
        //     { type: VatidateRuleType.Login, value: inputEl.value }
        //   ]);

        this.refs.loginInputRef.refs.errorRef.setProps({ text: "" });
        this.refs.passwordInputRef.refs.errorRef.setProps({ text: "" });

      },
      // onBlur: () => console.log("onBlur"),
      onFocus: () => console.log("onFocus"),
    });
  }

  render(): string {
    // return template;
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
              {{#if error}}{{error}}{{/if}}
              {{{Button title="sign in" link="#" link_name="create account"}}}
            </fieldset>
          </form>
        </div>
      </div>
    `;
  }
}









