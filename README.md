# Atlas Advisor

Atlas Advisor is a web application designed to help companies identify international market opportunities by merging and analyzing data from multiple global data sources. The app combines country information with economic indicators to provide a comprehensive view of potential markets worldwide.

## Overview

Atlas Advisor aggregates data from two primary APIs to create a unified dataset for market analysis:

1. **REST Countries API** - Provides comprehensive country information including:
   - Country names and official names
   - Geographic regions
   - Population data
   - Gini coefficient (income inequality metrics)
   - Currency information
   - Flag images

2. **World Bank API** - Supplies economic indicators including:
   - GDP (Gross Domestic Product) - `NY.GDP.MKTP.CD`
   - Inflation rate - `FP.CPI.TOTL.ZG`
   - Unemployment rate - `SL.UEM.TOTL.ZS`

By merging these datasets, Atlas Advisor enables businesses to:
- Compare economic indicators across countries
- Identify markets with favorable economic conditions
- Analyze demographic and economic trends
- Make data-driven decisions about international expansion

## Features

- **Comprehensive Country Data**: View detailed information for all countries in a single, searchable table
- **Economic Indicators**: Access real-time GDP, inflation, and unemployment data from the World Bank
- **Unified View**: See country demographics and economic metrics side-by-side for easy comparison
- **Responsive Design**: Clean, modern interface built with Next.js and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (or npm/yarn/bun)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

### Running the Development Server

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org) 16.1.1
- **React**: 19.2.3
- **TypeScript**: 5+
- **Styling**: Tailwind CSS 4
- **Data Fetching**: Native fetch API with server-side rendering

## Data Sources

- [REST Countries API](https://restcountries.com/) - Country information and demographics
- [World Bank API](https://datahelpdesk.worldbank.org/knowledgebase/articles/889392-about-the-indicators-api-documentation) - Economic indicators and development data

## Project Structure

```
app/
  components/
    Table.tsx          # Main table component displaying merged data
    TableCell.tsx      # Reusable table cell component
    TableHeader.tsx    # Reusable table header component
  page.tsx             # Main page with data fetching logic
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
