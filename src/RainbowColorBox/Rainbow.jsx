const RAINBOW_COLOR = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];

const Rainbow = (props) => {
  // const [msg, setMsg] = useState("");

  // // 이렇게 하면 렌더링이 불필요하게 많아진다.
  // useEffect(() => {
  //   if (RAINBOW_COLOR.includes(props.color)) {
  //     setMsg("무지개색깔이 맞습니다.");
  //   } else {
  //     setMsg("무지개색깔이 아닙니다.");
  //   }
  // }, [props])

  if (RAINBOW_COLOR.includes(props.color)) {
    return <p>무지개색깔이 맞습니다.</p>;
  } else {
    return <p>무지개색깔이 아닙니다.</p>;
  }
};

export default Rainbow;
