import { useState } from "react";

const App = (props) => {
  const count = useState(5);
  const countValue = count[0]; //nos devuelve el valor del state
  const updateCount = count[1]; //nos devuelve un metodo que al ejecutarlo nos actualiza el //valor del state
  return (
    <>
      <h1>Hello bootcamp class 3 </h1>
      <h2>{countValue}</h2>
    </>
  );
};

export default App;
