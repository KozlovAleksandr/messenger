import Block from "../../core/Block";
import template from "bundle-text:./template.hbs";
import { valodateForm, VatidateRuleType } from "helpers/validateForms";


import "./controlledInput.scss";

interface ControlledInputProps {
  label?: string;
  type?: "text" | "password" | "email";
  name?: string;
  error?: string;
  onInput?: () => void;
}

export class ControlledInput extends Block {
  constructor(props: ControlledInputProps) {
    super({
      ...props
    });
  }

  protected render(): string {
    return template;
  }
}
