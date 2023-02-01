const Decrement = (props) => {
  return (
    <button
      onClick={() => {
        console.log("J'ai cliqué sur le -");

        props.setCounter(props.counter - 1);

        props.counter < 0 && <button>-</button>;
      }}
    >
      -
    </button>
  );
};
export default Decrement;
