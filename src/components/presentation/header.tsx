import React from "react";
import {
  Button,
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";
import {
  ArrowSmallRightIcon,
} from "@heroicons/react/24/outline";

export function HeroPresentation() {
 
  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-full w-screen place-items-center bg-white relative px-8 py-8 lg:mb-36">
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="text-center lg:text-left pt-32">
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-8 lg:mr-32 leading-tight font-black"
            >
              Une société née d'une veritable passion pour la <span style={{color:'#25328D'}}>création</span> et la <span style={{color: '#ED8006'}}>réalisation</span> 
            </Typography>
            <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a href="#a-propos">
                <Button color="dark" className="flex items-center">
                  A propos
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex">
          <img src="SIL-HERO.png" alt="components" className="absolute -top-10 right-0 w-1/2" />
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroPresentation;
