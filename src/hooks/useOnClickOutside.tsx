import { BaseSyntheticEvent, useEffect } from 'react';


export default function useOnClickOutside(
  ref: 
  React.RefObject<HTMLDivElement>,
  // | React.RefObject<HTMLLIElement>, 
  handler: any) {//TODO: Part of the modal typesafing task
  useEffect(
    () => {
      const listener = (event: BaseSyntheticEvent | TouchEvent | MouseEvent) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        console.log(ref)
        handler(event);
      };
      
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    [ref, handler]
  );
}