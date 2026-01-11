import type { Meta, StoryObj } from "@storybook/react";

import { SiteHeader } from ".";

const meta: Meta<typeof SiteHeader> = {
  title: "common/SiteHeader",
  component: SiteHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SiteHeader>;

export const Default: Story = {};
