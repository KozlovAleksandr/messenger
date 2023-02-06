import Block from "../../core/Block";

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
    return `
    <button class="chat__link" type="button">
      {{{title}}}
    </button>
    `;
  }
}
