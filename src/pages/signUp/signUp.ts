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
      onSubmit: () => this.onSubmit(event),
    });
  }

  onSubmit (event: Event | undefined) : void {
    event?.preventDefault();
    const first_nameEl = this._element?.querySelector("input[name='first_name']") as HTMLInputElement;
    const second_nameEl = this._element?.querySelector("input[name='second_name']") as HTMLInputElement;
    const loginEl = this._element?.querySelector("input[name='login']") as HTMLInputElement;
    const passwordEl = this._element?.querySelector("input[name='password']") as HTMLInputElement;
    const emailEl = this._element?.querySelector("input[name='email']") as HTMLInputElement;
    const phoneEl = this._element?.querySelector("input[name='phone']") as HTMLInputElement;


    const errorMessage =  valodateForm([
      { type: VatidateRuleType.Name, value: first_nameEl.value },
      { type: VatidateRuleType.Name, value: second_nameEl.value },
      { type: VatidateRuleType.Login, value: loginEl.value },
      { type: VatidateRuleType.Password, value: passwordEl.value },
      { type: VatidateRuleType.Email, value: emailEl.value },
      { type: VatidateRuleType.Phone, value: phoneEl.value },
    ]);

    if(errorMessage) {
      this.setProps({
        error: errorMessage,
        firstNameValue: first_nameEl.value,
        secondNameValue: second_nameEl.value,
        loginValue: loginEl.value,
        passwordValue: passwordEl.value,
        emailValue: emailEl.value,
        phoneValue: phoneEl.value
      });
    } else {
      this.setProps({
        error: "",
        firstNameValue: first_nameEl.value,
        secondNameValue: second_nameEl.value,
        loginValue: loginEl.value,
        passwordValue: passwordEl.value,
        emailValue: emailEl.value,
        phoneValue: phoneEl.value
      });
    }

    const signUpData : {first_name:string, second_name: string, login: string, password: string, email: string, phone: string} = {
      first_name: first_nameEl.value,
      second_name: second_nameEl.value,
      login: loginEl.value,
      password: passwordEl.value,
      email: emailEl.value,
      phone: phoneEl.value
    };
    console.log(signUpData);
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
                {{#if error}}{{error}}{{/if}}
                {{{ControlledInput 
                  label="name" 
                  type="text" 
                  name="first_name"
                  onInput=onInput
                }}}
                {{{ControlledInput 
                  label="last name" 
                  type="text" 
                  name="second_name"
                  onInput=onInput
                }}}
                {{{ControlledInput 
                  label="login" 
                  type="text" 
                  name="login"
                  onInput=onInput
                }}}
                {{{ControlledInput 
                  label="password" 
                  type="password" 
                  name="password"
                  onInput=onInput
                }}}
                {{{ControlledInput 
                  label="email" 
                  type="text" 
                  name="email"
                  onInput=onInput
                }}}
                {{{ControlledInput 
                  label="phone" 
                  type="text" 
                  name="phone"
                  onInput=onInput
                }}}
                {{{Button title="sign in" link="#" link_name="create account" onClick=onSubmit}}}
              </fieldset>
          </form>
        </div>
      </div>
      `;
  }
}
