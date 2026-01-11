import type { Meta, StoryObj } from "@storybook/react";

import { BodyLink } from ".";

const meta: Meta<typeof BodyLink> = {
  title: "common/Link/BodyLink",
  component: BodyLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BodyLink>;

export const Default: Story = {
  args: {
    href: "/about",
    children: "Learn more →",
  },
};

export const WithLongText: Story = {
  args: {
    href: "/documentation",
    children: "Read the full documentation and user guide →",
  },
};

export const WithCustomClassName: Story = {
  args: {
    href: "/contact",
    children: "Get in touch →",
    className: "text-purple-600 hover:text-purple-800 underline font-bold",
  },
};

export const WithoutArrow: Story = {
  args: {
    href: "/resources",
    children: "View all resources",
  },
};
