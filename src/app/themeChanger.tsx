"use client";
import { useState, useEffect } from "react";

import { useTheme } from "next-themes";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      The current theme is: {theme}
      <button onClick={() => setTheme("light")}>L</button>
      <button onClick={() => setTheme("dark")}>D</button>
    </div>
  );
};

export default ThemeChanger;
