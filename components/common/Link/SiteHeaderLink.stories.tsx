import type { Meta, StoryObj } from "@storybook/react";

import { SiteHeaderLink } from ".";

const meta: Meta<typeof SiteHeaderLink> = {
  title: "common/Link/SiteHeaderLink",
  component: SiteHeaderLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SiteHeaderLink>;

export const Default: Story = {
  args: {
    href: "/",
    children: "Home",
  },
};

export const WithLongText: Story = {
  args: {
    href: "/countries",
    children: "Browse All Countries",
  },
};

export const WithCustomClassName: Story = {
  args: {
    href: "/about",
    children: "About",
    className: "text-purple-600 hover:text-purple-900 font-bold",
  },
};
