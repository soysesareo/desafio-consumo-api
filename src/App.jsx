import { useEffect, useState } from 'react'
import MiApi from './components/MiApi'
import Buscador from './components/Buscador'
import './App.css'


function App() {
  const [peliculas, setPeliculas] = useState([])
  const [filtro, setFiltro] = useState("");
  
  const filtrarPeliculas = peliculas.filter((pelicula) => pelicula.title.toLowerCase().includes(filtro.toLowerCase()));

  return (
    <div className="container">
      <div className="App">
        <h1>Bienvenido a Guía de Películas</h1>
        <hr className="hr" style={{ color: "peru" }} />
        <p>Todos los meses ofrecemos una selección de los films más destacados del momento, seleccionados por nuestros suscriptores y editores a cargos del sitio.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere perferendis dolore soluta provident enim, dolorem adipisci officia magnam voluptatibus culpa praesentium odio, aliquid iste odit officiis nostrum? Nihil incidunt ducimus fuga fugiat, eos exercitationem cupiditate temporibus unde nulla. Blanditiis dolor laborum magnam ex temporibus repellat veniam. Eos eaque odio magnam?</p>
        <br />
        <div>
          <Buscador
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />
          <br /><br />
        </div>

        <div className="ordenar">
          <button>Ordenar por Título</button>
          <button>Ordenar por Popularidad</button>
          <br /> <br />
        </div>
        
        <h3>Cintas Populares del Mes </h3>
        
        <div>
          <MiApi />
        </div>
        
        <footer className="footer">
          <hr className="hr" style={{ color: "peru" }} />
          <p className="texto">GdP - Todos los derechos reservados - 2023</p>
          <p className="texto"> :: Este sitio web utiliza la API de <a href="https://www.themoviedb.org/" target="_blank">TheMovieDB</a> ::</p>
        </footer>
      </div>
    </div>
  );

}

export default App







