import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { cleanup } from "@testing-library/react";
import { DonationForm } from "./DonationForm";

afterEach(cleanup);

describe("DonationForm", () => {
  it("shows suggested amounts without enabling payments", () => {
    render(<DonationForm />);
    expect(screen.getByLabelText("₦10,000")).toBeChecked();
    expect(screen.getByRole("button", { name: /coming soon/i })).toBeDisabled();
    expect(screen.getByText(/No payment will be taken/i)).toBeInTheDocument();
  });
  it("validates the custom amount", () => {
    render(<DonationForm />);
    fireEvent.click(screen.getByLabelText("Custom amount"));
    fireEvent.change(screen.getByLabelText("Custom amount (₦)"), {
      target: { value: "500" },
    });
    expect(screen.getByText(/at least ₦1,000/i)).toBeInTheDocument();
  });
});
