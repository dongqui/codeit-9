import React, { useEffect, useState } from "react";

const RAINBOW_COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "navy",
  "purple",
];

export default function ErrorElement({ color }) {
  const [isRainbow, setIsRainbow] = useState(false);

  function checkRainbow() {
    if (RAINBOW_COLORS.includes(color)) {
      setIsRainbow(true);
    } else {
      setIsRainbow(false);
    }
  }

  useEffect(() => {
    checkRainbow();
  }, [color]);

  return <>{!isRainbow && <p>무지개 색깔이 아닙니다.</p>}</>;
}
