type TechnologyStackProps = {
  title?: string;
  technologies: {
    name: string;
    version: string;
  }[];
  libraries?: {
    name: string;
    version: string;
  }[];
};

export const TechnologyStack = ({ title = "Technology Stack", technologies, libraries }: TechnologyStackProps) => {
  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">{title}</h2>
      <div className="grid gap-3 md:grid-cols-2 mb-6">
        {technologies.map((technology) => (
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg" key={technology.name}>
            <span className="font-semibold text-gray-900 min-w-[120px]">{technology.name}:</span>
            <span className="font-semibold text-gray-900 min-w-[120px]">Framework:</span>
            <span className="text-gray-700">{technology.version}</span>
          </div>
        ))}
      </div>
      {libraries && <h3 className="text-lg font-semibold text-gray-900 mb-3">Libraries</h3>}
      {libraries &&
        libraries.map((library) => (
          <div className="flex items-center gap-3 pb-6" key={library.name}>
            <div className="flex w-full gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="font-semibold text-gray-900 min-w-[120px]">{library.name}:</span>
              <span className="text-gray-700">{library.version}</span>
            </div>
          </div>
        ))}
    </>
  );
};
