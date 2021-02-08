import { useState } from "react";

const App = (props) => {
  const [countValue, updateCount] = useState(13); //mala practica se vuelve loco

  //const count = useState(5);
  //const countValue = count[0]; //nos devuelve el valor del state
  //const updateCount = count[1]; //nos devuelve un metodo que al ejecutarlo nos actualiza el //valor del state

  /*setInterval(() => {
    updateCount(countValue + 1);
  }, 2000);*/

  return (
    <>
      <h1>Hello bootcamp class 3 </h1>
      <h2>{countValue}</h2>
      <h2>{updateCount}</h2>
    </>
  );
};

export default App;
