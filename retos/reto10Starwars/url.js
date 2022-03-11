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
    <div class="card-group col-md-3 mt-3">
        <div class='card'>
            <div class='card-body text-center row p-1'>
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
              <div class="container-fluid-img text-center mh-100%" >
                <img 
                class=" d-inline-block" style="width: 100px; height: 130px ;  background-color: rgba(0,0,255,.1)"
                alt=''             
                src='${actor.imageFromAPI}'
              </div>
                
            </div>   
            <div class="my-auto d-grid gap-2 d-md-block mt">                            
                <button type="button" class='btn btn-success btn-sm ' onclick='obtenerDetallePlaneta("${actor.homeworld}")'
                data-bs-toggle='modal'
                data-bs-target='#modalStarWars'>Planeta</button>
            
                <button type="button" class='btn btn-warning btn-sm' onclick='obtenerDetalleVehiculo("${actor.vehicles[0]}")'
                data-bs-toggle='modal'
                data-bs-target='#modalStarWarsVehiculo'>Vehiculo</button>

                <button type="button" class='btn btn-primary btn-sm' onclick='obtenerDetalleNave("${actor.starships[0]}")'
                data-bs-toggle='modal'
                data-bs-target='#modalStarWarsNave'>Nave</button>
            </div>          
                   
        </div>
    </div>`;
    starwarContainer.innerHTML += html;
  });
};

const modalStarWars = document.querySelector("#modalStarWars");

const planetaStarWars = document.querySelector("#homeworldSW");
const climaStarWars = document.querySelector("#climateSW");
const terrenoStarWars = document.querySelector("#terrainSW");
const populacionStarWars = document.querySelector("#populationSW");

const obtenerDetallePlaneta = async (homeworld) => {
  const response = await fetch(homeworld);
  const data = await response.json();
  console.log("detalle", data);

  planetaStarWars.innerHTML = data.name;
  climaStarWars.innerHTML = data.climate;
  terrenoStarWars.innerHTML = data.terrain;
  populacionStarWars.innerHTML = data.population;
  console.log(response);
};

const modalStarWarsVehiculo = document.querySelector("#modalStarWarsVehiculo");

const vehiculoStarWars = document.querySelector("#vehiclesSW");
const modeloStarWars = document.querySelector("#modelSW");
const manufacturaStarWars = document.querySelector("#manufacturerSW");
const tripulacionStarWars = document.querySelector("#crewSW");

const obtenerDetalleVehiculo = async (vehicles) => {
  const response = await fetch(vehicles);
  const data = await response.json();
  console.log("detalle", data);

  vehiculoStarWars.innerHTML = data.name;
  modeloStarWars.innerHTML = data.model;
  manufacturaStarWars.innerHTML = data.manufacturer;
  tripulacionStarWars.innerHTML = data.crew;

  console.log(response);
};

const modalStarWarsNave = document.querySelector("#modalStarWarsNave");

const naveStarWars = document.querySelector("#starshipsSW");
const modeloNaveStarWars = document.querySelector("#modelNaveSW");
const tripulacionNaveStarWars = document.querySelector("#crewNaveSW");
const starship_classStarWars = document.querySelector("#starship_classSW");

const obtenerDetalleNave = async (starships) => {
  const response = await fetch(starships);
  const data = await response.json();
  console.log("detalle", data);

  naveStarWars.innerHTML = data.name;
  modeloNaveStarWars.innerHTML = data.model;
  tripulacionNaveStarWars.innerHTML = data.crew;
  starship_classStarWars.innerHTML = data.starship_class;

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
