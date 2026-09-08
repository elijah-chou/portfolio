import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Navbar from "../Navbar";

describe("Navbar Component", () => {
  it("renders the brand name", () => {
    render(<Navbar />);
    expect(screen.getByText("Elijah Chou")).toBeInTheDocument();
  });

  it("renders all navigation links on desktop", () => {
    render(<Navbar />);
    expect(screen.getAllByText("Home")[0]).toHaveAttribute("href", "#home");
    expect(screen.getAllByText("About")[0]).toHaveAttribute("href", "#about");
    expect(screen.getAllByText("Experience")[0]).toHaveAttribute("href", "#experience");
    expect(screen.getAllByText("Projects")[0]).toHaveAttribute("href", "#projects");
    expect(screen.getAllByText("Contact")[0]).toHaveAttribute("href", "#contact");
  });

  it("toggles the mobile menu on hamburger button click", () => {
    render(<Navbar />);
    const toggleButton = screen.getByRole("button", { name: /toggle menu/i });
    expect(toggleButton).toBeInTheDocument();

    // Click to open mobile menu
    fireEvent.click(toggleButton);
    const links = screen.getAllByRole("link", { name: /home/i });
    expect(links.length).toBeGreaterThan(1); // desktop + mobile

    // Click mobile menu link to close
    const mobileHomeLink = links[1];
    fireEvent.click(mobileHomeLink);
  });
});
