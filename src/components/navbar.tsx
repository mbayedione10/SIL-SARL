import React from "react";
import pkg from '@material-tailwind/react';
  const { Navbar, Avatar, Typography, IconButton, Collapse, MenuItem } = pkg;
import {
  UserIcon,
  WrenchScrewdriverIcon,
  InformationCircleIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";
 
 
// nav list component
const navListItems = [
  {
    label: "A Propos",
    icon: InformationCircleIcon,
    href: "#a-propos",
  },
    {
    label: "Services",
    icon: WrenchScrewdriverIcon,
    href: "#services",
  },
    {
    label: "Contact",
    icon: UserIcon,
    href: "#contact",
  }
];
 
function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">

      {navListItems.map(({ label, icon, href }, key) => (
        <Typography
          key={label}
          as="a"
          href={href}
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            {label}
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}
 
export default function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [shouldShowBorder, setShouldShowBorder] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
 
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShouldShowBorder(true);
      } else {
        setShouldShowBorder(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);
 
  return (
    <Navbar
      className={`sticky inset-0 z-10 mx-auto max-w-screen-2xl p-2 lg:pl-6 mt-4 transition-shadow ${
        shouldShowBorder ? "border-b border-gray-300 shadow-none" : ""
      }`}
    >
      <div className="relative mx-auto flex items-center text-blue-gray-900">
        <a href="#">
          <Avatar
            size="lg"
            alt="Logo SIL SARL"
            className="border border-gray-900 p-0.5"
            src="SIL-LOGO.png"
          />
        </a>
        
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          Sénégalaise de l’Ingénierie et de la Logistique SARL
        </Typography>
        <div className="hidden lg:flex ml-auto">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6 ml-4" />
        </IconButton>
        
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </Navbar>
  );
}