import React from 'react'

export default function CartItem({ item, value }) {
  const {id, title, img, price, gender, total, count} = item;
  const {increment, decrement, removeItem} = value; 
  
  return (
    <div className="row my-3 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
            <img src={img} style={{ width: "5rem", height: "5rem" }} className="img-fluid" alt="product" />
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">Produto: </span> {title} {gender} {console.log(gender)}
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">Preço: </span> {price.toFixed(2)}
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
            <div className="d-flex justify-content-center">
                <span className="btn btn-black mx-1" onClick={() => decrement(id)}>&#8722;</span>
                <span className="btn btn-black mx-1">{count}</span>
                <span className="btn btn-black mx-1" onClick={() => increment(id)}>&#43;</span>
            </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <div className="cart-icon" onClick={() => removeItem(id)}>
                <i className="fas fa-trash"></i>
            </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <strong>R$ {total.toFixed(2)}</strong>
        </div>
    </div>
  );
}