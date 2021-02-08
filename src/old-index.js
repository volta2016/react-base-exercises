import ReactDOM from "react-dom";
import "./styles.css";

import App from "./PropsBase";

const rootElement = document.getElementById("root");
let contador = 0;

const refresh = () => {
  ReactDOM.render(<App initialCounter={contador} />, rootElement);
};

setInterval(() => {
  refresh();
  contador++;
}, 1000);
