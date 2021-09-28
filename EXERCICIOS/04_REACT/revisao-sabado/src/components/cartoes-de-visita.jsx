import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";

function CartoesVisita() {
  const [quantidade, setQuantidade] = useState(0);
  const [cartoes, setCartoes] = useState([]);

  useEffect(() => {
    async function fetchCartoes() {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setCartoes(data);
    }
    fetchCartoes();
  }, []);

  useEffect(() => {
    setQuantidade(cartoes.length);
  }, [cartoes]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cartões de Visita ({quantidade})</h1>
      </header>

      <main>
        <ul>
          {cartoes.map((cartao) => (
            <Link key={cartao.id} to={`/cartao-visita/${cartao.id}`}>
              <li>
                <h2>{cartao.name}</h2>
                <p>{cartao.phone}</p>
                <p>{cartao.email}</p>
              </li>
            </Link>
          ))}
        </ul>

        <span>{cartoes.length === 0 && "Sem cartões de visita"}</span>
      </main>
    </div>
  );
}

export default CartoesVisita;