const Decrement = (props) => {
  return (
    <button
      onClick={() => {
        console.log("J'ai cliqué sur le -");

        props.setCounter(props.counter - 1);
      }}
    >
      -
    </button>
  );
};
export default Decrement;
