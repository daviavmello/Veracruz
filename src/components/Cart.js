import React from 'react'

import useCart from 'store/cart'

const Cart = () => {
	const cart = useCart(x => x.cart)
	return (
		<>
			<h1>Cart</h1>
			<pre>{JSON.stringify(cart, null, 2)}</pre>
		</>
	)
}

export default Cart
