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
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onTouchStart={() => {
        setHovered(!hovered);
      }}
      className="relative flex h-full max-h-[350px]  flex-col justify-end overflow-hidden rounded-2xl  border-none bg-transparent  text-[#383A3C] shadow transition  md:max-h-[500px]   md:w-full  "
    >
      <AnimatePresence>
        {!hovered ? (
          <motion.div
            key="imagine"
            layout
            transition={{
              layout: {
                type: "spring",
                stiffness: 20,
                duration: 1,
                height: "100vh",
              },
            }}
            id="img-container"
            className="relative z-40 object-fill"
          >
            <Image
              alt="background"
              className="w-full object-fill"
              src={BackImg}
            />
          </motion.div>
        ) : (
          <motion.div
            key="imagine"
            layout
            transition={{
              layout: { type: "spring", stiffness: 20, duration: 1 },
            }}
            id="img-container"
            className="absolute top-0 bottom-0 h-full w-full"
          >
            <Image
              alt="background"
              className="relative h-full w-full object-fill "
              src={BackImg}
            />{" "}
            <motion.div
              key="mask"
              transition={{
                type: "spring",
                stiffness: 20,
                duration: 1,
                delay: 500,
              }}
              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden rounded-2xl bg-black bg-fixed opacity-50"
            />
          </motion.div>
        )}

        <motion.div
          key="container-text"
          style={{
            height: hovered ? "40vh" : "100vh",
          }}
          layout
          transition={{
            layout: { type: "spring", stiffness: 20 },
          }}
          className={`z-20 flex  flex-col justify-end gap-2 py-2 px-4 text-start md:justify-between ${
            hovered ? "text-alb-site " : "text-gri-brand"
          } `}
          id="container-text-bloguri"
        >
          <Typography
            variant="paragraph"
            className="z-20 text-[18px] font-[350]  opacity-50 "
          >
            {data}
          </Typography>
          <Typography variant="h4" className="font-medium ">
            {titlu}
          </Typography>
          <Typography
            variant="paragraph"
            className=" text-[18px] font-[400] leading-[22px]"
          >
            {continut}
          </Typography>
          <Button
            className={`mt-4 bg-transparent text-start text-rosu-brand shadow-none hover:scale-110 hover:shadow-none ${
              hovered && "text-alb-site"
            }`}
          >
            <span>Citeste mai mult</span>
            {hovered && <ArrowForwardIcon />}
          </Button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CardBlog;


