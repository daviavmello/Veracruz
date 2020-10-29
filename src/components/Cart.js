import React from 'react'
import { Minus, Plus } from 'react-feather'
import dictionary from 'utils/dictionary'
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

const Item = ({ title, color, gender, size, count }) => {
	return (
		<Card>
			<Paragraph fontWeight='semibold'>{title}</Paragraph>
			<Paragraph fontSize='100' color='grey'>
			{dictionary.colors[color] || color} {' / '} {dictionary.genders[gender] || gender} {' / '} {dictionary.sizes[size] || size}
			</Paragraph>
		</Card>
	)
}

const Cart = () => {
	const cart = useCart(x => x.cart)

	const flattenedCart = Object.entries(cart).map(([key, v]) => ({ key, ...v }))

	return (
		<Container padding='4rem 1rem'>
			<Columns>
				<Columns.Column spread={3}>
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
