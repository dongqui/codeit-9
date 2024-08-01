import { useEffect, useState } from "react";

const Rainbow = (props) => {
  const [msg, setMsg] = useState("");

  const RAINBOW_COLOR = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "navy",
    "purple",
  ];

  useEffect(() => {
    if (RAINBOW_COLOR.includes(props.color)) {
      setMsg("무지개색깔이 맞습니다.");
    } else {
      setMsg("무지개색깔이 아닙니다.");
    }
  }, [props])

  return (
    <p>{msg}</p>
  )
}

export default Rainbow;