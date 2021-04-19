import "./App.css";
import Card from "./Components/Card";
import getApi from "./Api.js";
import { useState, useEffect } from "react";

function App() {
  const [state, setState] = useState();
  const [img, setImg] = useState();
  const [name, setName] = useState();
  const [id, setId] = useState();
  const [type, setType] = useState();

  useEffect(() => {
    const loadAll = async () => {
      try {
        const result = await getApi("arcanine");
        setState(result);
        setImg(result["sprites"]["other"]["official-artwork"].front_default);
        setId(result["id"]);
        setType(result["types"][0]["type"]["name"]);
        setName(result["name"]);

        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    loadAll();
  }, [name]);

  return (
    <div
      className="global"
      style={{
        backgroundImage: "url(/bg.png)",
      }}
    >
      <div className="app">
        <Card avatar={img} name={name} id={id} type={type} />
      </div>
    </div>
  );
}

export default App;
