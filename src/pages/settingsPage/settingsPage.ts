import Block from "../../core/Block";
import template from "bundle-text:./template.hbs";
import { valodateForm, VatidateRuleType } from "helpers/validateForms";


import "./form.scss";
import "./settingsPage.scss";

export class SettingsPage extends Block {
  constructor(){
    super();

    this.setProps({
      error: "",
      firstNameValue: "",
      displayName: "",
      emailValue: "",
      oldPasswordValue: "",

      secondNameValue: "",
      loginValue: "",
      phoneValue: "", 
      newPasswordValue: "",
      onButtonClick: () => this.onButtonClick(),
    });
  }

  onButtonClick () : void {
    const first_nameEl = this._element?.querySelector("input[name='first_name']") as HTMLInputElement;
    const display_nameEl = this._element?.querySelector("input[name='display_name']") as HTMLInputElement;
    const emailEl = this._element?.querySelector("input[name='email']") as HTMLInputElement;
    const oldPasswordEl = this._element?.querySelector("input[name='oldPassword']") as HTMLInputElement;
    const second_nameEl = this._element?.querySelector("input[name='second_name']") as HTMLInputElement;
    const loginEl = this._element?.querySelector("input[name='login']") as HTMLInputElement;
    const phoneEl = this._element?.querySelector("input[name='phone']") as HTMLInputElement;
    const newPasswordEl = this._element?.querySelector("input[name='newPassword']") as HTMLInputElement;

    const errorMessage =  valodateForm([
      { type: VatidateRuleType.Name, value: first_nameEl.value },
      { type: VatidateRuleType.Name, value: display_nameEl.value },
      { type: VatidateRuleType.Email, value: emailEl.value },
      { type: VatidateRuleType.Password, value: oldPasswordEl.value },
      { type: VatidateRuleType.Name, value: second_nameEl.value },
      { type: VatidateRuleType.Login, value: loginEl.value },
      { type: VatidateRuleType.Phone, value: phoneEl.value },
      { type: VatidateRuleType.Password, value: newPasswordEl.value },
    ]);

    if(errorMessage) {
      this.setProps({
        error: errorMessage,
        firstNameValue: first_nameEl.value,
        displayName: display_nameEl.value,
        emailValue: emailEl.value,
        oldPasswordValue: oldPasswordEl.value,

        secondNameValue: second_nameEl.value,
        loginValue: loginEl.value,
        phoneValue: phoneEl.value,
        newPasswordValue: newPasswordEl.value
      });
    } else {
      this.setProps({
        error: "",
        firstNameValue: first_nameEl.value,
        displayName: display_nameEl.value,
        emailValue: emailEl.value,
        oldPasswordValue: oldPasswordEl.value,

        secondNameValue: second_nameEl.value,
        loginValue: loginEl.value,
        phoneValue: phoneEl.value,
        newPasswordValue: newPasswordEl.value
      });
    }

    const settingsData : {first_name: string, display_name: string, email: string, oldPassword: string, second_name: string, login: string,  phone: string, newPassword: string } = {
      first_name: first_nameEl.value,
      display_name: display_nameEl.value,
      email: emailEl.value,
      oldPassword: oldPasswordEl.value,

      second_name: second_nameEl.value,
      login: loginEl.value,
      phone: phoneEl.value,
      newPassword: newPasswordEl.value
    };
    console.log(settingsData);
  }

  render(): string {
    return template;
  }
}
