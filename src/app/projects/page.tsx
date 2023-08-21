import FluidPage from "@/components/FluidPage";
import FluidSection from "@/components/FluidSection";

export const projects = [
  {
    route: "bgg",
    name: "Background Generator",
    description: "Lorem ipsum",
  },
  {
    route: "bgg2",
    name: "Background Generator2",
    description: "Lorem ipsum 2",
  },
];
export default function Projects() {
  return (
    <FluidPage>
      <FluidSection>
        <div className="basis-full pb-4 md:pr-2 md:pb-0">
          <img
            src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
            alt=""
          />
        </div>
        <p className="basis-full md:pl-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          laboriosam quia qui, modi ducimus illo nemo, eius explicabo nobis
          ullam necessitatibus quam totam quos accusantium non incidunt velit
          facere hic.
        </p>
      </FluidSection>
      <FluidSection>
        <p className="basis-full md:pr-2 pb-4 md:pb-0">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          laboriosam quia qui, modi ducimus illo nemo, eius explicabo nobis
          ullam necessitatibus quam totam quos accusantium non incidunt velit
          facere hic.
        </p>
        <div className="basis-full  md:pl-2 ">
          <img
            src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
            alt=""
          />
        </div>
      </FluidSection>
      {projects.map((project) => (
        <FluidSection interactive={true} link={project.route}>
          <p className="basis-full md:pr-2 pb-4 md:pb-0">
            {project.description}
          </p>
          <div className="basis-full  md:pl-2 ">
            <img
              src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
              alt=""
            />
          </div>
        </FluidSection>
      ))}
    </FluidPage>
  );
}
