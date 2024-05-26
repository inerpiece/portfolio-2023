"use client";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import FluidPage from "@/components/FluidPage";
import FluidSection from "@/components/FluidSection";
import FluidArticle from "@/components/FluidArticle";
import { useEffect, useState } from "react";
import { projects } from "../page";

type ProjectType = {
  route: string;
  name: string;
  description: string;
};
const Project = () => {
  const [currentProject, setCurrentProject] = useState<ProjectType>();
  const path = usePathname();
  const params = useParams();
  useEffect(() => {
    projects.map((project) => {
      if (project.route === params.project) {
        setCurrentProject(project);
        return;
      }
    });
  }, []);
  return (
    <FluidPage>
      <FluidArticle>
        <FluidSection accentWarning>
          <div className="basis-8/12">
            <h1>{currentProject?.name}</h1>
            <p>
              {currentProject?.description} Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quis illum labore nobis facere,
              veritatis praesentium libero temporibus nisi itaque eligendi! Quia
              accusantium labore natus doloremque aut repellendus quidem.
              Corporis, nesciunt!
            </p>
          </div>
          <div className="basis-3/12 md:text-right">
            <Link
              className="hover:underline"
              href={`/projects/${params.project}/${params.project}`}
            >
              Working example...
            </Link>
          </div>
        </FluidSection>
        <div>
          <h1>{currentProject?.name}</h1>
          <p>{currentProject?.description}</p>
        </div>
        <Link href={`/projects/${params.project}/${params.project}`}>
          Working example...
        </Link>
      </FluidArticle>
    </FluidPage>
  );
};

export default Project;
