import { useId as reactUseId } from 'react';

export const useId = (hasFallback?): string => {
  // reactUseId returns a string that includes colons (:), e.g., :r0:, :r1:, etc.
  // This string is NOT supported in CSS selectors. Hence the replace.
  return hasFallback ?? reactUseId().replace(/:/g, '');
};

