type FluidSectionProps = {
  children: React.ReactNode;
};

function FluidSection({ children }: FluidSectionProps) {
  return (
    // REMOVE: temporary color while developing the component
    <section className="flex flex-col sm:rounded mb-10 sm:mb-20 last:mb-0 p-4 md:flex-row justify-between bg-gray-700 hover:bg-gray-500">
      {children}
    </section>
  );
}

export default FluidSection;
