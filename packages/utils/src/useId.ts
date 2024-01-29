import React from 'react';

const useReactId = React.useId;

export const useId = (hasFallback?): string => {
  if (typeof useReactId === 'function') {
    // reactUseId returns a string that includes colons (:), e.g., :r0:, :r1:, etc.
    // This string is NOT supported in CSS selectors. Hence the replace.
    return hasFallback ?? useReactId().replace(/:/g, '');
  } else {
    const [elId] = React.useState(generateId());
    return elId;
  }
};

/**
 * Generates a unique string ID
 * @returns string
 */
export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
}
