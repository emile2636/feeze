import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';

export const useInterval = (callback, delay = null) => {
  const savedCallback = useRef(callback);

  useLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }

    const id = setInterval(() => savedCallback.current(), delay);
    return () => {
      clearInterval(id);
    };
  }, [delay]);
};

export default useInterval;
