import { useEffect, useRef } from 'react';

export const useLogDeprecationWarning = ({ condition, message }: { condition: boolean; message: string }) => {
  const loggedOnce = useRef(false);

  useEffect(() => {
    if (loggedOnce.current) {
      return;
    }

    if (condition) {
      console.warn(message);
      loggedOnce.current = true;
    }
  }, [condition, message]);
};
