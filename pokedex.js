
const url = `https://pokeapi.co/api/v2/pokemon/`;

const getPokemon = async(name) => {
  try {
  const res = await fetch(url + name);
  const data = await res.json();
  console.log(data);
  renderPokemon(data);
  } catch (err) {
    document.querySelector(`h3`).innerHTML = `Pok&eacute;mon fled!`
  }
}
const renderPokemon = (data) => {
  document.querySelector(`h3`).innerText = ``;
  const table = document.querySelector(`#data-row`);
  const nameData = `<td>${data.name}</td><td>${data.id}</td>`
  table.innerHTML = nameData;
}
document.querySelector(`button`).addEventListener(`click`, (e) => {
  e.preventDefault();
  const pokemon = document.querySelector(`input`).value;
  getPokemon(pokemon.toLowerCase());
});
getPokemon(1);