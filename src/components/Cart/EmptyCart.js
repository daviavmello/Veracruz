import React from 'react'
import Emoji from '../Emoji';

export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
          <div className="col-10 mx-auto mb-5 text-center text-title">
            <h1>Ei! Seu carrinho ainda está vazio! <Emoji symbol="🥵✨"/></h1>
          </div>
      </div>
    </div>
  );
}
