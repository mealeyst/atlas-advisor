import type { Meta, StoryObj } from "@storybook/react";

import { PageHeader } from ".";

const meta: Meta<typeof PageHeader> = {
  title: "about/PageHeader",
  component: PageHeader,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {};
