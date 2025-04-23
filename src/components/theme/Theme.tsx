"use client";

import Image from "next/image";
import { useTheme } from "@/providers/theme-provider";
import "./Theme.scss";

export default function Theme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme">
      <button onClick={toggleTheme} aria-label="Toggle theme">
        {theme === "light" ? (
          <Image src="/images/moon.svg" alt="moon" width={20} height={20} />
        ) : (
          <Image src="/images/sun.svg" alt="sun" width={20} height={20} />
        )}
      </button>
    </div>
  );
}
