import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";

function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  if (!isMounted) return null;

  return (
    <div className="w-screen h-14 block lg:absolute top-0">
      <div className="absolute top-2 left-2 z-50 md:hidden transition-all">
        <Link href={"https://zstiojar.edu.pl"}>
          <Image
            alt="logo"
            width={130}
            height={130}
            src={
              "https://zstiojar.edu.pl/wp-content/uploads/2023/03/cropped-zstio_godlo_logo-222x107.png"
            }
          />
        </Link>
      </div>
      {resolvedTheme != undefined && (
        <div className="absolute top-2 right-2 z-50 transition-all flex">
          <Link
            href={"https://plan-lekcji-zstio.netlify.app/"}
            data-tooltip-id="navbar_tooltips"
            data-tooltip-content="Przejdź do planu lekcji"
            className="flex transition-all items-center p-3 mr-2 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg toggle-dark-state-example hover:bg-gray-200 hover:text-gray-900 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              className="w-4 h-4 transition-all"
              fill="currentColor"
            >
              <path d="M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
            </svg>
          </Link>
          <Tooltip
            id="navbar_tooltips"
            className="!bg-[#2B161B] dark:!text-gray-200 dark:!bg-gray-800"
          />
          <button
            type="button"
            onClick={toggleTheme}
            data-tooltip-id="navbar_tooltips"
            data-tooltip-content="Zmień motyw"
            className="flex transition-all items-center p-3 mr-2 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg toggle-dark-state-example hover:bg-gray-200 hover:text-gray-900 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            {resolvedTheme === "light" ? (
              <svg
                aria-hidden="true"
                className="w-4 h-4 transition-all"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                className="w-4 h-4 transition-all"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
            )}
            <span className="sr-only">Toggle dark/light mode</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
