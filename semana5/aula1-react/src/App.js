import React from 'react';
import './App.css';

function App() {
  return (
    <div className="grid">
      <header>
        <a>
          <h1>FutureTube</h1>
        </a>
        <input type="search" placeholder="Busca"></input>
      </header>
      <div className="grid-conteudo">
        <nav>
          <ul>
            <li>Inicio</li>
            <li>Em alta</li>
            <li>Inscrições</li>
            <li>Originais</li>
          </ul>
          <ul>
            <li>Biblioteca</li>
            <li>Histórico</li>
          </ul>
        </nav>
        <section>
          <a>
            <article>
              <img src={require("./resources/c-sharp.png")}></img>
              <p>Curso C#</p>
            </article>
          </a>
          <a>
            <article>
              <img src={require("./resources/java.jpg")}></img>
              <p>Curso Java</p>
            </article>
          </a>
          <a>
            <article>
              <img src={require("./resources/js.png")}></img>
              <p>Curso Javascript</p>
            </article>
          </a>
          <a>
            <article>
              <img src={require("./resources/pearl.png")}></img>
              <p>Curso Pearl</p>
            </article>
          </a>
          <a>
            <article>
              <img src={require("./resources/php.jpg")}></img>
              <p>Curso PHP</p>
            </article>
          </a>
          <a>
            <article>
              <img src={require("./resources/python.jpg")}></img>
              <p>Curso Python</p>
            </article>
          </a>
          <a>
            <article>
              <img src={require("./resources/ruby.png")}></img>
              <p>Curso Ruby</p>
            </article>
          </a>
          <a>
            <article>
              <img src={require("./resources/swift.png")}></img>
              <p>Curso Swift</p>
            </article>
          </a>
        </section>
      </div>
      <footer>
        <h2>Oi, eu moro no footer!</h2>
      </footer>
    </div>
  );
}

export default App;
