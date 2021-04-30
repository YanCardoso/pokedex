import "./App.css";
import Card from "./Components/Card";
import getApi from "./Api.js";
import { useState, useEffect } from "react";

const tt = Math.random() * 899;

function App() {
  const [state, setState] = useState(null);
  const [img, setImg] = useState(undefined);
  const [name, setName] = useState(undefined);
  const [id, setId] = useState(undefined);
  const [type, setType] = useState(undefined);
  const [status, setStatus] = useState(undefined);

  //função de pegar tipos e transformar em um array
  function typesIcon(ty) {
    let listT = ty.map(r => r["type"]["name"]);
    setType(listT);
  }

  function getStatus(st) {
    let listStatus = st.map(r => r["base_stat"]);
    console.log(listStatus);
    setStatus(listStatus)
  }

  useEffect(() => {
    const loadAll = async () => {
      try {
        const result = await getApi(Math.floor(tt));
        setState(result);
        setImg(result["sprites"]["other"]["official-artwork"].front_default);
        setId(result["id"]);
        console.log(result);
        // chamada pra func de pegar os tipos
        typesIcon(result["types"]);

        getStatus(result["stats"])

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
        <Card avatar={img} name={name} id={id} type={type} status={status} />
      </div>
    </div>
  );
}

export default App;
