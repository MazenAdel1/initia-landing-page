import React from "react";

export const COLORS = {
  primary: "#1E4C9D",
  secondaryBg: "#DFE5EA",
  accent: "#3A7DFF",
  text: "#1F2937",
  muted: "#6B7280",
};

export const LOGO = (className?: string) => (
  <svg
    viewBox="0 0 400 120"
    className={className || "h-10"}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="20" y="20" width="80" height="80" rx="4" fill="#1E4C9D" />
    <rect x="40" y="40" width="40" height="40" rx="1" fill="white" />
    <rect x="53" y="53" width="14" height="14" rx="0.5" fill="#1E4C9D" />
    <text
      x="120"
      y="85"
      fill="#1E4C9D"
      fontSize="84"
      fontWeight="bold"
      fontFamily="Inter"
    >
      Initia
    </text>
  </svg>
);
