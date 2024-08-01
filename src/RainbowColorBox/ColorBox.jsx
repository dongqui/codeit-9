import { useState } from "react";

export default function ColorBox({ color }) {
  const [otherColor, setOtherColor] = useState("white");

  return (
    <div
      style={{
        backgroundColor: setOtherColor(color),
        height: "200px",
        width: "200px",
        border: "2px dashed black",
      }}
    />
  );
}
