const Increment = (props) => {
  return (
    <button
      onClick={() => {
        console.log("J'ai cliqué sur le +");
        props.setCounter(props.counter + 1);
        {
          props.counter > 10 && <button>+</button>;
        }
      }}
    >
      +
    </button>
  );
};
export default Increment;
