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
    const isColorInRainbow = RAINBOW_COLORS.includes(color);
    if (isColorInRainbow !== isRainbow) {
      setIsRainbow(isColorInRainbow);
    }
  }

  useEffect(() => {
    checkRainbow();
  }, [color]);

  return <>{!isRainbow && <p>무지개 색깔이 아닙니다.</p>}</>;
}
