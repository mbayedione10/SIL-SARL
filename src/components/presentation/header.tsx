import React from "react";
import {
  Button,
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";

export function HeroPresentation() {
 
  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-full w-screen place-items-center bg-white relative px-8 py-8 lg:mb-36">
        <div className="absolute right-0 top-0 h-full w-full flex justify-end">
        <div className="w-28 h-28  flex rounded-xl relative blur-2xl">
            <span
              className="absolute w-16 h-16 -top-1 -right-1 bg-[#25328D] rounded-md rotate-45"
            ></span>
            <span
              className="absolute w-16 h-16 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45"
            ></span>
            <span
              className="absolute w-16 h-16 -bottom-1 -left-1 bg-[#ED8006] rounded-md rotate-45"
            ></span>
          </div>
      </div>

      <div className="absolute right-0 bottom-0 h-full w-full flex items-end">
        <div className="w-28 h-28  flex rounded-xl relative blur-2xl">
            <span
              className="absolute w-16 h-16 -top-1 -right-1 bg-[#25328D] rounded-md rotate-45"
            ></span>
            <span
              className="absolute w-16 h-16 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45"
            ></span>
            <span
              className="absolute w-16 h-16 -bottom-1 -left-1 bg-[#ED8006] rounded-md rotate-45"
            ></span>
          </div>
      </div>
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
