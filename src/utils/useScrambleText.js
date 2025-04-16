import { useState } from "react";

export const useScrambleText = (originalText, intervalTime = 50, delay = 500) => {
  const [text, setText] = useState(originalText);
  const [isHovering, setIsHovering] = useState(false);

  const handleHover = () => {
    setIsHovering(true);
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let iterations = 0;

    const interval = setInterval(() => {
      setText((prev) =>
        prev
          .split("")
          .map((_, i) =>
            i < iterations
              ? originalText[i]
              : characters[Math.floor(Math.random() * characters.length)]
          )
          .join("")
      );

      if (iterations >= originalText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setText(originalText);
          setIsHovering(false);
        }, delay);
      }

      iterations += 1 / 3;
    }, intervalTime);
  };

  return { text, isHovering, handleHover };
};
