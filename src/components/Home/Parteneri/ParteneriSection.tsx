import { Typography } from "@material-tailwind/react";
import CardParteneri from "./CardParteneri";
import dateParteneri from "./dateParteneri";

const ParteneriSection = () => {
  return (
    <section className="container my-36 flex flex-col items-center justify-center text-start md:text-center ">
      <Typography
        variant="h3"
        className=" mb-24 px-2  font-bold  text-gri-brand "
      >
        Firmele partenere care au avut incredere in serviciile Human Source
      </Typography>
      <div
        className="mx-2 grid w-full grid-cols-3 place-items-center  gap-3 px-2 sm:grid-cols-2 md:w-full md:grid-cols-3 md:content-center  md:gap-6  2xl:grid-cols-5"
        id="container-parteneri"
      >
        {dateParteneri.map(({ id, firma, descriere }) => (
          <CardParteneri key={id} firma={firma} descriere={descriere} />
        ))}
      </div>
    </section>
  );
};

export default ParteneriSection;
