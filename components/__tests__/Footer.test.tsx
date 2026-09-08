import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "../Footer";

describe("Footer Component", () => {
  it("renders the copyright and name", () => {
    render(<Footer />);
    expect(screen.getByRole("heading", { name: "Elijah Chou" })).toBeInTheDocument();
    expect(screen.getByText(/All rights reserved|Elijah Chou\. Built with/i)).toBeInTheDocument();
  });

  it("renders social links with appropriate hrefs", () => {
    render(<Footer />);
    expect(screen.getByTitle("GitHub")).toHaveAttribute("href", "https://github.com/elijah-chou");
    expect(screen.getByTitle("LinkedIn")).toHaveAttribute("href", "https://www.linkedin.com/in/elijah-chou/");
    expect(screen.getByTitle("Email")).toHaveAttribute("href", "mailto:elijah.chou0321@gmail.com");
    expect(screen.getByTitle("Medium")).toHaveAttribute("href", "https://medium.com/@elijahchou");
    expect(screen.getByTitle("WordPress Blog")).toHaveAttribute("href", "https://elijahchou.wordpress.com/");
    expect(screen.getByTitle("Credly Badges")).toHaveAttribute("href", "https://www.credly.com/users/elijah-chou/badges");
  });
});
