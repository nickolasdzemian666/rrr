import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "./Form";

describe("Form", () => {
  it("render component", () => {
    render(<Form />);
  });

  it("type text in input", () => {
    render(<Form />);
    const textBox = screen.getByRole("textbox");
    userEvent.type(textBox, "Привет");
  });

  it("renders button with send", () => {
    render(<Form />);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl.innerHTML).toBe("Отправить");
    expect(buttonEl.disabled).toBe(true);
  });

  it("click on the button", () => {
    render(<Form />);
    userEvent.click(screen.getByRole("button"));
  });
});
