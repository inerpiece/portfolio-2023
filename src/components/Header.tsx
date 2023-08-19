"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BurgerMenuIcon from "./icons/BurgerMenuIcon";
import CloseMenuIcon from "./icons/CloseMenuIcon";

function Header() {
  const currentRoute = usePathname();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [burgerState, setBurgerState] = useState(false);
  const handleResize = () => setWindowWidth(window.innerWidth);

  const toggleBurgerMenu = (e: any) => {
    setBurgerState(!burgerState);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    setBurgerState(false);
  }, [currentRoute]);

  return (
    <>
      {windowWidth >= 980 ? (
        <header className="w-full fixed flex justify-center">
          <nav className="text-lg text-white w-[980px] h-[60px]">
            <ul className="flex justify-between text-center h-full">
              <li
                className={`
                  ${
                    currentRoute === "/" ? "bg-gray-600" : "bg-gray-800"
                  } w-2/4 hover:bg-gray-400`}
              >
                <Link
                  href={"/"}
                  className="w-full h-full flex justify-center items-center text-slate-200"
                >
                  /home
                </Link>
              </li>
              <li
                className={`
                ${
                  currentRoute === "/projects" ? "bg-gray-600" : "bg-gray-800"
                } w-2/4 hover:bg-gray-400`}
              >
                <Link
                  href={"/projects"}
                  className="w-full h-full flex justify-center items-center text-slate-200"
                >
                  /projects
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      ) : (
        <header
          // weird flicker on window resize, due to transition-all
          // ways to fix:
          // 1) add the transition only for the mobile media query - didnt work
          // 2) additional js/ts logic - quite unnecessary
          // 3) add -webkit-backface-visibility - didn't work
          onClick={toggleBurgerMenu}
          className={`${
            burgerState ? "translate-x-0" : "translate-x-[-100%]"
          } w-full min-h-screen fixed z-20 bg-gray-900 transition-all`}
          // style={{ WebkitBackfaceVisibility: "hidden" }}
        >
          <div className="flex justify-between h-[60px]">
            <div></div>
            <button
              className={`${
                burgerState ? "translate-x-0" : "translate-x-[60px]"
              } w-[60px] flex items-center justify-center bg-gray-900 hover:bg-gray-500 animate-pulse`}
              onClick={toggleBurgerMenu}
            >
              {burgerState ? (
                <CloseMenuIcon size={40} color="cyan" />
              ) : (
                <BurgerMenuIcon size={40} color="cyan" />
              )}
            </button>
          </div>
          <nav className="w-full">
            <ul className="w-full">
              <li
                className={`${
                  currentRoute === "/" ? "bg-gray-600" : "bg-gray-800"
                } w-full pl-10 h-[60px] flex items-center border-b-4 border-b-cyan-800 hover:bg-gray-400`}
              >
                <Link
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  href="/"
                  className="w-full h-full flex items-center text-slate-200"
                >
                  /home
                </Link>
              </li>
              <li
                className={`${
                  currentRoute === "/projects" ? "bg-gray-600" : "bg-gray-800"
                } w-full pl-10 h-[60px] flex items-center border-b-4 border-b-cyan-800 hover:bg-gray-400`}
              >
                <Link
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  href="/projects"
                  className="w-full h-full flex items-center text-slate-200"
                >
                  /projects
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      )}
    </>
  );
}

export default Header;
