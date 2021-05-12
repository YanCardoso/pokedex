import "./App.css";
import Card from "./Components/Card";
import getApi from "./Api.js";
import { useState, useEffect } from "react";
import SearchBar from "./Components/SearchBar";

// const tt = Math.random() * 899;
// Math.floor(tt)

function App() {
  const [search, setSearch] = useState("1");
  const [img, setImg] = useState(undefined);
  const [name, setName] = useState(undefined);
  const [id, setId] = useState(undefined);
  const [type, setType] = useState(undefined);
  const [status, setStatus] = useState(undefined);

  //função de pegar tipos
  function typesIcon(ty) {
    let listT = ty.map((r) => r["type"]["name"]);
    setType(listT);
  }
  //função de pegar os status
  function getStatus(st) {
    let listStatus = st.map((r) => r["base_stat"]);
    setStatus(listStatus);
  }

  function getSearchInput(pokemon) {
    setSearch(pokemon)
  }


  useEffect(() => {
    const loadAll = async () => {
      try {
        const result = await getApi(search);
        setImg(result["sprites"]["other"]["official-artwork"].front_default);
        setId(result["id"]);
        console.log(result);
        // chamada para func de pegar os tipos
        typesIcon(result["types"]);
        //chamada para pegar stats
        getStatus(result["stats"]);

        setName(result["name"]);
      } catch (error) {
        console.error(error);
      }
    };

    loadAll();
  }, [search]);

  return (
    <div
      className="global"
      style={{
        backgroundImage: "url(/bg.png)",
      }}
    >
      <div className="app">
        <SearchBar search={(poke) => {getSearchInput(poke)}}/>
        <Card avatar={img} name={name} id={id} type={type} status={status} />
      </div>
    </div>
  );
}

export default App;
