import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Contact from "../Contact";

describe("Contact Component", () => {
  it("renders the section heading", () => {
    render(<Contact />);
    expect(screen.getByRole("heading", { name: "Get In Touch" })).toBeInTheDocument();
  });

  it("renders email and location info", () => {
    render(<Contact />);
    expect(screen.getByText("elijah.chou0321@gmail.com")).toBeInTheDocument();
    expect(screen.getByText(/Atlanta Metropolitan Area, GA/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /direct email/i })).toHaveAttribute(
      "href",
      "mailto:elijah.chou0321@gmail.com"
    );
  });

  it("renders Credly certification link and publication links", () => {
    render(<Contact />);
    expect(screen.getByRole("link", { name: /verified certifications/i })).toHaveAttribute(
      "href",
      "https://www.credly.com/users/elijah-chou/badges"
    );
    expect(screen.getByRole("link", { name: /medium articles/i })).toHaveAttribute(
      "href",
      "https://medium.com/@elijahchou"
    );
    expect(screen.getByRole("link", { name: /wordpress blog/i })).toHaveAttribute(
      "href",
      "https://elijahchou.wordpress.com/"
    );
  });
});
