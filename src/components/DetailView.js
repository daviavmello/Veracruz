import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Minus, Plus } from 'react-feather'
import { Link } from 'react-router-dom'
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

import { products } from 'content'
import dictionary from 'utils/dictionary'
import { getItemCount, addToCart, subtractFromCart } from 'utils/cart'
import useCart from 'store/cart'

import NotFoundPage from 'components/NotFoundPage'
// import Cart from './Cart'

const Product = ({
	id,
	title,
	colors,
	genders,
	images,
	info,
	description,
	sizes,
	price,
	onAddToCart,
	onSubtractFromCart,
	getCount,
}) => {
	const [color, setColor] = useState(colors?.[0])
	const [gender, setGender] = useState(genders?.[0])
	const [size, setSize] = useState(sizes?.[0])

	// const actualInventory 

	const handleAddToCart = e => {
		e.preventDefault()
		onAddToCart({ id, title, color, gender, size })
	}

	const handleSubtractFromCart = e => {
		e.preventDefault()
		onSubtractFromCart({ id, title, color, gender, size })
	}

	const count = getCount({ id, title, color, gender, size })

	return (
		<Columns>
			<Columns.Column spreadMobile={12} spreadTablet={12} spread={6}>
				<Card variant='bordered' as='article' padding='0'>
					{(
						<div style={{ position: 'relative' }}>
							<Image src={`/img/${images.color[color.toLowerCase()]}`} />
						</div>
					)}
				</Card>
			</Columns.Column>
			<Columns.Column spreadMobile={12} spreadTablet={12} spread={6}>
				{title && <Heading use='h1'>{title}</Heading>}
				{description && (
					<Heading as='h2' use='h4' fontWeight='semibold'>
						{description}
					</Heading>
				)}
				{info && <Paragraph paddingY='2rem'>{info}</Paragraph>}
				<Box paddingY='1rem' marginBottom='4rem'>
					<form>
						<FieldStack>
							{colors?.length > 1 && (
								<OptionButtons
									isFullWidth
									name={id + '_color'}
									size='small'
									type='radio'
									value={color}
									onChange={setColor}
									options={colors.map(value => ({ value, label: dictionary.colors[value] || value }))}
								/>
							)}
							{genders?.length > 1 && (
								<OptionButtons
									isFullWidth
									name={id + '_gender'}
									size='small'
									type='radio'
									value={gender}
									onChange={setGender}
									options={genders.map(value => ({ value, label: dictionary.genders[value] || value }))}
								/>
							)}
							{sizes?.length > 1 && (
								<OptionButtons
									isFullWidth
									name={id + '_size'}
									size='small'
									type='radio'
									value={size}
									onChange={setSize}
									options={sizes.map(value => ({ value, label: dictionary.sizes[value] || value }))}
								/>
							)}
							<Columns.Column spread={6} display='flex'>
								<Stack orientation='horizontal'>
									<Group>
										<Button size='small' onClick={handleSubtractFromCart} disabled={!count}>
											<Minus size={16} />
										</Button>
										<Button size='small' disabled>
											{count}
										</Button>
										<Button size='small' onClick={handleAddToCart}>
											<Plus size={16} />
										</Button>
									</Group>
								</Stack>
							</Columns.Column>
							<Columns.Column spread={6} display='flex'>
								<Flex alignItems='center'>
									<Paragraph fontWeight='semibold' margin='0'>
										R$ {price.toFixed(2)}
									</Paragraph>
								</Flex>
							</Columns.Column>
							<Button use={Link} to='/cart' color='primary'>
								&nbsp; Conferir Carrinho
							</Button>
						</FieldStack>
					</form>
				</Box>
			</Columns.Column>
		</Columns>
	)
}

const ProductView = ({ id }) => {
	const actualProduct = products.find(x => x.id === id)
	const cart = useCart(x => x.cart)
	const setCart = useCart(x => x.setCart)

	const getCount = getItemCount(cart)
	const onAddToCart = addToCart(cart, setCart)
	const onSubtractFromCart = subtractFromCart(cart, setCart)

	return (
		<Container padding='4rem 1rem'>
			<Product
				{...actualProduct}
				onAddToCart={onAddToCart}
				onSubtractFromCart={onSubtractFromCart}
				getCount={getCount}
			/>
		</Container>
	)
}

const DetailView = () => {
	const { id } = useParams()
	// return <pre>{JSON.stringify({p: ), id})}</pre>
	if (!products.some(x => x.id === id)) return <NotFoundPage />
	return <ProductView id={id} />
}

export default DetailView
