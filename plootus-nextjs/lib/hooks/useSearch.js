import { useEffect, useRef, useState } from 'react';

// Custom hook to detect updates, mimicking component did update
const useDidUpdate = (callback, deps) => {
  const hasMount = useRef(false);

  useEffect(() => {
    if (hasMount.current) {
      callback();
    } else {
      hasMount.current = true;
    }
  }, deps);
};

export const useSearch = (
  actionToDispatch,
  deps,
  delay = 1000,
  condition = true
) => {
  const flag = useRef(false);
  const timer = useRef();
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useDidUpdate(() => {
    if (flag.current) {
      clearTimeout(timer.current);
    }
    setLoading(true);

    timer.current = setTimeout(async () => {
      if (condition) {
        try {
          const returnData = await actionToDispatch();
          if (returnData) {
            setData(returnData || null);
          } else {
            setLoading(false);
          }
        } catch (err) {
          setLoading(false);
        }
      }

      flag.current = false;
      setLoading(false); // Also ensure loading is set to false when done
    }, delay);

    flag.current = true;
  }, [deps]);

  return { data, loading, setData, setLoading };
};
