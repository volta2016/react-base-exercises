import { useState } from "react";

const App = (props) => {
  const [countValue, updateCount] = useState(13); //mala practica se vuelve loco
  console.log("render");

  return (
    <>
      <h1>Hello bootcamp class 3 </h1>
      <h2>{countValue}</h2>
      <button
        onClick={() => {
          updateCount(countValue + 1);
        }}
      >
        Incrementar
      </button>
    </>
  );
};

export default App;
