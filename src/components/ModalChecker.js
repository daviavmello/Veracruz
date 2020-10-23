import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import { ButtonContainerSecondary } from './ButtonSecondary';
import Emoji from './Emoji';

export default class Modal extends Component {
  render() {
    
    return (
      <div>
          <ProductConsumer>
              {(value) => {
                  const {modalChecker, closeModalChecker} = value;
                  const {title} = value.modalProduct;

                  if(!modalChecker) {
                      return null;
                  }
                  else {
                      return (
                      <ModalContainer>
                          <div className="container">
                              <div className="row">
                                  <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center p-0 pt-3">
                                      <h5 className="text-uppercase font-weight-bold px-2">Selecione todos os detalhes acima antes de prosseguir <Emoji symbol="🙃"/></h5>
                                      <h5 className="mt-4">{title}</h5>
                                      <div className="mt-3 mb-4">
                                      <Link to="/details">
                                          <ButtonContainerSecondary onClick={() => closeModalChecker()}>
                                          Continuar
                                          </ButtonContainerSecondary>
                                      </Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </ModalContainer>
                      );
                  } 
              }}
          </ProductConsumer>
      </div>
    )
  }
}

const ModalContainer = styled.div`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.4);
    display: flex !important;
    align-items: center;
    justify-content: center;
    #modal{
        background: var(--secondaryColor);
        border-radius: 1rem;
        box-shadow: 0px 0.2rem 1.3rem rgba(0,0,0,0.1);
    }
`
