import type { Meta, StoryObj } from "@storybook/react";

import { TechnologyStack } from ".";

const meta: Meta<typeof TechnologyStack> = {
  title: "about/TechnologyStack",
  component: TechnologyStack,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TechnologyStack>;

export const Default: Story = {
  args: {
    title: "Technology Stack",
    technologies: [
      { name: "Next.js", version: "16.1.1" },
      { name: "React", version: "19.2.3" },
      { name: "TypeScript", version: "5+" },
      { name: "Tailwind CSS", version: "4" },
    ],
    libraries: [
      { name: "TanStack Table", version: "8.21.3" },
      { name: "D3", version: "7.9.0" },
    ],
  },
};

export const WithoutLibraries: Story = {
  args: {
    title: "Technology Stack",
    technologies: [
      { name: "Next.js", version: "16.1.1" },
      { name: "React", version: "19.2.3" },
      { name: "TypeScript", version: "5+" },
    ],
  },
};

export const CustomTitle: Story = {
  args: {
    title: "Our Tech Stack",
    technologies: [
      { name: "Next.js", version: "16.1.1" },
      { name: "React", version: "19.2.3" },
    ],
    libraries: [{ name: "TanStack Table", version: "8.21.3" }],
  },
};

export const ManyTechnologies: Story = {
  args: {
    title: "Technology Stack",
    technologies: [
      { name: "Next.js", version: "16.1.1" },
      { name: "React", version: "19.2.3" },
      { name: "TypeScript", version: "5+" },
      { name: "Tailwind CSS", version: "4" },
      { name: "Node.js", version: "20+" },
      { name: "PostgreSQL", version: "15+" },
    ],
    libraries: [
      { name: "TanStack Table", version: "8.21.3" },
      { name: "D3", version: "7.9.0" },
      { name: "Zustand", version: "4.5.0" },
      { name: "React Query", version: "5.0.0" },
    ],
  },
};

export const SingleTechnology: Story = {
  args: {
    title: "Technology Stack",
    technologies: [{ name: "Next.js", version: "16.1.1" }],
  },
};

export const WithLongVersionNames: Story = {
  args: {
    title: "Technology Stack",
    technologies: [
      { name: "Next.js", version: "16.1.1 (Latest Stable)" },
      { name: "React", version: "19.2.3 (Canary)" },
      { name: "TypeScript", version: "5.4.5 (Beta)" },
    ],
    libraries: [
      { name: "TanStack Table", version: "8.21.3 (Latest)" },
      { name: "D3", version: "7.9.0 (Stable)" },
    ],
  },
};
