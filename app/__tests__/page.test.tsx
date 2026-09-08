import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "../page";

describe("Home Page", () => {
  it("renders all major sections of the portfolio", () => {
    render(<Home />);
    
    // Navbar
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    
    // Hero & Headers
    expect(screen.getAllByText("Elijah Chou").length).toBeGreaterThan(0);
    
    // About
    expect(screen.getByRole("heading", { name: "About Me" })).toBeInTheDocument();
    
    // Experience
    expect(screen.getByRole("heading", { name: "Professional Experience" })).toBeInTheDocument();
    
    // Projects
    expect(screen.getByRole("heading", { name: "Featured Projects & Research" })).toBeInTheDocument();
    
    // Contact
    expect(screen.getByRole("heading", { name: "Get In Touch" })).toBeInTheDocument();
    
    // Footer
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
