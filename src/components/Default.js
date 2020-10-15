import React, { Component } from 'react'

export default class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-upeprcase pt-5">
          <h3>Ahh não! Página não encontrada.</h3>
          <h5>A página que você requisitou <span className="text-danger">{this.props.location.pathname}</span>{" "} não foi encontrada.</h5>
          </div>
        </div>
      </div>
    )
  }
}