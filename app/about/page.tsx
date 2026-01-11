import Image from "next/image";
import Link from "next/link";

import { DataSource } from "@/components/about/components/DataSource";
import { Feature } from "@/components/about/components/Feature";
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
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-12 border-b border-gray-200">
            <div className="flex items-center gap-6 mb-4">
              <Image
                src="/logo.png"
                alt="Atlas Advisory Logo"
                width={120}
                height={60}
                className="h-auto w-auto rounded-md"
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Atlas Advisory</h1>
            <p className="text-lg text-gray-700 max-w-3xl">
              A web application designed to help companies identify international market opportunities by merging and
              analyzing data from multiple global data sources.
            </p>
          </div>

          {/* Main Content */}
          <div className="px-8 py-12 space-y-12">
            {/* Overview Section */}
            <section id="overview">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Atlas Advisory aggregates data from multiple authoritative sources to create a unified dataset for
                market analysis. By combining country information with economic indicators, we provide a comprehensive
                view of potential markets worldwide.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our platform enables businesses to compare economic indicators across countries, identify markets with
                favorable economic conditions, analyze demographic and economic trends, and make data-driven decisions
                about international expansion.
              </p>
            </section>

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
