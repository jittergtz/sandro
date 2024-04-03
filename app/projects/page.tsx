import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import Image from "next/image";


export const revalidate = 60;
export default async function ProjectsPage() {
 

  const featured = allProjects.find((project) => project.slug === "volume")!;
  const top2 = allProjects.find((project) => project.slug === "saphir")!;
  const top3 = allProjects.find((project) => project.slug === "peak")!;
  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== featured.slug &&
        project.slug !== top2.slug &&
        project.slug !== top3.slug,
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32 ">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl  tracking-tight text-zinc-100 sm:text-4xl">
            Projekte
          </h2>
          <p className="mt-4 text-zinc-400">
          Meine derzeitigen Hauptprojekte. 
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href={`/projects/${featured.slug}`}>
              <article className="relative w-full h-full p-4 md:p-6">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100 mb-5">
                    {featured.date ? (
                      <time dateTime={new Date(featured.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(featured.date))}
                      </time>
                    ) : (
                      <span>SOON</span>
                    )}
                  </div>
                </div>

                <Image
                alt="project cover"
                src={"/peak-prev-1.png"}
                className="object-cover rounded-xl z-0 w-full"
                width={1080}
                height={640}
                />

                <h2
                  id="featured-post"
                  className="mt-4 text-2xl  text-zinc-400 group-hover:text-zinc-300 sm:text-3xl font-display"
                >
                  {featured.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {featured.description}
                </p>
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {[top2, top3].map((project) => (
              <Card key={project.slug}>
             <div className="flex">
                <Image
                alt="project cover"
                src={"/peak-prev-1.png"}
                className=" overflow-hidden object-cover  bottom-40 rounded-xl z-0 w-full "
                width={1080}
                height={400}
                />
            

                <Article project={project}  />
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project}  />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project}  />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project}  />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
