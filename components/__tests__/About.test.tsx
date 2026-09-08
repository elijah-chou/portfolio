import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import About from "../About";

describe("About Component", () => {
  it("renders the section heading", () => {
    render(<About />);
    expect(screen.getByRole("heading", { name: "About Me" })).toBeInTheDocument();
  });

  it("renders background details regarding Emory, NYU, JPMC, and CSEDU 2024", () => {
    render(<About />);
    expect(screen.getAllByText(/JPMorganChase/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/BS\/MS in Computer Science at Emory University/i)).toBeInTheDocument();
    expect(screen.getByText(/NYU Tandon School of Engineering/i)).toBeInTheDocument();
    expect(screen.getAllByText(/CSEDU 2024/i).length).toBeGreaterThan(0);
  });

  it("renders all four core highlight skill cards", () => {
    render(<About />);
    expect(screen.getByRole("heading", { name: "Software Engineering" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "AI & LLM Solutions" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Full-Stack Development" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Research & Academic Excellence" })).toBeInTheDocument();
  });
});
