import { useState } from "react";
//segunda forma es que updateCount no solomante peude recibir un nuevo
//valor si no que tambien puede recibir una función
/*Opcion 1
button
  onClick={(prevCount) => {
    return prevCount + 1;
  }}
>
opción 2 usando Helpers o utils
siempre hay que utlizar el state lo minimo posible
aplicamos un renderizado condicional en el small
*/

const Counter = ({ number }) => {
  console.log("counte render");
  return <h2>{number}</h2>;
};

const App = (props) => {
  const [countValue, updateCount] = useState(0); //mala practica se vuelve loco
  console.log("render");

  const handleClick = () => {
    //updateCount(countValue + 1);
    updateCount((prevCount) => prevCount + 1);
  };
  const handleClickResset = () => {
    updateCount(0);
  };

  const isEven = countValue % 2 === 0;
  const messageEven = isEven ? "es par" : "no es par";
  return (
    <>
      <h1>Hello bootcamp class 3 </h1>
      <Counter number={countValue} />
      <small>{messageEven}</small>
      <button onClick={handleClick}>Incrementar</button>
      <button onClick={handleClickResset}>Reset</button>
    </>
  );
};

export default App;
