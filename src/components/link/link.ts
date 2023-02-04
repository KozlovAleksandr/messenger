import Block from "../../core/Block";

interface LinkProps {
  title: string;
  onClick: () => void;

}

export class Link extends Block {
  static cName = "Link";

  constructor({title, onClick}: LinkProps) {
    super({title, events: {click: onClick} });
  }

  protected render(): string {
    return `
    <button class="form-btn__link" type="button">{{ title }}</button>
    `;
  }
}
