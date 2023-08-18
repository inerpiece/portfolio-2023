import Image from "next/image";
import FluidPage from "@/components/FluidPage";

export default function Home() {
  return (
    <FluidPage>
      <section className="flex items-center flex-col justify-center">
        <h1 className="text-xl">
          <span className="text-cyan-400">Frontend</span> Engineer
        </h1>
        <h2 className="p-10 text-5xl">
          <span className="text-cyan-400">Anton</span> Markov
        </h2>
        <p className="2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-2/4 sm:w-3/4">
          I am a junior{" "}
          <span className="text-cyan-400 animate-pulse">Frontend</span> Engineer
          striving for high quality and unlimited motivation. I am a team
          player, great communicator, and a fearsome competitor. I like building
          reusable components, user interfaces{" "}
          <span className="text-cyan-400 animate-pulse">[UI]</span>, and keeping
          up with user experience{" "}
          <span className="text-cyan-400 animate-pulse">[UX]</span> standards.
          My off days are spent sim racing, playing games, and relaxing with
          friends and family.
        </p>
      </section>
    </FluidPage>
  );
}
