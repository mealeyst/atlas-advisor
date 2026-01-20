import Link from "next/link";

import { DataSource } from "@/components/about/components/DataSource";
import { Feature } from "@/components/about/components/Feature";
import { Overview } from "@/components/about/components/Overview";
import { PageHeader } from "@/components/about/components/PageHeader";
import { TechnologyStack } from "@/components/about/components/TechnologyStack";

export const metadata = {
  title: "About | Atlas Advisory",
  description: "Learn about Atlas Advisory and how we help companies identify international market opportunities.",
};

export default function AboutPage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full px-4 py-12">
      <div className="w-full max-w-4xl">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors">
          ← Back to Countries
        </Link>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <PageHeader />
          <div className="px-8 py-12 space-y-12">
           <Overview />

            <section id="data-sources">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Data Sources</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <DataSource
                  title="REST Countries API"
                  description="Provides comprehensive country information including:"
                  details={[
                    "Country names and official names",
                    "Geographic regions and subregions",
                    "Population data",
                    "Gini coefficient (income inequality metrics)",
                    "Currency information",
                    "Flag images",
                  ]}
                  url="https://restcountries.com/"
                />
                <DataSource
                  title="World Bank API"
                  description="Supplies economic indicators including:"
                  details={[
                    "GDP (Gross Domestic Product)",
                    "Inflation rate",
                    "Unemployment rate",
                    "Historical trend data",
                    "Comparative analysis metrics",
                  ]}
                  url="https://datahelpdesk.worldbank.org/knowledgebase/articles/898581"
                />
              </div>
            </section>
            <section id="features">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Features</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <Feature
                  title="Comprehensive Country Data"
                  description="View detailed information for all countries in a single, searchable table"
                />
                <Feature
                  title="Economic Indicators"
                  description="Access real-time GDP, inflation, and unemployment data from the World Bank"
                />
                <Feature
                  title="Unified View"
                  description="See country demographics and economic metrics side-by-side for easy comparison"
                />
                <Feature
                  title="Responsive Design"
                  description="Clean, modern interface built with Next.js and Tailwind CSS"
                />
              </div>
            </section>

            <section id="technology-stack">
              <TechnologyStack
                title="Technology Stack"
                technologies={[
                  { name: "Next.js", version: "16.1.1" },
                  { name: "React", version: "19.2.3" },
                  { name: "TypeScript", version: "5+" },
                  { name: "Tailwind CSS", version: "4" },
                ]}
                libraries={[
                  { name: "TanStack Table", version: "8.21.3" },
                  { name: "D3", version: "7.9.0" },
                ]}
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
