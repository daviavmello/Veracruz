import React from 'react'

export default function CartColumns() {
  return (
    <div className="container-fluid my-4 text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Produtos</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Nome do produto</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Preço</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Quantidade</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Remover</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Total</p>
        </div>
      </div>
    </div>
  );
}
