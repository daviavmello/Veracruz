import React from 'react'
import { Minus, Plus } from 'react-feather'
import {
	Card,
	Box,
	Image,
	Stack,
	Heading,
	Container,
	FieldStack,
	OptionButtons,
	Button,
	Columns,
	Group,
  Flex,
  Paragraph,
} from 'bumbag'

import useCart from 'store/cart'

const Item = ({ id, color, gender, size, count }) => {
	return(
		<div>{id}</div>
	)
}

const Cart = () => {
	const cart = useCart(x => x.cart)

	const flattenedCart = Object.entries(cart).map(([key, v]) => ({ key, ...v }))

	return (
		<Container padding='4rem 1rem'>
			<Stack spacing='major-4'>
				<Heading use='h1'>Carrinho</Heading>
				{flattenedCart.map(({ key, ...rest }) => (
					<Item key={key} {...rest} />
				))}
			</Stack>
		</Container>
	)
}

export default Cart
