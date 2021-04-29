import "./App.css";
import Card from "./Components/Card";
import getApi from "./Api.js";
import { useState, useEffect } from "react";

const tt = Math.random() * 900;

function App() {
  const [state, setState] = useState(null);
  const [img, setImg] = useState(undefined);
  const [name, setName] = useState(undefined);
  const [id, setId] = useState(undefined);
  const [type, setType] = useState(undefined);
  const [test, setTest] = useState(1);

  function typesIcon(ty) {
    let listT = ty.map((r) => r["type"]["name"]);
    setType(listT);
  }

  useEffect(() => {
    const loadAll = async () => {
      try {
        const result = await getApi(Math.floor(tt));
        setState(result);
        setImg(result["sprites"]["other"]["official-artwork"].front_default);
        setId(result["id"]);

        // chamada pra func de pegar os tipos
        typesIcon(result["types"]);

        setName(result["name"]);
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
