import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Projects from "../Projects";

describe("Projects Component", () => {
  it("renders the section heading", () => {
    render(<Projects />);
    expect(screen.getByRole("heading", { name: "Featured Projects & Research" })).toBeInTheDocument();
  });

  it("renders key project titles and achievements", () => {
    render(<Projects />);
    expect(screen.getByRole("heading", { name: "AI Prompt Optimization MCP" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Project Vibe Validator" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Creativity in Programming: A Code Distance Approach" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "ChatGeminiPro & Legion Writing Assistant" })).toBeInTheDocument();
  });

  it("renders project badges and links", () => {
    render(<Projects />);
    expect(screen.getByText("2nd Place Winner")).toBeInTheDocument();
    expect(screen.getByText("Published at CSEDU 2024")).toBeInTheDocument();

    const readThesisLink = screen.getByRole("link", { name: /read thesis \/ paper/i });
    expect(readThesisLink).toHaveAttribute("href", "https://etd.library.emory.edu/concern/etds/b8515p78f");
  });
});
