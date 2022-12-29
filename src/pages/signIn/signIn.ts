import Block from "core/Block";
import template from "bundle-text:./template.hbs";
import { valodateForm, VatidateRuleType } from "helpers/validateForms";

import "./form.scss";

export class SignIn extends Block {
  constructor(){
    super();

    this.setProps({
      error: "",
      loginValue: "",
      passwordValue: "",
      onButtonClick: () => this.onButtonClick(),

      // TODO 
      // onInput: (e: InputEvent) => {
      // const inputElem = e.target as HTMLInputElement;
      // const errorMessage =  valodateForm([
      //   { type: VatidateRuleType.Login, value: inputElem.value }
      // ]);
      //   this.refs.loginInputRef.refs.errorRef.setProps({text: errorMessage});
      // }
    });
  }


  onButtonClick () : void {
    const loginEl = this._element?.querySelector("input[name='login']") as HTMLInputElement;
    const passwordEl = this._element?.querySelector("input[name='password']") as HTMLInputElement;

    const errorMessage =  valodateForm([
      { type: VatidateRuleType.Login, value: loginEl.value },
      { type: VatidateRuleType.Password, value: passwordEl.value },
    ]);

    if(errorMessage) {
      this.setProps({
        error: errorMessage,
        loginValue: loginEl.value,
        passwordValue: passwordEl.value
      });
    } else {
      this.setProps({
        error: "",
        loginValue: loginEl.value,
        passwordValue: passwordEl.value
      });
    }

    const signInData : {login: string, password: string} = {
      login: loginEl.value,
      password: passwordEl.value
    };
    console.log(signInData);
  }


  render(): string {
    // return template;
    return `
    <div class="container">
      {{{Header}}}
      <div class="form-box">
        <form action="#" class="form">
          <fieldset>
            <h1 class="form__title">sign in</h1>
            {{#if error}}{{error}}{{/if}}
            {{{ControlledInput 
              label="login" 
              type="text" 
              name="login"
              ref="loginInputRef"
              onInput=onInput
            }}}
            {{{ControlledInput 
              label="password" 
              type="password" 
              name="password"
              onInput=onInput}}}
            {{{Button title="sign in" link="#" link_name="create account" onClick=onButtonClick}}}
          </fieldset>
        </form>
      </div>
 <!--     {{{Footer}}} -->
    </div>
    `;
  }
}
