import Block from "../../core/Block";
import template from "bundle-text:./template.hbs";

import "./linkSettings.scss";

interface LinkSettingsProps {
  title: string;
  onClick: () => void;

}

export class LinkSettings extends Block {
  static cName = "LinkSettings";

  constructor({title, onClick}: LinkSettingsProps) {
    super({title, events: {click: onClick} });
  }

  protected render(): string {
    return template;
  }
}
