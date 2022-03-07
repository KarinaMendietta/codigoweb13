const starwarContainer = document.querySelector("#row-starwars");

const starWarsName = document.querySelector("#starWars-name");

const obtenerPersonajesStarWars = async () => {
  const response = await fetch("https://swapi.dev/api/people/?limit=10");
  const data = await response.json();
  console.log(data.results);
  setStarWarsInView(data.results);
};

const setStarWarsInView = (results) => {
  results.map((result) => {
    const html = `
    <div class="col-md-3 mt-3">
        <div class='card'>
            <div class='card-body text-center'>
            <h4 class='text-title'>${result.name}</h4>
            </div>
            <button class='btn btn-primary' onclick ='obtenerDetalleStarWars("${result.url}"))'
            data-bs-toggle='modal'
            data-bs-target='#modalStarWars'>ver detalle</button>

        </div>
    </div>`;
    starwarContainer.innerHTML += html;
  });
};
const obtenerDetalleStarWars = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log("detalle",data)
  starWarsName.innerHTML = data.name
};

obtenerDetalleStarWars();
const getImagen = async (imagen) => {
  const response = await fetch ("https://akabab.github.io/starwars-api/api/all.json")
}

obtenerPersonajesStarWars();
