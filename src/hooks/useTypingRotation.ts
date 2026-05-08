import { useEffect, useState } from "react";

export function useTypingRotation(words: string[], speed = 52, pause = 1400) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index] ?? "";
    const doneTyping = !deleting && text === word;
    const doneDeleting = deleting && text === "";

    const timeout = window.setTimeout(
      () => {
        if (doneTyping) {
          setDeleting(true);
          return;
        }
        if (doneDeleting) {
          setDeleting(false);
          setIndex((current) => (current + 1) % words.length);
          return;
        }
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      },
      doneTyping ? pause : deleting ? speed / 1.7 : speed,
    );

    return () => window.clearTimeout(timeout);
  }, [deleting, index, pause, speed, text, words]);

  return text;
}
