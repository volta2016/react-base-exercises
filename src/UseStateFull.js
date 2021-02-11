import { useState } from "react";
/*
Es buena practica los 2 estados por que los esat haciendo
bastante atomico esat seprado en parye pequeñas y entendible
vamos a ver la manera de solo tener un solo estado.
aplicamos el spread operator para no machacar las prppiedaes si no e
expandirla y agregar nuevas.
Que estado dentro del compoenente puedo eliminar que tengo demas?
clicks totales, mientras menos estados tengas mejor
*/

const WarningNotUsed = () => {
  return <span>todavia no ha usado el contador</span>;
};

const ListOfClicks = ({ clicks }) => {
  //console.log({ clicks });
  return <span>{clicks.join(" - ")}</span>;
};

const INITIAL_COUNTER_STATE = {
  left: 2,
  right: 4,
  //clicks: 0 sacar por [clicks, setClicks] ya tenemos el length
  message: "message in the state"
};

const App = (props) => {
  //const [left, setLeft] = useState(0);
  //const [right, setRight] = useState(0);
  const [counters, setCount] = useState(INITIAL_COUNTER_STATE);

  const [clicks, setClicks] = useState([]);

  const handleClickLeft = () => {
    const newCounterState = {
      ...counters,
      left: counters.left + 1,
      clicks: counters.clicks + 1
    };
    setCount(newCounterState);
    setClicks((prevClicks) => [...prevClicks, "L"]);
  };

  const handleClickRight = () => {
    setCount({
      ...counters,
      right: counters.right + 1,
      clicks: counters.clicks + 1
    });
    setClicks((prevClicks) => [...prevClicks, "R"]);
  };

  const handleReset = () => {
    setCount(INITIAL_COUNTER_STATE);
    setClicks([]);
  };

  return (
    <>
      <h1>Hello bootcamp class 3 </h1>
      {counters.left}
      <button onClick={handleClickLeft}>left</button>
      <button onClick={handleClickRight}>right</button>
      {counters.right}
      <p>
        <button onClick={handleReset}>reset</button>
      </p>
      <p>{counters.message}</p>
      <p>
        <b>Total de clicks:</b> {clicks.length}
      </p>
      <p>
        {clicks.length === 0 ? (
          <WarningNotUsed />
        ) : (
          <ListOfClicks clicks={clicks} />
        )}
      </p>
    </>
  );
};

export default App;
