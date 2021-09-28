import React, { useState, useEffect } from "react";
import Modal from 'react-modal';
import axios from "axios";

function CartaoVisitaDetalhe({ id }) {
  const [cartao, setCartao] = useState({});
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    async function fetchCartao() {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setCartao(data);
    }
    fetchCartao();
    
  }, []);

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)


  return (
    <div>
      <span>{cartao.id}</span>
      <h2>{cartao.name}</h2>
      <p>{cartao.phone}</p>
      <p>{cartao.email}</p>

      <button type="button" onClick={ openModal }>Modal</button>
      
      <Modal isOpen={isOpen} contentLabel="Example Modal"> 
        <button onClick={closeModal}>x</button>
       <img src="https://thispersondoesnotexist.com/image" style={ {width: '100px'}} alt="Imagem Aleatoria" />
      </Modal>

    </div>
  );
}

export default CartaoVisitaDetalhe;