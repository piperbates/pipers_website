import { BaseSyntheticEvent, useEffect } from 'react';

// Ideally I'd like to have just one useOnClickOutside hook but this is a temporary solution until I come up with a better one

export default function useOnClickOutsideModal(
  ref: React.RefObject<HTMLDivElement>,
  handler: any) { //TODO: Part of the modal type safing task
    
  useEffect(
    () => {
      const listener = (event: BaseSyntheticEvent | TouchEvent | MouseEvent) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
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