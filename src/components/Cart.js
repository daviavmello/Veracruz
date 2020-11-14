import React from 'react'
// import { Minus, Plus } from 'react-feather'
import dictionary from 'utils/dictionary'
import { Divider, Image, Stack, Heading, Container, Badge, Columns, Paragraph } from 'bumbag'

import { products } from 'content'
import useCart from 'store/cart'
import { getTotalPrice, getCartList } from 'utils/cart'

import PayPal from './PayPal'

export const Item = ({ id, title, color, gender, size, count }) => {
	const { images, price } = products.find(x => x.id === id)

	return (
		<Container>
			<Columns>
				<Columns.Column spreadTablet={9} spreadMobile={9} spread={9} display='flex'>
					<Stack>
						<Badge isAttached>{count}</Badge>
						{images?.default && (
							<Image
								src={color === 'BLACK' ? `/img/${images.color.black}` : `/img/${images.color.white}`}
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
				<Columns.Column spreadTablet={3} spreadMobile={3} spread={3}>
					<Paragraph fontWeight='regular' textAlign='end' display='grid'>
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

	const paymentHandler = (details, data) => {
		/** Here you can call your backend API
		 endpoint and update the database */

		console.log(details, data)
	}

	const flattenedCart = Object.entries(cart).map(([key, v]) => ({ key, ...v }))
	const itemsInCart = flattenedCart.map(({ key, count }) => key + '_' + count)
	const countInCart = flattenedCart.map(({ count, ...rest }) => count)
	const idInCart = flattenedCart.map(count => Object.keys(count).map(i => count[i]))

	console.log('itemsInCart: ' + itemsInCart.toLocaleString(), 'cart: ' + JSON.stringify(flattenedCart))
	return (
		<Container padding='4rem 1rem'>
			<Heading use='h1'>Carrinho</Heading>
			{!cartList?.length > 0 && (
				<Columns padding='1rem 0' marginLeft='0'>
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
							<Columns.Column spreadTablet={6} spreadMobile={6} spread={9} marginBottom='1rem'>
								<Paragraph fontWeight='semibold' marginBottom='1.3rem'>Frete</Paragraph>
								<Paragraph fontWeight='semibold'>Total</Paragraph>
							</Columns.Column>
							<Columns.Column spreadTablet={6} spreadMobile={6} spread={3}>
								<Paragraph textAlign='end' fontWeight='semibold' textTransform='uppercase' marginBottom='1.3rem'>Grátis</Paragraph>
								<Paragraph textAlign='end' fontWeight='semibold'>
									R$ {totalPrice}
								</Paragraph>
							</Columns.Column>
							<Columns.Column zIndex='0'>
								<PayPal
									total={totalPrice}
									currency={'BRL'}
									onSuccess={paymentHandler}
									// details={JSON.stringify('itemsInCart')}
									sku={idInCart.toLocaleString()}
									reset={reset}
									name={itemsInCart.toLocaleString()}
									// description={"color here"}
									units={countInCart.toLocaleString()}
									// unitPrice={price.toFixed(2)}
								/>
							</Columns.Column>
						</Columns>
					)}
				</Columns.Column>
			</Columns>
		</Container>
	)
}

export default Cart
