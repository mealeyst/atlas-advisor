import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { TextInput } from ".";

const meta: Meta<typeof TextInput> = {
  title: "common/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    label: "Name",
    value: "",
    type: "text",
    onChange: () => {},
  },
  render: (args) => {
    const Component = () => {
      const [value, setValue] = useState(args.value);
      return (
        <TextInput
          {...args}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            args.onChange?.(e);
          }}
        />
      );
    };
    return <Component />;
  },
};

export const WithPlaceholder: Story = {
  args: {
    label: "Search",
    value: "",
    type: "text",
    placeholder: "Enter search term...",
    onChange: () => {},
  },
  render: (args) => {
    const Component = () => {
      const [value, setValue] = useState(args.value);
      return (
        <TextInput
          {...args}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            args.onChange?.(e);
          }}
        />
      );
    };
    return <Component />;
  },
};

export const WithValue: Story = {
  args: {
    label: "Email",
    value: "user@example.com",
    type: "email",
    onChange: () => {},
  },
  render: (args) => {
    const Component = () => {
      const [value, setValue] = useState(args.value);
      return (
        <TextInput
          {...args}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            args.onChange?.(e);
          }}
        />
      );
    };
    return <Component />;
  },
};

export const NumberInput: Story = {
  args: {
    label: "Population",
    value: 1000000,
    type: "number",
    placeholder: "Enter population",
    onChange: () => {},
  },
  render: (args) => {
    const Component = () => {
      const [value, setValue] = useState(args.value);
      return (
        <TextInput
          {...args}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            args.onChange?.(e);
          }}
        />
      );
    };
    return <Component />;
  },
};

export const PasswordInput: Story = {
  args: {
    label: "Password",
    value: "",
    type: "password",
    placeholder: "Enter password",
    onChange: () => {},
  },
  render: (args) => {
    const Component = () => {
      const [value, setValue] = useState(args.value);
      return (
        <TextInput
          {...args}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            args.onChange?.(e);
          }}
        />
      );
    };
    return <Component />;
  },
};

export const EmailInput: Story = {
  args: {
    label: "Email Address",
    value: "",
    type: "email",
    placeholder: "name@example.com",
    onChange: () => {},
  },
  render: (args) => {
    const Component = () => {
      const [value, setValue] = useState(args.value);
      return (
        <TextInput
          {...args}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            args.onChange?.(e);
          }}
        />
      );
    };
    return <Component />;
  },
};

export const SearchInput: Story = {
  args: {
    label: "Search Countries",
    value: "",
    type: "search",
    placeholder: "Search...",
    onChange: () => {},
  },
  render: (args) => {
    const Component = () => {
      const [value, setValue] = useState(args.value);
      return (
        <TextInput
          {...args}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            args.onChange?.(e);
          }}
        />
      );
    };
    return <Component />;
  },
};

export const DateInput: Story = {
  args: {
    label: "Date",
    value: "",
    type: "date",
    onChange: () => {},
  },
  render: (args) => {
    const Component = () => {
      const [value, setValue] = useState(args.value);
      return (
        <TextInput
          {...args}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            args.onChange?.(e);
          }}
        />
      );
    };
    return <Component />;
  },
};

export const LongLabel: Story = {
  args: {
    label: "Enter a very long label that might wrap to multiple lines",
    value: "",
    type: "text",
    placeholder: "Type here...",
    onChange: () => {},
  },
  render: (args) => {
    const Component = () => {
      const [value, setValue] = useState(args.value);
      return (
        <div style={{ width: "300px" }}>
          <TextInput
            {...args}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              args.onChange?.(e);
            }}
          />
        </div>
      );
    };
    return <Component />;
  },
};

export const WithCustomClassName: Story = {
  args: {
    label: "Custom Styled Input",
    value: "",
    type: "text",
    wrapperClassName: "max-w-md",
    onChange: () => {},
  },
  render: (args) => {
    const Component = () => {
      const [value, setValue] = useState(args.value);
      return (
        <TextInput
          {...args}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            args.onChange?.(e);
          }}
        />
      );
    };
    return <Component />;
  },
};
