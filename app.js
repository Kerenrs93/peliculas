const inputPelicula = document.querySelector('#pelicula');
const btnBuscar = document.querySelector('#buscar');

const APIKEY = '2edc3a83ae1cf16d560b6f4adf77b80a';


btnBuscar.addEventListener('click', function (event){
    event.preventDefault();
    const pelicula = inputPelicula.value; 
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${pelicula}`;
    fetch(url).then( respuesta => respuesta.json() ).then( datos =>{
        console.log(`Fecha del lanzamiento ${datos.results[10].release_date}`  );
    } )
})
