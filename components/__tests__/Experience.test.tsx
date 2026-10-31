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
    expect(screen.getAllByText("Emory University").length).toBeGreaterThan(0);
    expect(screen.getByText("Emory Center for Digital Scholarship")).toBeInTheDocument();
    expect(screen.getByText("AT&T")).toBeInTheDocument();
  });

  it("renders specific job roles and metrics from LinkedIn profile", () => {
    render(<Experience />);
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    expect(screen.getByText("Student Software Engineer")).toBeInTheDocument();
    expect(screen.getAllByText("Software Engineer Intern").length).toBeGreaterThan(0);
    expect(screen.getByText(/400 alerts\/day/i)).toBeInTheDocument();
    expect(screen.getByText(/RAG-powered LLM chatbot/i)).toBeInTheDocument();
  });
});
