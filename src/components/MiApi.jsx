import React from 'react'
import { useEffect, useState } from 'react'

const MiApi = () => {
  const [peliculas, setPeliculas] = useState([])

  const cargarPeliculas = async () => {
    const respuesta = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=29d91938a7b13426a8311bd4ea437982&language=es-MX");
    const peliculas = await respuesta.json();
    setPeliculas(peliculas.results)
  }

  useEffect(() => {
    cargarPeliculas();
  }, []);

  return (
    <div className="App">
      <div>
        <ul>
          {peliculas.map((pelicula) => (
            <li key={pelicula.id}> Título: {pelicula.title}.
              <br />Popularidad: {pelicula.popularity}.
              <br />Reseña: {pelicula.overview}
              <br /> <br />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};

export default MiApi