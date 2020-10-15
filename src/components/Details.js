import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainerSecondary } from './ButtonSecondary';
import styled from 'styled-components'

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
        const {id, img, price, description, color, info, title, inCart} = value.detailProducts;
        return (
          <div className="container pb-5">
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted my-5">
                {/* <h1>{title}</h1> */}

              </div>
            </div>
            <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
                <img src={img} className="img-fluid" alt="vestuário" />
                </div>
              <div className="col-10 mx-auto col-md-6 my-3">
                <h2 className="font-weight-bold">{title}</h2>
                <h5 className="text-terciary">R$ {price.toFixed(2)}</h5>
                <h6 className="text-muted font-italic">{description}</h6>
                <h6>{color.map((item, key) => ( color[key] === "Branca" ?
                  <span>{" "} <ColorButton className="button-white"></ColorButton></span> : <span>{" "} <ColorButton className="button-black"></ColorButton></span>))}</h6>
                
                <p className="mt-4 mb-0 lh-3 paragraph"> {info}</p>
                <div>
                  <Link to="/">
                    <ButtonContainerSecondary>&#8592; voltar</ButtonContainerSecondary>
                  </Link>
                  <ButtonContainerSecondary cart
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}> 
                    {inCart ? "adicionado ao carrinho!" : "adicionar ao carrinho +"}
                    </ButtonContainerSecondary>
                </div>
              </div>
            </div>
          </div>
        )
        }}
      </ProductConsumer>
    )
  }
}

const ColorButton = styled.button.attrs(props => ({
  className: props.className,
}))`

width: 2.5rem;
height: 2.5rem;
border: 0.19rem solid var(--secondaryColor);
box-shadow: 0 0 0 0.15rem var(--primaryColor);
background: var(--primaryColor);
border-radius: 3rem;
cursor: pointer;
align-content: center;
transition: all 0.5s ease-in-out;
&.button-white {
  background: #fff;
  margin-right: 0.7rem;
} 
// &:hover {
//   background: var(--terciaryColor);
//   color: var(--secondaryColor);
// }
&:focus {
  outline: none;
}
`