import Block from "core/Block";
import template from "bundle-text:./template.hbs";
import { valodateForm, VatidateRuleType } from "helpers/validateForms";


import "./controlledInput.scss";

interface ControlledInputProps {
  label?: string;
  type?: "text" | "password" | "email";
  name?: string;
  error?: string;
  onInput?: () => void;
  onFocus?: () => void;
}

export class ControlledInput extends Block {
  constructor(props: ControlledInputProps) {
    super({...props,
      onBlur: (e: FocusEvent): void => {
        const inputEl = e.target as HTMLInputElement;
        console.log(inputEl.value);

        let error = "";

        if (inputEl.name == "first_name" || inputEl.name == "second_name") {
          error = valodateForm([
            {type: VatidateRuleType.Name, value: inputEl.value},
          ]);
        } else if (inputEl.name == "login") {
          error = valodateForm([
            {type: VatidateRuleType.Login, value: inputEl.value},
          ]);
        } else if (inputEl.name == "password") {
          error = valodateForm([
            {type: VatidateRuleType.Password, value: inputEl.value},
          ]);
        } else if (inputEl.name == "email") {
          error = valodateForm([
            {type: VatidateRuleType.Email, value: inputEl.value},
          ]);
        } else if (inputEl.name == "phone") {
          error = valodateForm([
            {type: VatidateRuleType.Phone, value: inputEl.value},
          ]);
        }
 
        // const error = valodateForm([
        //   {type: VatidateRuleType.Name, value: inputEl.value},
        //   {type: VatidateRuleType.Login, value: inputEl.value},
        //   {type: VatidateRuleType.Password, value: inputEl.value},
        //   {type: VatidateRuleType.Email, value: inputEl.value},
        //   {type: VatidateRuleType.Phone, value: inputEl.value},
        // ]);

        this.refs.errorRef.setProps({text: error});
      }
    });
  }

  protected render(): string {
    // return template;
    return `
      <div class="form-input__group">
        <label for="" class="form-input__label">{{label}}</label>
        {{{Input 
            type="{{type}}" 
            name="{{name}}"
            onInput=onInput
            onFocus=onFocus
            onBlur=onBlur
        }}}
        {{{InputError ref="errorRef" text=error}}}
      </div>
    `;
  }
}
