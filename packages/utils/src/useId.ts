/*
 * Let's see if we can make sense of why this hook exists and its
 * implementation.
 *
 * Some background:
 *   1. Accessibiliy APIs rely heavily on element IDs
 *   2. Requiring developers to put IDs on every element in Reach UI is both
 *      cumbersome and error-prone
 *   3. With a component model, we can generate IDs for them!
 *
 * Solution 1: Generate random IDs.
 *
 * This works great as long as you don't server render your app. When React (in
 * the client) tries to reuse the markup from the server, the IDs won't match
 * and React will then recreate the entire DOM tree.
 *
 * Solution 2: Increment an integer
 *
 * This sounds great. Since we're rendering the exact same tree on the server
 * and client, we can increment a counter and get a deterministic result between
 * client and server. Also, JS integers can go up to nine-quadrillion. I'm
 * pretty sure the tab will be closed before an app never needs
 * 10 quadrillion IDs!
 *
 * Problem solved, right?
 *
 * Ah, but there's a catch! React's concurrent rendering makes this approach
 * non-deterministic. While the client and server will end up with the same
 * elements in the end, depending on suspense boundaries (and possibly some user
 * input during the initial render) the incrementing integers won't always match
 * up.
 *
 * Solution 3: Don't use IDs at all on the server; patch after first render.
 *
 * What we've done here is solution 2 with some tricks. With this approach, the
 * ID returned is an empty string on the first render. This way the server and
 * client have the same markup no matter how wild the concurrent rendering may
 * have gotten.
 *
 * After the render, we patch up the components with an incremented ID. It
 * doesn't have to be incremented, though; we could do something random, but
 * incrementing a number is probably the cheapest thing we can do.
 *
 * @TODO Note that this should be axed if useOpaqueIdentifier becomes stable
 * https://github.com/facebook/react/pull/17322
 */

import { useId as reactUseId } from 'react';

export const useId = (hasFallback?): string => {
  const prefix = generateId();
  
  // reactUseId returns a string that includes colons (:), e.g., :r0:, :r1:, etc.
  // This string is NOT supported in CSS selectors. Hence the replace.
  return hasFallback ?? prefix + reactUseId().replace(/:/g, '');
};

/**
 * Generates a unique string ID
 * @returns string
 */
export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
}
