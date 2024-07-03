import React from 'react';

const useReactId = React.useId;
// Determine if useReactId can be used and define a function to always call it if possible.
// reactUseId returns a string that includes colons (:), e.g., :r0:, :r1:, etc.
// This string is NOT supported in CSS selectors. Hence the replace.
const safeUseReactId = typeof useReactId === 'function' ? () => useReactId().replace(/:/g, '') : () => React.useState(generateId())[0];

export const useId = (hasFallback?): string => {
  const id = safeUseReactId();

  return hasFallback || id;
};

/**
 * Generates a unique string ID
 * @returns string
 */
export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
}
