import React, { PropsWithChildren } from 'react';
import { HeadingLevel } from './props.js';

export const UnstyledHeading = ({
  level,
  children,
  ...attrs
}: PropsWithChildren<{
  level?: HeadingLevel;
}>) => {
  if (!level) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  // We must tell TypeScript that Heading is a valid HTML tag name
  const Heading = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Heading
      style={{
        margin: 0,
        fontWeight: 'unset',
        fontSize: 'unset',
        lineHeight: 'unset',
      }}
      {...attrs}
    >
      {children}
    </Heading>
  );
};
