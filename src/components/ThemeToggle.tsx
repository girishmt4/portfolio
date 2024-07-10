// src/components/ThemeToggle.tsx
import React from "react";
import { Fab } from "@mui/material";
import {
  DarkMode,
  LightMode,
  Brightness4 as MoonIcon,
  Brightness7 as SunIcon,
} from "@mui/icons-material";
import { useTheme } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Fab
      onClick={toggleTheme}
      color="primary"
      aria-label="toggle theme"
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        backgroundColor: "var(--color-contrast)",
      }}
    >
      {theme === "dark" ? (
        <LightMode style={{ color: "var(--color-bg)" }} />
      ) : (
        <DarkMode style={{ color: "var(--color-bg)" }} />
      )}
    </Fab>
  );
};

export default ThemeToggle;
