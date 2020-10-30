import React from 'react'
import { Minus, Plus } from 'react-feather'
import dictionary from 'utils/dictionary'
import {
	Card,
	Divider,
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

import { products } from 'content'
import useCart from 'store/cart'
import { getTotalPrice, getCartList } from 'utils/cart'

console.log({ getTotalPrice })

const Item = ({ title, color, gender, size, count }) => {
	const cart = useCart(s => s.cart)
	const cartList = getCartList(cart)
	const totalPrice = getTotalPrice(cartList).toFixed(2)
	return (
		<Container>
			<Columns>
				<Columns.Column spread={9}>
					{/* {images?.default && (
						<div style={{ position: 'relative' }}>
							<Image src={`/img/${images.default}`} />
						</div>
					)} */}
					<Paragraph fontWeight='semibold' paddingRight='0'>
						{title}
					</Paragraph>
				</Columns.Column>
				<Columns.Column spread={3}>
					<Paragraph fontWeight='semibold'>R${totalPrice}</Paragraph>
				</Columns.Column>
				<Columns.Column paddingTop='0' paddingBottom='1rem'>
					<Paragraph fontSize='100' color='grey'>
						{dictionary.colors[color] || color} {' / '} {dictionary.genders[gender] || gender} {' / '}{' '}
						{dictionary.sizes[size] || size}
					</Paragraph>
				</Columns.Column>
			</Columns>
				<Divider margin='0' />
		</Container>
	)
}

const Cart = () => {
	const cart = useCart(x => x.cart)

	const flattenedCart = Object.entries(cart).map(([key, v]) => ({ key, ...v }))

	return (
		<Container padding='4rem 1rem'>
			<Columns>
				<Columns.Column spread={4}>
					<Stack spacing='major-4'>
						<Heading use='h1'>Carrinho</Heading>
						{flattenedCart.map(({ key, ...rest }) => (
							<Item key={key} {...rest} />
						))}
					</Stack>
				</Columns.Column>
			</Columns>
		</Container>
	)
}

export default Cart
