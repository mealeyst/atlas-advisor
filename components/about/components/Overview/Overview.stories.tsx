import type { Meta, StoryObj } from "@storybook/react";

import { Overview } from ".";

const meta: Meta<typeof Overview> = {
  title: "about/Overview",
  component: Overview,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Overview>;

export const Default: Story = {};
