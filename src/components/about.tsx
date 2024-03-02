import ThemeProvider from "./theme-provider";
import MaterialTailwind from '@material-tailwind/react';
const { Typography } = MaterialTailwind;

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
          <div>
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/TX8vKNgY4sU" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          </div>
        </div>
      </div>
      </section>
    </ThemeProvider>
  );
}

export default AboutPresentation;
