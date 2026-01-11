import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  stories: ["../app/**/*.stories.@(js|jsx|mjs|ts|tsx)", "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    check: false,
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  async viteFinal(config) {
    return {
      ...config,
      define: {
        ...(config.define || {}),
        "process.env": JSON.stringify({
          NODE_ENV: "development",
        }),
      },
      resolve: {
        ...config.resolve,
        alias: {
          ...(config.resolve?.alias || {}),
          "@": path.resolve(__dirname, ".."),
          "next/navigation": require.resolve("./mocks/next-navigation.ts"),
          "next/image": require.resolve("./mocks/next-image.tsx"),
        },
      },
      css: {
        ...config.css,
        postcss: {
          plugins: [require("@tailwindcss/postcss")],
        },
      },
    };
  },
};

export default config;
