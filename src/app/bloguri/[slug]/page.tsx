"use client";
import dateBloguri from "@/components/Blog/dateBloguri";
import { Breadcrumbs, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface IpageProps {
  params: { slug: string };
}

const Blog: FC<IpageProps> = ({ params }) => {
  return (
    <section className="min-h-screen bg-[#E5E5E5] py-6 px-4 text-start md:px-20">
      <Breadcrumbs
        className="mx-0 my-4 bg-transparent md:my-12"
        fullWidth
        separator=">"
      >
        <Link className="text-colors-gri-brand" href="/">
          Home
        </Link>
        <Link className="text-colors-gri-brand" href="/bloguri">
          Bloguri
        </Link>
        <Link className="text-red-600" href={`/bloguri/${params.slug}`}>
          {params.slug}
        </Link>
      </Breadcrumbs>
      {dateBloguri
        .filter((blog) => blog.slug === params.slug)
        .map(({ src, text, id }) => {
          return (
            <div key={id} className="">
              <div className="flex max-h-[405px] w-full justify-center py-6">
                <Image src={src} className="h-auto w-full" alt="cover-blog" />
              </div>
              <div className="flex flex-col gap-5 text-start">
                <Typography variant="small">By Author Name</Typography>{" "}
                <Typography variant="small">
                  Luni, 24 Septembrie 2019
                </Typography>
                <Typography variant="h4" className="text-start font-bold">
                  Lorem ipsum dolor sit amet consectetur. Magnis sem a.
                </Typography>
              </div>
              <div className="py-8">
                <Typography variant="paragraph">{text}</Typography>
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default Blog;
