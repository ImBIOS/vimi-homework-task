import { DependencyList, useCallback, useEffect } from "react";

/** useDebounceEffect is a hook that will delay the execution of an effect. */
function useDebounceEffect(effect: any, deps: DependencyList, delay = 250) {
  const callback = useCallback(effect, deps);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
}

export default useDebounceEffect;
