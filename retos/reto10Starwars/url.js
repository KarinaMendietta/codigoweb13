const starwarContainer = document.querySelector("#row-starwars");
const url_starWars = "https://swapi.dev/api/people";
const url_imagen_starWars =
  "https://akabab.github.io/starwars-api/api/all.json";

const getDataFromStarWars = async () => {
  const response = await fetch(url_starWars);
  const data = await response.json();
  await getImageFromStarWars(data.results);
  await setStarWarsInView(data.results);
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

/* const obtenerPersonajesStarWars = async () => {
  const response = await fetch("https://swapi.dev/api/people/?limit=10");
  const data = await response.json();
  console.log(data.results);
  
}; */

const setStarWarsInView = (actor) => {
  actor.map((actor) => {
    const html = `
    <div class="col-md-3 mt-3">
        <div class='card'>
            <div class='card-body text-center row'>
            <h4 class='card-title'>${actor.name}</h4>
                
            <div class='col'>    
                <h6 class='card-text'>Altura</h6>
                <h6 class='card-text'>Masa</h6>
                <h6 class='card-text'>Genero</h6>
            </div>
            <div class='col'>                   
                <h6 class='card-text'>${actor.height} </h6>
                <h6 class='card-text'>${actor.mass}</h6>
                <h6 class='card-text'>${actor.gender}</h6>
            </div>
        
        
            <img 
             class='card-img-top mt-2'
             width= 20
             height= auto
             src='${actor.imageFromAPI}'
           >
           
           
            <button class='btn btn-success' onclick='obtenerDetallePlaneta("${actor.homeworld}")'
            data-bs-toggle='modal'
            data-bs-target='#modalStarWars'>Planeta</button>
            
            <button class='btn btn-warning mt-2' onclick='obtenerDetalleVehiculo("${actor.vehicles}")'
            data-bs-toggle='modal'
            data-bs-target='#modalStarWars'>Vehiculo</button>

            <button class='btn btn-primary mt-2' onclick='obtenerDetalleNave("${actor.starships}")'
            data-bs-toggle='modal'
            data-bs-target='#modalStarWars'>Nave</button>

        </div>
    </div>`;
    starwarContainer.innerHTML += html;
  });
};

const modalStarWars = document.querySelector("#modalStarWars");

const nameStarWars = document.querySelector("#nameSW");

const planetaStarWars = document.querySelector("#homeworldSW");

const vehiculoStarWars = document.querySelector("#vehiclesSW");

const naveStarWars = document.querySelector("#starshipsSW");

const obtenerDetallePlaneta = async (homeworld) => {
  const response = await fetch(homeworld);
  const data = await response.json();
  console.log("detalle", data);

  planetaStarWars.innerHTML = data.name;
  console.log(response);
};

const obtenerDetalleVehiculo = async (vehicles) => {
  const response = await fetch(vehicles);
  const data = await response.json();
  console.log("detalle", data);

  vehiculoStarWars.innerHTML = data.results[0].name;

  console.log(response);
};

const obtenerDetalleNave = async (vehicles) => {
  const response = await fetch(vehicles);
  const data = await response.json();
  console.log("detalle", data);

  vehiculoStarWars.innerHTML = data.results[0].name;

  console.log(response);
};

getDataFromStarWars();
/* nameStarWars.innerHTML = actor.name;*/
/*
const urlvehicles = async () => {
  const response = await fetch ("https://swapi.dev/api/vehicles");
  const data = await response.json();
}

const urlstarships = async () => {
  const response = await fetch ("https://swapi.dev/api/starships");
  const data = await response.json();
}*/
