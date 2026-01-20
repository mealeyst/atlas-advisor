import type { Meta, StoryObj } from "@storybook/react";

import { H1, H2, H3, P } from ".";

const meta: Meta = {
  title: "common/Text",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

// H1 Stories
export const H1Default: Story = {
  render: () => <H1>Main Heading</H1>,
};

export const H1LongText: Story = {
  render: () => (
    <H1>This is a longer heading that spans multiple words and demonstrates how the component handles extended text</H1>
  ),
};

export const H1WithCustomClassName: Story = {
  render: () => <H1 className="text-blue-600">Custom Styled Heading</H1>,
};

// H2 Stories
export const H2Default: Story = {
  render: () => <H2>Section Heading</H2>,
};

export const H2LongText: Story = {
  render: () => (
    <H2>This is a longer section heading that demonstrates how the H2 component handles extended text content</H2>
  ),
};

export const H2WithCustomClassName: Story = {
  render: () => <H2 className="text-green-600">Custom Styled Section Heading</H2>,
};

// H3 Stories
export const H3Default: Story = {
  render: () => <H3>Subsection Heading</H3>,
};

export const H3LongText: Story = {
  render: () => (
    <H3>This is a longer subsection heading that shows how the H3 component handles extended text</H3>
  ),
};

export const H3WithCustomClassName: Story = {
  render: () => <H3 className="text-purple-600">Custom Styled Subsection Heading</H3>,
};

// P Stories
export const PDefault: Story = {
  render: () => <P>This is a paragraph of text that demonstrates the default styling of the P component.</P>,
};

export const PLongText: Story = {
  render: () => (
    <P>
      This is a longer paragraph that contains multiple sentences and demonstrates how the P component handles extended
      text content. It shows the line height and spacing that makes the text readable and well-formatted. The component
      uses a relaxed leading to ensure comfortable reading experience.
    </P>
  ),
};

export const PWithCustomClassName: Story = {
  render: () => (
    <P className="text-indigo-600 font-medium">
      This paragraph has custom styling applied through the className prop.
    </P>
  ),
};

export const PMultipleParagraphs: Story = {
  render: () => (
    <div>
      <P>This is the first paragraph in a series of paragraphs.</P>
      <P>This is the second paragraph that follows the first one.</P>
      <P>This is the third paragraph, showing how multiple paragraphs work together.</P>
    </div>
  ),
};

// Showcase Story
export const AllTextComponents: Story = {
  render: () => (
    <div className="space-y-6">
      <H1>Main Page Heading</H1>
      <P>This is an introductory paragraph that appears after the main heading.</P>
      <H2>Section One</H2>
      <P>This paragraph provides details about the first section of content.</P>
      <H3>Subsection A</H3>
      <P>This paragraph explains the details of subsection A.</P>
      <H3>Subsection B</H3>
      <P>This paragraph explains the details of subsection B.</P>
      <H2>Section Two</H2>
      <P>This paragraph provides details about the second section of content.</P>
    </div>
  ),
};
