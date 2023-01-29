import Block from "core/Block";
import { validateForm, VatidateRuleType } from "helpers/validateForms";


import "./controlledInput.scss";

interface ControlledInputProps {
  label?: string;
  type?: "text" | "password" | "email";
  name?: string;
  error?: string;
  value?: string;
  onInput?: () => void;
  onFocus?: () => void;
}

export class ControlledInput extends Block {
  static cName = "ControlledInput";

  constructor(props: ControlledInputProps) {
    super({...props,
      onBlur: (e: FocusEvent): void => {
        const inputEl = e.target as HTMLInputElement;
        console.log(inputEl.value);

        let error = "";

        if (inputEl.name == "first_name" || inputEl.name == "second_name") {
          error = validateForm([
            {type: VatidateRuleType.Name, value: inputEl.value},
          ]).errorMessage;
        } else if (inputEl.name == "login") {
          error = validateForm([
            {type: VatidateRuleType.Login, value: inputEl.value},
          ]).errorMessage;
        } else if (inputEl.name == "password") {
          error = validateForm([
            {type: VatidateRuleType.Password, value: inputEl.value},
          ]).errorMessage;
        } else if (inputEl.name == "email") {
          error = validateForm([
            {type: VatidateRuleType.Email, value: inputEl.value},
          ]).errorMessage;
        } else if (inputEl.name == "phone") {
          error = validateForm([
            {type: VatidateRuleType.Phone, value: inputEl.value},
          ]).errorMessage;
        }
        this.setProps({
            
        });
 
        // const error = validateForm([
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
            value=""
            onInput=onInput
            onFocus=onFocus
            onBlur=onBlur
        }}}
        {{{InputError ref="errorRef" text=error}}}
      </div>
    `;
  }
}
