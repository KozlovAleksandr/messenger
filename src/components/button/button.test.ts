/* eslint-disable @typescript-eslint/no-empty-function */
import { Button } from "./button";
import { renderBlock } from "../../tests/renderUtils";
import { getByRole } from "@testing-library/dom";

function renderButton({ onClick }: any) {
    renderBlock({
      Block: Button,
      props: { text: "123", onClick },
    });
  
    return getByRole(document.body, "button");
  }

  describe("components/Button", () => {

    it("should render button", () => {
      const button = renderButton({ onClick: () => {} });
  
      expect(button).toBeInTheDocument();
    });
  });
