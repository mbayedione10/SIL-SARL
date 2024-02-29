import { Typography, IconButton } from "@material-tailwind/react";

const YEAR = new Date().getFullYear();

const SOCIAL_MEDIA = [
  {
    icon: "fab fa-instagram",
    link: "https://www.instagram.com/sil_sarl/",
  },
  {
    icon: "fab fa-twitter",
    link: "",
  },
  {
    icon: "fab fa-facebook-square",
    link: "https://www.facebook.com/creativetim?ref=astrolaunch-ui",
  },
];

const MENU = [
  {
    name: "A Propos",
    link: "#a-propos",
  },
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const CONTACT=[
    {
        content: `+221707019901`,
        icon: `fas fa-phone`
    },
    {
        content:`contact@sil-sarl.com`,
        icon:`fas fa-envelope`
    },
    {
        content: `+221773818105`,
        icon: `fas fa-phone`
    },
    {
        content: `Hann, Rte Soleil, Dakar, Sénégal`,
        icon: `fas fa-location-dot`
    },
    
    
]

export function Footer() {
  return (
    <footer className="relative z-50 bg-white px-8 pt-12 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-4/12">
            <Typography
              variant="h4"
              color="orange"
              className="mb-2 !font-semibold !text-primary"
            >
              Sénégalaise de l’Ingénierie et de la Logistique SARL
            </Typography>
            <Typography className="text-md mt-0 mb-2 font-normal !text-gray-600">
              Une société née d'une veritable passion pour la création et la réalisation
            </Typography>
            <div className="mt-6">
              {SOCIAL_MEDIA.map(({ icon, link }, key) => (
                <a key={key} href={link} target="_blank" rel="noreferrer">
                  <i
                    className={`${icon} font-xl align-center mr-2 inline-block items-center justify-center rounded-full border-[1.5px] border-blue-gray-50 p-3 text-center text-primary outline-none focus:outline-none`}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="w-full md:w-7/12 md:px-4">
            <div className="flex justify-between flex-wrap">
              <div className="w-full md:w-4/12 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Menu
                </span>
                <ul className="list-unstyled">
                  {MENU.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        rel="noreferrer"
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-7/12 xl:w-8/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Nous contacter
                </span>
                <ul className="list-unstyled flex flex-wrap items-center">
                  {CONTACT.map(({ content, icon }, key) => (
                    <li key={key} className="flex items-center mr-4 mb-2">
                      <IconButton> 
                        <i className={icon}/>
                      </IconButton>
                      <a
                        rel="noreferrer"
                        className="text-sm ml-2 font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {content.includes('@') ? (
                                <a href={`mailto:${content}`}>{content}</a>)
                            : content.match(/^\+?\d+$/) ? (
                                <a href={`tel:${content}`}>{content}</a>)
                            : (
                                <span>{content}</span>)
                        }
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blue-gray-50" />
        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-between">
          <div className="text-center lg:text-left">
            <a
              href="https://vercel.com/?utm_source=ct-tailwind-team&utm_campaign=oss"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-semibold text-primary no-underline"
            >
              <span className="mr-1">Powered by 
                <a target="_blank" href="https://mbayedione.xyz/"> #NioulBoy. All right reserved</a>
              </span>
            </a>
            <div className="text-md mt-2 py-1 font-normal text-gray-600">
              Copyright &copy; {YEAR}{" "}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
