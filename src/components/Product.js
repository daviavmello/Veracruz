import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';
import Emoji from './Emoji';

export default class Product extends Component {
  render() {
    const {id, title, img, price, inCart} = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-9 col-lg-3 my-3">
        <div className=" h-100">
          <ProductConsumer>
            {value => (
            
            <div className="img-container" onClick={() => 
              value.handleDetail(id)}
              >
            <Link to='/details'>
              <img src={img} alt="Vestuário" className="card-img-top" />
            </Link>
            {/* <button className="cart-btn text-terciary font-weight-bold text-uppercase" disabled={inCart ? true : false} onClick={() => {
                value.addToCart(id);
                value.openModal(id);
              }}
              > */}
              {inCart ? (
              <p className="cart-btn text-terciary font-weight-bold text-uppercase mb-0" disabled> 
              {" "}
              No Carrinho <Emoji symbol="🔥🤘🏼"/>
              </p>
              ) : " "}
            {/* </button> */}
          </div>)}
          
          </ProductConsumer>
          {/* Card Footer */}
          <div className="pb-0 mb-0 card-footer d-flex justify-content-center">
            <h5 className="mb-0">
              {title}
            </h5>
          </div>
            <p className="pt-0 card-footer d-flex justify-content-center">
              R${price.toFixed(2)}
            </p>
        </div>
      </ProductWrapper>
    )
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
    color: PropTypes.arrayOf(PropTypes.string),
    gender: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
}
const ProductWrapper = styled.div`
  .card {
    border: none;
    border-radius: none;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    text-align: center;
  }
  .col-9 {
    padding: 0 !important;
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    background: none;
    border: none;
    color: var(--terciaryColor);
    font-size: 1.2rem;
    transform: translate(0%, 100%);
    transition: all 0.2s ease-in-out;
  }

  .img-container:hover .cart-btn {
      transform: translate(0,0);
    }
`;