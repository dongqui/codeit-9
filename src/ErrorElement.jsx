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
  const isColorInRainbow = RAINBOW_COLORS.includes(color);

  // function checkRainbow() {
  //   const isColorInRainbow = RAINBOW_COLORS.includes(color);
  //   if (isColorInRainbow !== isRainbow) {
  //     setIsRainbow(isColorInRainbow);
  //   }
  // }

  // useEffect(() => {
  //   checkRainbow();
  // }, [color]);

  // checkRainbow();
  return <>{!isColorInRainbow && <p>무지개 색깔이 아닙니다.</p>}</>;
}
