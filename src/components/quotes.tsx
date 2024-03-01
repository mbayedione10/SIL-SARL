import {
  Card,
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "./theme-provider";

interface QuotesCardPropsType {
  img: string;
  date?: string;
}

function QuotesCard({ img }: QuotesCardPropsType) {
  return (
    <Card color="transparent"  shadow={false}>
      <img src={img} alt="SIL SARL" className="rounded h-full w-full object-cover" />
    </Card>
  );
}

const posts = [
  {
    img: "hero2.jpeg",
  },
  {
    img: "hero.jpeg",
  },
  {
    img: "hero3.jpeg",
  },
];

export function QuoteSection() {
  return (
    <ThemeProvider>
      <section id="examplePages">
        <div className="container mx-auto px-8 py-10">
          <div className="mb-16 text-left">
            <Typography color="orange" className="mb-2 text-lg font-semibold">
              Inspirations et Réflexions en Images
            </Typography>
            <Typography color="blue-gray">
              Découvrez nos inspirations visuelles et laissez-vous porter par des citations captivantes, une source de motivation quotidienne.
            </Typography>
          </div>

          <div className="grid grid-cols-1 items-start gap-y-16 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map(({ img}: any) => (
              <QuotesCard
                key="SIL SARL"
                img={img}
              />
            ))}
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default QuoteSection;
