import { useEffect, useState } from "react";

const sequence = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

export function useKonami() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    let position = 0;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === sequence[position]) {
        position += 1;
        if (position === sequence.length) {
          setEnabled((value) => !value);
          position = 0;
        }
      } else {
        position = 0;
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return enabled;
}
