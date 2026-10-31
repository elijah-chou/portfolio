import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hero from "../Hero";

describe("Hero Component", () => {
  it("renders Elijah Chou's name and role", () => {
    render(<Hero />);
    expect(screen.getByText("Elijah Chou")).toBeInTheDocument();
    expect(screen.getByText(/Software Engineer @ JPMorganChase \| NYU Cyber Fellow/i)).toBeInTheDocument();
  });

  it("renders educational credentials and certifications", () => {
    render(<Hero />);
    expect(screen.getByText(/Emory BS\/MS in CS/i)).toBeInTheDocument();
    expect(screen.getAllByText(/NYU Tandon School of Engineering/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Certified in Cybersecurity \(CC\)/i)).toBeInTheDocument();
    expect(screen.getByText(/AWS Certified AI Practitioner/i)).toBeInTheDocument();
  });

  it("renders primary call-to-action buttons with proper targets", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /view featured projects/i })).toHaveAttribute("href", "#projects");
    expect(screen.getByRole("link", { name: /work experience/i })).toHaveAttribute("href", "#experience");
    expect(screen.getByRole("link", { name: /contact me/i })).toHaveAttribute("href", "#contact");
  });
});
