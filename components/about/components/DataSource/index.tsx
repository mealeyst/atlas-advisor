import { BodyLink } from "@/components/common/Link";

type DataSourceProps = {
  title: string;
  description: string;
  details: string[];
  url: string;
};

export const DataSource = ({ title, description, details, url }: DataSourceProps) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <ul className="space-y-2 text-gray-600 list-disc list-inside">
        {details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
      <BodyLink
        href={url}
        className="inline-block mt-4 text-blue-600 hover:text-blue-800 transition-colors font-medium"
      >
        Learn more →
      </BodyLink>
    </div>
  );
};
