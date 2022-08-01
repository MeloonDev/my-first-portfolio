import React from "react";

import "./AnimatedLetters.scss";

function AnimatedLetters({ letterClass, lettersArray, index }) {
  return (
    <span>
      {lettersArray.map((char, i) => {
        return (
          <span key={char + i} className={`${letterClass} _${i + index}`}>
            {char}
          </span>
        );
      })}
    </span>
  );
}

export default AnimatedLetters;
