const pokemonContainer = document.querySelector("#row-pokemons");

// vamos a crear una funcion para obtener los datos
const obtenerPokemones = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
  const data = await response.json();

  console.log(data.results);
  setPokemonsInView(data.results);
};

// vamos a crear a una funcion la cual se encargue de poder pintar nuestros pokemones
const setPokemonsInView = (results) => {
  const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/";

  results.map(async (result, index) => {
    // Por cada iteracion crea la variable html con el contendi de div que ocupa el
    // 25% porque usa col-md-3
    // dentro creo otro con la clase card y dentro del creo al card-body

    // cuando index = 0 + 1
    // index = 1 + 1
    // !aca usamos await porque getColorPokemon es una funcion async por
    // !por ende no se cuanto demore en reponder
    const bgColor = await getColorPokemon(index + 1);

    const html = `
       <div class="col-md-3 mt-3">
         <div class='card' style='background-color: ${bgColor};'>
           <img 
             class='card-img-top mt-2'
             width= auto
             height= auto
             src='${imgUrl}${index + 1}.png'
           >
           <div class='card-body text-center'>
             <h6 class='text-title text-white'>N° ${index + 1}</h6>
             <h4 class='text-title'>${result.name}</h4>
            
           </div>
           <button class='btn btn-primary' onclick='obtenerDetallePokemon("${
             result.url
           }")' data-bs-toggle='modal' data-bs-target='#modalPokemon'>ver detalle</button>
          
         </div>
       </div>
     `;
    // despues de crear el html basico concatenamos el html el container
    pokemonContainer.innerHTML += html;
  });
};

const pokemonModal = document.querySelector("#modalPokemon");

const pokemonName = document.querySelector("#pokemon-name");

const pokemonImage = document.querySelector("#image-modal");

const pokemonAbilitie = document.querySelector("#abilities");

const pokemonType = document.querySelector("#type");

// cuando debe ejecutarse?y
const obtenerDetallePokemon = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log("detalle", data);
  pokemonName.innerHTML = data.name;
  pokemonImage.src = data.sprites.other.home.front_default;
  pokemonAbilitie.innerHTML = data.abilities[0].ability.name;
  pokemonType.innerHTML = data.types[0].type.name;
  console.log(response);
};

// llamamos a la funcion
obtenerPokemones();

const color = {
  red: "RGB(251, 109, 108)",
  green: "RGB(73, 208, 176)",
  blue: "RGB(88, 170, 246)",
  brown: "RGB(178, 115, 108)",
  purple: "#7c538d",
  pink: "#ffc0cb",
  yellow: "RGB(255, 207, 74)",
};

const getColorPokemon = async (id) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );

  const data = await response.json();

  // Problema el color que nos devuelve el API esta feo
  // para poder utilizar un color como alternativa
  // creamos un diccionario de color donde el key sera el color
  // que devuevla nuestro API

  // si data.color.name = red
  // buscar dentro del objeto color por el key
  // como el key es red esto retorna rgba(255, 48, 50, 0.7)
  console.log(data.color.name);
  return color[data.color.name];
  };

 // const bgColor = await tenerColorPokemon(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`);
/*
 pokemonModal();
  const colorcito = {
    red: "RGB(251, 109, 108)",
    green: "RGB(73, 208, 176)",
    blue: "RGB(88, 170, 246)",
    brown: "RGB(178, 115, 108)",
    purple: "#7c538d",
    pink: "#ffc0cb",
    yellow: "RGB(255, 207, 74)",
  };
  const tenerColorPokemon = async (id) => {
    const response = await fetch(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}`
    );
  const data = await response.json();
  console.log(data.colorcito.name);
    return colorcito[data.colorcito.name];
  };
  */

