import type { Meta, StoryObj } from "@storybook/react";

import { FooterLink } from ".";

const meta: Meta<typeof FooterLink> = {
  title: "common/Link/FooterLink",
  component: FooterLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FooterLink>;

export const Default: Story = {
  args: {
    href: "/about",
    children: "About",
  },
};

export const WithLongText: Story = {
  args: {
    href: "/terms-of-service",
    children: "Terms of Service and Privacy Policy",
  },
};

export const WithCustomClassName: Story = {
  args: {
    href: "/contact",
    children: "Contact Us",
    className: "text-blue-600 hover:text-blue-800 underline",
  },
};
