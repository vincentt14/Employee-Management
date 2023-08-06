"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import CustomButton from "../shared/CustomButton";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const refHead = useRef<HTMLDivElement>(null);

  const onToggleClick = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    window.onscroll = () => {
      const fixedNav: any = refHead.current?.offsetTop;

      if (window.pageYOffset > fixedNav) {
        refHead.current?.classList.add("navbar-fixed");
      } else {
        refHead.current?.classList.remove("navbar-fixed");
      }
    };
  }, []);

  const navigations = [
    {
      href: "home",
      title: "Home",
    },
    {
      href: "about",
      title: "About Me",
    },
    {
      href: "experience",
      title: "Experience",
    },
    {
      href: "projects",
      title: "Projects",
    },
    {
      href: "contact",
      title: "Contact Me",
    },
  ];

  return (
    <nav>
      <div ref={refHead} className="bg-transparant absolute top-0 left-0 w-full flex items-center z-10 transition duration-100 ease-in-out pt-2">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="md:px-4">
              <Link href="/" className="flex cursor-pointer text-white font-bold text-lg py-5 md:py-6 item items-center justify-center gap-2">
                Employee Management
              </Link>
            </div>
            <div className="flex items-center px-4">
              <button type="button" className={toggle === true ? "block absolute right-4 hamburger-active lg:hidden" : "block absolute right-4 lg:hidden"} onClick={onToggleClick}>
                <span className="origin-top-left hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="origin-bottom-left hamburger-line transition duration-300 ease-in-out"></span>
              </button>

              <nav
                className={
                  toggle === true
                    ? " absolute py-5 bg-tertiary border border-borderColor lg:border-0 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:py-0"
                    : " hidden lg:block lg:static lg:bg-transparent lg:max-w-full"
                }
              >
                <ul className="block lg:flex">
                  {navigations.map((navigation) => (
                    <li key={navigation.href} className="group">
                      <Link href={navigation.href} className="cursor-pointer text-primary text-base py-2 mx-8 flex group-hover:text-white" onClick={onToggleClick}>
                        {navigation.title}
                      </Link>
                    </li>
                  ))}

                  <li className="group">
                    <CustomButton btnType="button" to="login" title="Login" containerStyles="ml-5 lg:ml-1 border-borderColor bg-tertiary hover:border-primary !mt-3 !mb-0 lg:!my-0 py-[10px]" textStyles="text-white" />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
