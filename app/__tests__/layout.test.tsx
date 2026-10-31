import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

vi.mock("next/font/google", () => ({
  Geist: () => ({ variable: "--font-geist-sans" }),
  Geist_Mono: () => ({ variable: "--font-geist-mono" }),
}));

import RootLayout, { metadata } from "../layout";

describe("RootLayout", () => {
  it("exports portfolio metadata", () => {
    expect(metadata.title).toBe("My Portfolio");
    expect(metadata.description).toBe("Personal portfolio website");
  });

  it("renders children inside the layout structure with font variables", () => {
    const layoutElement = RootLayout({
      children: <div data-testid="layout-child">Portfolio Child Content</div>,
    });

    expect(layoutElement.type).toBe("html");
    expect(layoutElement.props.lang).toBe("en");
    expect(layoutElement.props.className).toContain("--font-geist-sans");
    expect(layoutElement.props.className).toContain("--font-geist-mono");

    const bodyElement = layoutElement.props.children;
    expect(bodyElement.type).toBe("body");
    expect(bodyElement.props.className).toContain("min-h-full flex flex-col");

    render(bodyElement.props.children);
    expect(screen.getByTestId("layout-child")).toHaveTextContent(
      "Portfolio Child Content"
    );
  });
});
