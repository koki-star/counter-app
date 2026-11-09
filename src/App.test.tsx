import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Counter App", () => {
  test("shows the starting state", () => {
    render(<App />);

    expect(screen.getByText("Count: 0")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Increment" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Decrement" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Reset" })).toBeInTheDocument();
  });

  test("Increment changes the count from 0 to 1", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Increment" }));

    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });

  test("Decrement changes the count from 0 to -1", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Decrement" }));

    expect(screen.getByText("Count: -1")).toBeInTheDocument();
  });

  test("Reset changes the count back to 0", () => {
    render(<App />);

    // Change the count first so Reset has something to do.
    fireEvent.click(screen.getByRole("button", { name: "Increment" }));
    fireEvent.click(screen.getByRole("button", { name: "Increment" }));
    expect(screen.getByText("Count: 2")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Reset" }));

    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });

  test("works after a sequence of actions", () => {
    render(<App />);
    const increment = screen.getByRole("button", { name: "Increment" });
    const decrement = screen.getByRole("button", { name: "Decrement" });
    const reset = screen.getByRole("button", { name: "Reset" });

    fireEvent.click(increment);
    fireEvent.click(increment);
    fireEvent.click(increment);
    expect(screen.getByText("Count: 3")).toBeInTheDocument();

    fireEvent.click(decrement);
    expect(screen.getByText("Count: 2")).toBeInTheDocument();

    fireEvent.click(reset);
    expect(screen.getByText("Count: 0")).toBeInTheDocument();

    fireEvent.click(decrement);
    expect(screen.getByText("Count: -1")).toBeInTheDocument();
  });
});
