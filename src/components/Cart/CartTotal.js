import React from 'react'
import {Link} from 'react-router-dom'

export default function CartTotal({value}) {
  const{ cartTotal, clearCart } = value;
  return (
    <React.Fragment>
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                <Link to="/">
                    <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={() => clearCart()}>cancelar compras</button>
                </Link>
                <h5>
                    <span className="text-title">total: <strong>R$ {cartTotal.toFixed(2)}</strong>

                    </span>
                </h5>
                </div>
            </div>

        </div>
    </React.Fragment>
  );
}
