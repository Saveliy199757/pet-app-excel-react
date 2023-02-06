import { useEffect, useRef } from "react";

interface IProps {
  type: string;
  handler: (event: Event) => void;
  options?: object;
}

function WindowEvent({ type, handler, options }: IProps) {
  const ref = useRef(handler);
  ref.current = handler;

  useEffect(() => {
    const fn = (arg: Event) => ref.current(arg);
    window.addEventListener(type, fn, options);
    return () => {
      window.removeEventListener(type, fn, options);
    };
  }, [type, ref, options]);

  return null;
}
