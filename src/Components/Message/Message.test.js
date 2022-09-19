import { render, screen } from "@testing-library/react";
import { Message } from "./Message";

describe("Message", () => {
  it("render Message component", () => {
    render(<Message />);
    const textEl = screen.getByText(/текст/);
    expect(textEl).toBeInTheDocument();
  });
});
