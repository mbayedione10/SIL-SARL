import React from "react";
import {
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "./theme-provider";

export function AboutPresentation() {
 
  return (
    <ThemeProvider>
      <section id="services">
      <div className="h-full w-screen place-items-center bg-white py-20">
        <div className="container mx-auto grid items-center relative lg:grid-cols-2">
          <div className="mb-8">
            <Typography
              color="orange"
              className="flex items-center font-bold text-lg mb-5"
            >
              SIL SARL
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-4 leading-tight"
            >
              Expertise en Ingénierie et Construction
            </Typography>
            <Typography color="blue-gray" className="lg:pr-32">
              Nos ingénieurs travaillent sur des projets tels que les routes, les ponts, les barrages, les tunnels, fourniture, fabrication, montage, Hangar, bâtiments industriels, dépôt, cage de secoure, abris, passerelle, couverture, structure métallique en étages ou paliers, charpente métallique pour toutes surfaces.
            </Typography>
          </div>
          <div>
      <div className="absolute right-0 top-0 h-full w-full flex justify-end">
        <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
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
        <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
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
            <video 
            src="video.mp4" 
            alt="video" 
            className="mx-auto  md:flex" 
            style={{ height: "400px", width:"400px" }}
            controls />

          </div>
          
        </div>
      </div>
      </section>
    </ThemeProvider>
  );
}

export default AboutPresentation;
