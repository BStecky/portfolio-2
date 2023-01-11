import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BsFillPersonLinesFill, BsSun, BsFillMoonFill } from "react-icons/bs";

const FixedFooter = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <BsSun
          className="ml-5 mr-5 w-6 h-6 text-yellow-500 "
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <BsFillMoonFill
          className="ml-5 mr-5 w-6 h-6 text-gray-900 "
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <footer className="nav py-2 fixed rounded-t-md bottom-0 w-full flex items-center justify-between">
      <div className="text-center mx-auto">
        Made with <span className="text-red-500">&lt;3</span>
      </div>
      <div className="ml-auto absolute right-0">{renderThemeChanger()}</div>
    </footer>
  );
};

export default FixedFooter;
