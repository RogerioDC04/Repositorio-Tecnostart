import React, { useState, useEffect } from "react";
import axios from 'axios';



function App() {
  const [cartoes, setCartoes] = useState([]);


  useEffect(() => {
    async function fetchCartoes() {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
      setCartoes(data)
    }

    fetchCartoes()
  }, [])


  return (

    <div className="App">
      <header className="App-header">
        <h1>CARTOES DE VISITA</h1>
        <p>{situaçao}</p>
      </header>

      <main>
        <ul>
          {cartoes.map((cartao) => (
            <li key={cartao.id}>
              <h2>{cartao.name}</h2>
              <p>{cartao.phone}</p>
              <p>{cartao.email}</p>
            </li>
          ))}
        </ul>
        <span>{cartoes.length === 0 && "semacartoes"}</span>

      </main>
    </div>

  );
}


export default App;