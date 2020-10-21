import React, { Component } from "react";
import { ReactComponent as ReactLogo } from "./veracruzLogo.svg";
import { Link } from "react-router-dom";
import { IconContainer } from "./IconContainer";
import styled from "styled-components";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar px-sm-5">
        <Link to="/">
          <ReactLogo
            className="navbar-brand p-2"
            style={{ width: "7rem" }}
          ></ReactLogo>
        </Link>

        <ul className="nav navbar-right align-items-center">
          <li className="nav-item">
            <Link to="/#shop" className="nav-link">
              Shop
            </Link>
          </li>

          <Link to="/cart">
            <IconContainer>
              <span>
                <i className="fas fa-cart-plus" />
              </span>
            </IconContainer>
          </Link>
        </ul>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--primaryColor);
  .nav-link {
    font-size: 1rem;
    text-transform: uppercase;
    color: var(--secondaryColor) !important;
  }
`;