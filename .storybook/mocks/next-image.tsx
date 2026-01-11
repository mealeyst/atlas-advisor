// Mock for next/image component in Storybook
import React from "react";

const Image = (props: React.ComponentProps<"img">) => {
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  return <img {...props} />;
};

export default Image;
