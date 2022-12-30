import Block from "./Block";

export default function renderDOM(block: Block) {
  const root = document.querySelector("#app");
  
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  root!.innerHTML = "";
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  root!.appendChild(block.getContent());
}
