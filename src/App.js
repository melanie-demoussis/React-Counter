import "./App.css";

//Import de useState//
import { useState } from "react";

//Import des components//
import Decrement from "./components/Decrement";
import Increment from "./components/Increment";
import Reset from "./components/Reset";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <body>
      <header> "bonjour"</header>
      <main>
        <section>
          <div>{counter}</div>

          <Decrement counter={counter} setCounter={setCounter} />

          <Increment counter={counter} setCounter={setCounter} />
          <Reset counter={counter} setCounter={setCounter} />
        </section>
      </main>

      <footer>"au-revoir</footer>
    </body>
  );
}

export default App;
