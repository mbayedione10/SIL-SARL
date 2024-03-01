import {
  Card,
  CardHeader,
  CardBody,

  Typography,
} from "@material-tailwind/react";

interface ServicesCardPropsType {
  img: string;
  category: string;
}

function ServicesCard({ img, category }: ServicesCardPropsType) {
  return (
    <Card
      shadow={false}
      className="relative grid h-[25rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h4"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          {category}
        </Typography>
      </CardBody>
    </Card>
  );
}

const services = [
  {
    img: "/services/chaudronnerie.jpeg",
    category: "Fabrication et montage (Hangar, bâtiments industriels, dépôt, passerelle...)",
  },
  {
    img: "/services/genie-civile.png",
    category: "Ingénierie civil - Ingenierie structure - Ingénierie transport",
  },
  {
    img: "/services/Construction-metallique.jpeg",
    category: "Structure métallique en étages ou paliers - Charpente métallique pour toutes surfaces",
  },
  
  {
    img: "/services/transport-logistique.jpeg",
    category: "Transport routier - Transport maritime - Transport aérien",
  },
  {
    img: "/services/telecommunication.jpeg",
    category: "Antennes et tours - Cables a fibre optique - Réseaux de commutation",
  },
  {
    img: "/services/transport-logistique.jpeg",
    category: "Transport routier - Transport maritime - Transport aérien",
  },
];

export function TeamSectionOne() {
  return (
    <section id="a-propos" className="py-8 px-8 lg:py-16">
      <div className="container mx-auto">
        <div className="mb-10 ">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Nos domaines d'activités
          </Typography>
          <Typography
            variant="lead"
            className="l:px-20 text-blue-gray-800"
          >
            Découvrez notre large éventail de services spécialisés.
            <br/>
            Nous offrons des solutions sur mesure pour répondre à tous vos besoins, avec un engagement envers l'excellence et l'innovation.
          </Typography>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {services.map((props, key) => (
            <ServicesCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSectionOne;
