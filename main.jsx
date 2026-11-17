
 
  import { createRoot } from "react-dom/client";
  import { useState } from "react";

  const Increament = () =>{
    const [counter, setCounter] = useState(0);
      return(
      <div>

        <h1 id="display">{counter}</h1>
      <div>
        <button id="button" onClick={() => setCounter(counter + 1)}>increament +</button>
      </div>
      </div>
      );
  };

 createRoot(document.getElementById("root")).
 render(
 <div className="cont">
  <Increament />
  <Increament />
  <Increament />
  </div>);