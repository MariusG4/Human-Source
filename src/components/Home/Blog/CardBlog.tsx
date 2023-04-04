import { Card } from "@material-tailwind/react";
import { useState } from "react";
import UnfoldMoreDoubleIcon from "@mui/icons-material/UnfoldMoreDouble";
import { AnimatePresence, motion } from "framer-motion";
import {
  CardBody,
  CardHeader,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import CoverBlogSmall from "../../../../public/imagini/blog/cover-blog-small.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BackImg from "../../../../public/imagini/blog/cover-blog-full.png";

interface ICardBlog {
  data: string;
  titlu: string;
  continut: string;
  id: number;
}

const CardBlog = ({ data, titlu, continut, id }: ICardBlog) => {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <motion.div
      layout
      onMouseLeave={handleMouseLeave}
      style={{ originY: 1 }}
      transition={{
        layout: {
          type: "spring",
          stiffness: 100,
          ease: "linear",
          duration: 0.8,
        },
      }}
      className="relative flex h-fit flex-col overflow-hidden rounded-2xl  border-none bg-transparent  pb-4 text-[#383A3C] shadow transition    md:w-full"
    >
      {hovered ? (
        <AnimatePresence>
          <motion.div
            layout
            className="absolute z-10 mx-0 mt-0 flex min-h-min   w-full  rounded-none rounded-t-xl object-cover"
          >
            <Image
              alt="background"
              className=" z-10  w-full object-cover"
              src={BackImg}
            />
          </motion.div>
        </AnimatePresence>
      ) : (
        <motion.div
          layout
          className="z-30 mx-0 mt-0 flex min-h-min  w-full rounded-none rounded-t-xl"
          transition={{
            layout: { type: "spring", stiffness: 10 },
          }}
        >
          <Image
            alt="cover-img-small"
            className="z-10 w-screen object-cover"
            src={CoverBlogSmall}
          />{" "}
        </motion.div>
      )}

      <motion.div
        className="z-20 flex  flex-col    "
        id="container-text-bloguri"
        style={{ originY: 0 }}
        layout
      >
        {" "}
        {hovered ? (
          <motion.div
            className="flex min-h-[500px] flex-col justify-between gap-2 py-2 px-4 pt-16 text-start text-alb-site"
            layout
          >
            <div className="flex h-[150px] w-full" id="filler card"></div>
            <Typography
              variant="paragraph"
              className="z-20 text-[18px] font-[350] text-alb-site opacity-50"
            >
              {data}
            </Typography>
            <Typography variant="h4" className="z-20 font-medium ">
              {titlu}
            </Typography>
            <Typography
              variant="paragraph"
              className="z-20 text-[18px] font-[400] leading-[22px]"
            >
              {continut}
            </Typography>
            <Button className="mt-4 bg-transparent text-start text-rosu-brand shadow-none hover:shadow-none ">
              <span className="text-rosu-brand">Citeste mai mult</span>
              <ArrowForwardIcon />
            </Button>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.button
              layout
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              onMouseEnter={handleMouseEnter}
              className="z-10 mt-4 bg-transparent text-center  text-rosu-brand shadow-none hover:shadow-none "
            >
              <UnfoldMoreDoubleIcon />
            </motion.button>{" "}
          </AnimatePresence>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CardBlog;
