import React from 'react'
// import { Minus, Plus } from 'react-feather'
import dictionary from 'utils/dictionary'
import { Divider, Image, Stack, Heading, Container, Badge, Columns, Paragraph } from 'bumbag'

import { products } from 'content'
import useCart from 'store/cart'
import { getTotalPrice, getCartList } from 'utils/cart'

import PayPalButton from './PayPalButton'

const Item = ({ id, title, color, gender, size, count }) => {
	const { images, price } = products.find(x => x.id === id)

	return (
		<Container>
			<Columns>
				<Columns.Column spreadTablet={9} spreadWidescreen={9} spread={9} display='flex'>
					<Stack>
						<Badge isAttached>{count}</Badge>
						{images?.default && (
							<Image
								src={`/img/${images.default}`}
								borderRadius='default'
								style={{ height: '3rem', width: 'auto' }}
							></Image>
						)}
					</Stack>
					<Stack paddingLeft='1rem'>
						{title}
						<Paragraph fontSize='100' color='grey'>
							{dictionary.colors[color] || color} {' / '} {dictionary.genders[gender] || gender} {' / '}{' '}
							{dictionary.sizes[size] || size}
						</Paragraph>
					</Stack>
				</Columns.Column>
				<Columns.Column spreadTablet={3} spreadWidescreen={6} spread={3}>
					<Paragraph fontWeight='regular' display='flex'>
						R$ {price.toFixed(2)}
					</Paragraph>
				</Columns.Column>
			</Columns>
			<Divider margin='0.5rem 0' />
		</Container>
	)
}

const Cart = () => {
	const cart = useCart(x => x.cart)
	const cartList = getCartList(cart)
	const totalPrice = getTotalPrice(cartList).toFixed(2)
	const reset = useCart(s => s.reset)
	const onReset = () => {
		reset()
	}

	const flattenedCart = Object.entries(cart).map(([key, v]) => ({ key, ...v }))
	return (
		<Container padding='4rem 1rem'>
			<Heading use='h1'>Carrinho</Heading>
			{!cartList?.length > 0 && (
				<Columns padding='1rem 0'>
					<Heading use='h4' fontWeight='normal'>
						Ahh não! O seu carrinho (ainda) está vazio!
						<span role='img' aria-label='emojis'>
							&nbsp;🤪 🛒
						</span>
					</Heading>
				</Columns>
			)}
			<Columns>
				<Columns.Column marginY='2rem' spread={4}>
					<Stack spacing='major-4'>
						{flattenedCart.map(({ key, ...rest }) => (
							<Item key={key} {...rest} />
						))}
					</Stack>
					{cartList?.length > 0 && (
						<Columns padding='1rem 0'>
							<Columns.Column spreadTablet={9} spreadWidescreen={9} spread={9}>
								<Paragraph fontWeight='semibold'>Total</Paragraph>
							</Columns.Column>
							<Columns.Column spreadTablet={3} spreadWidescreen={9} spread={3}>
								<Paragraph fontWeight='semibold'>R$ {totalPrice}</Paragraph>
							</Columns.Column>
							<Columns.Column spread={8}>
								<PayPalButton total={totalPrice} onClick={onReset} />
							</Columns.Column>
						</Columns>
					)}
				</Columns.Column>
			</Columns>
		</Container>
	)
}

export default Cart
