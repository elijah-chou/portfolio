import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Experience from "../Experience";

describe("Experience Component", () => {
  it("renders the section heading", () => {
    render(<Experience />);
    expect(screen.getByRole("heading", { name: "Professional Experience" })).toBeInTheDocument();
  });

  it("renders all company experience entries", () => {
    render(<Experience />);
    expect(screen.getAllByText("JPMorganChase").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Georgia Tech Research Institute (GTRI)").length).toBeGreaterThan(0);
    expect(screen.getByText("AT&T")).toBeInTheDocument();
  });

  it("renders specific job roles and metrics", () => {
    render(<Experience />);
    expect(screen.getByText("Software Engineer I")).toBeInTheDocument();
    expect(screen.getByText("Student Software Engineer")).toBeInTheDocument();
    expect(screen.getByText("Software Developer Intern")).toBeInTheDocument();
    expect(screen.getByText(/70 million debit cards/i)).toBeInTheDocument();
  });
});
