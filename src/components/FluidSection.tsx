import Link from "next/link";

type FluidSectionProps = {
  interactive?: boolean;
  flush?: boolean;
  background?: boolean;
  accentImportant?: boolean;
  link?: string;
  accentWarning?: boolean;
  accentPositive?: boolean;
  children: React.ReactNode;
};

function FluidSection({
  interactive,
  flush,
  background = true,
  accentImportant,
  accentWarning,
  accentPositive,
  link,
  children,
}: FluidSectionProps) {
  return (
    // REMOVE: temporary color while developing the component
    // TODO: Rework so that even if it is interactive it can still be customized:
    // flush, background, accents
    <>
      {!interactive ? (
        <section
          className={`
          ${flush ? "py-4" : "p-4"}
          ${background ? "bg-gray-700" : ""}
          ${accentImportant ? "bg-cyan-700" : ""}
          ${accentWarning ? "bg-orange-700" : ""}
          ${accentPositive ? "bg-green-700" : ""}
          flex flex-col sm:rounded mb-10 sm:mb-20 last:mb-0 md:flex-row justify-between`}
        >
          {children}
        </section>
      ) : (
        <section className="mb-10 sm:mb-20 last:mb-0">
          <Link
            className="flex flex-col sm:rounded p-4 md:flex-row justify-between bg-gray-700 hover:bg-gray-500"
            href={`/projects/${link}`}
          >
            {children}
          </Link>
        </section>
      )}
    </>
  );
}

export default FluidSection;
