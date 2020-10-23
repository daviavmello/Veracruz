import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainerSecondary } from './ButtonSecondary';
import { ButtonDetails } from './ButtonDetails';
import { ColorButton } from './ColorButton';
import PropTypes from 'prop-types';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
        const {id, img, price, description, color, gender, genders, info, title, inCart} = value.detailProducts;

        let colorDisabled, genderDisabled = true;
        return (
          <div className="container pb-5">
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted my-5">

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
                
                  <ColorButton key={key} onClick={() => { value.colorHandle(key, item) }} className="button-white" />  : 
                  <ColorButton key={key} onClick={() => { value.colorHandle(key, item) }}  className="button-black" />))}</h6>

                
                <h6>{gender.map((item, key) => (
                  <ButtonDetails key={key} onClick={() => { value.tester(key, item) }}>{item}</ButtonDetails>
                ))}</h6>
                <p className="mt-4 mb-0 lh-3 paragraph"> {info}</p>
                <div>
                  <Link to="/">
                    <ButtonContainerSecondary>&#8592; voltar</ButtonContainerSecondary>
                  </Link>
                  <ButtonContainerSecondary cart
                    disabled={inCart ? true : false} 
                    onClick={() => {
                      value.addToCart(id);
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

Details.propTypes = {
  product: PropTypes.shape({
    color: PropTypes.arrayOf(PropTypes.string),
    gender: PropTypes.arrayOf(PropTypes.string)
  }),

  genders: PropTypes.arrayOf(PropTypes.string)
}
