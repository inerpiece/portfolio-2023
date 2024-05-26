type FluidArticleProps = {
  children: React.ReactNode;
};

function FluidArticle({ children }: FluidArticleProps) {
  return (
    // REMOVE: temporary color while developing the component
    <article className="flex flex-col sm:rounded mb-10 sm:mb-20 p-4 bg-gray-500">
      {children}
    </article>
  );
}

export default FluidArticle;
