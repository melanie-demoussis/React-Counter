const Reset = (props) => {
  return (
    <button
      onClick={() => {
        console.log("J'ai cliqué sur le reset");
        props.setCounter(0);
      }}
    >
      Reset
    </button>
  );
};
export default Reset;
