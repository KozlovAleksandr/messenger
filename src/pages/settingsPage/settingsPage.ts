import {Block, CoreRouter, Store} from "../../core";
import withRouter from "../../utils/withRouter";
import withStore from "../../utils/withStore";
import withUser from "../../utils/withUser";

import { validateForm, VatidateRuleType } from "../../helpers/validateForms";
import { changeAvatar, changeData } from "../../services/user";

interface SettingsPageProps {
  router: CoreRouter;
  store: Store<AppState>;
  onClick?: () => void;
  onSubmit?: () => void;
  onNavigate?: () => void;
}

class SettingsPage extends Block {
  constructor(props: SettingsPageProps) {
    super({
      ...props,
    });

    this.setProps({
      onNavigate: () => this.onNavigate(),
      onChangeProfile: (event: Event) => this.onChangeProfile(event),
      onChangeAvatar: (event: SubmitEvent) => this.onChangeAvatar(event),
    });
  }

  onChangeProfile(event: Event) {
    const profileData = {
      email: (document.querySelector("input[name=\"email\"]") as HTMLInputElement).value,
      login: (document.querySelector("input[name=\"login\"]") as HTMLInputElement).value,
      first_name: (document.querySelector("input[name=\"first_name\"]") as HTMLInputElement).value,
      second_name: (document.querySelector("input[name=\"second_name\"]") as HTMLInputElement).value,
      display_name: (document.querySelector("input[name=\"display_name\"]") as HTMLInputElement).value,
      phone: (document.querySelector("input[name=\"phone\"]") as HTMLInputElement).value,
    };
    console.log(this.props.user);
    this.props.store.dispatch(changeData, profileData);
  }

  onChangeAvatar(event: SubmitEvent) {
    event.preventDefault();
    const form = document.getElementById("avatar_form");
    const formData = new FormData(form as HTMLFormElement);
    this.props.store.dispatch(changeAvatar, formData);
  }

  onNavigate() {
    this.props.router.go("/messenger");
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

    const errorMessage =  validateForm([
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
    return `
    <div class="container">
      <div class="form-box settings form">
      <h1 class="form__title">settings</h1>
      <form class="form__settings-avatar" id="avatar_form">
        <input type="file" name="avatar" id="avatar-upload" class="avatar-input">
        <label for="avatar-upload"><img src="https://ya-praktikum.tech/api/v2/resources${this.props.user.avatar}"></label>
        {{{ButtonChatList 
          title="Change avatar" 
          className="small"
          onClick=onChangeAvatar}}}
      </form>
        <form action="#" class="form">
          <fieldset>

            <div class="form__settings">

              
              {{#if error}}{{error}}{{/if}}
              <div class="form__settings-blocks">
                <div class="form__settings-left">
                  
                  {{{ControlledInput 
                    label="name" 
                    type="text" 
                    name="first_name"
                    value="${this.props.user.firstName}"
                    onInput=onInput}}}
                  {{{ControlledInput 
                    label="display name" 
                    type="text" 
                    name="display_name"
                    value="${this.props.user.displayName}"
                    onInput=onInput}}}
                  {{{ControlledInput 
                    label="email" 
                    type="text"     
                    name="email"
                    value="${this.props.user.email}"
                    onInput=onInput}}}
                  {{{ControlledInput 
                    label="old password" 
                    type="password" 
                    name="oldPassword"
                    value=""
                    onInput=onInput}}}
                </div>
                <div class="form__settings-right">
                  {{{ControlledInput 
                    label="last name" 
                    type="text" 
                    name="second_name"
                    value="${this.props.user.secondName}"
                    onInput=onInput}}}
                  {{{ControlledInput 
                    label="login" 
                    type="text" 
                    name="login"
                    value="${this.props.user.login}"
                    onInput=onInput}}}
                  {{{ControlledInput 
                    label="phone" 
                    type="text" 
                    name="phone"
                    value="${this.props.user.phone}"
                    onInput=onInput}}}
                  {{{ControlledInput 
                    label="new password" 
                    type="password" 
                    value=""
                    name="newPassword"
                    onInput=onInput}}}
                </div>
              </div>
            </div>
            {{{Button title="save" 
              onClick=onChangeProfile 
            }}}
            {{{Link 
              title="chats" 
              onClick=onNavigate
            }}}
          </fieldset>
        </form>
      </div>
    </div>
    `;
  }
}
export default withRouter(withStore(withUser(SettingsPage)));
