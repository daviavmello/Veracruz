import React, { Component } from 'react'
import {ReactComponent as ReactLogo} from './veracruzLogo.svg';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { IconContainer } from './IconContainer';

export default class Default extends Component {
  render() {
    return (
      <FooterWrapper>
      <div className="container p-5">
        <div className="row">
        <div className="col-lg-4 col-md-4">
        <Link to='/'>
          <ReactLogo style={{width: '6rem'}}></ReactLogo>
        </Link>
        <div className="row col-lg-6 pt-3">
        <IconContainer>
        <i className="fab fa-instagram fa-lg pr-2" onClick={()=> window.open("https://www.instagram.com/useveracruz/", "_blank")} />
        </IconContainer>
        <IconContainer>
        <i className="fab fa-tiktok fa-lg" onClick={()=> window.open("https://www.tiktok.com/@useveracruz", "_blank")} />
        </IconContainer>
        </div>
        </div>
        
        <div className="col-lg-4 col-md-4 nav-elements mt-4 mt-md-0">
          <span>Veracruz Vestuário & Companhia Limitada<br />Conhecereis a verdade e a verdade os libertará.<br />Jesus é o caminho a verdade e a vida</span>
        </div>
        <div className="col-lg-4 col-md-4 nav-elements mt-4 mt-md-0">
          <span>Brasília - DF<br />CNPJ: 28.039.254/0001-32</span>
        </div>
        </div>
      </div>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.footer`
  background: var(--primaryColor);
  .nav-elements {
    font-size: 0.9rem;
    line-height: 2rem;
    color: var(--secondaryColor) !important;
  }  
  `;