async function getApi(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const json = await response.json();

  return json;
}

export default getApi;
