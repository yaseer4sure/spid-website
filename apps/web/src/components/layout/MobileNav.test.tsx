import { act, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MobileNav } from "./MobileNav";

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a href={String(href)} {...props}>
      {children}
    </a>
  ),
}));

describe("MobileNav", () => {
  it("opens, exposes the navigation, and closes", () => {
    const view = render(<MobileNav />);
    act(() => view.getByRole("button", { name: "Menu" }).click());
    expect(view.getByRole("link", { name: "Get Involved" })).toBeTruthy();
    act(() => view.getByRole("button", { name: "Close" }).click());
    expect(view.queryByRole("link", { name: "Get Involved" })).toBeNull();
  });
});
