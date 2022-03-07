const starwarContainer = document.querySelector("#row-starwars");
const url_starWars = "https://swapi.dev/api/people";
const url_imagen_starWars = "https://akabab.github.io/starwars-api/api/all.json";

const getDataFromStarWars = async () => {
  const response = await fetch(url_starWars);
  const data = await response.json();
  await getImageFromStarWars(data.results);
};

const getImageFromStarWars = async (actors) => {
  const response = await fetch(url_imagen_starWars);
  const imagenes = await response.json();

  actors.map((actor) => {
    // la idea es que por cada iteracion se pueda extraer la foto del API de ULR_SW_IMAGES
    const resultado = imagenes.filter((imagen) => imagen.name === actor.name);
    actor.imageFromAPI = resultado[0].image;
  });

  console.log(actors);
 
};

getDataFromStarWars();



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
            <button class='btn btn-primary' 
            data-bs-toggle='modal'
            data-bs-target='#modalPokemon'>ver detalle</button>

        </div>
    </div>`;
    starwarContainer.innerHTML += html;
  });
};

obtenerPersonajesStarWars();