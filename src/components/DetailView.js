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

const Product = ({ id, title, colors, genders, sizes, price, onAddToCart, onSubtractFromCart, getCount }) => {
	const [color, setColor] = useState(colors?.[0])
	const [gender, setGender] = useState(genders?.[0])
	const [size, setSize] = useState(sizes?.[0])

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
					<Stack orientation='horizontal'>
						<Group spread={6}>
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
						<Flex alignItems='center' justifyContent='flex-end'>
							<Paragraph fontWeight='semibold' margin='0'>
								R$ {price.toFixed(2)}
							</Paragraph>
						</Flex>
					</Stack>
				</FieldStack>
			</form>
		</Box>
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
			<Columns>
				<Columns.Column spreadTablet={12} spreadWidescreen={6} spread={6}>
					<Stack>
						<Card variant='bordered' as='article' padding='0'>
						{actualProduct.images?.default && (
							<div style={{ position: 'relative' }}>
								<Image src={`/img/${actualProduct.images.default}`} />
							</div>
						)}
						</Card>
					</Stack>
				</Columns.Column>
				<Columns.Column spreadTablet={12} spreadWidescreen={6} spread={6}>
					{actualProduct.title && <Heading use='h1'>{actualProduct.title}</Heading>}
					{actualProduct.description && (
						<Heading as='h2' use='h4' fontWeight='semibold'>
							{actualProduct.description}
						</Heading>
					)}
					{actualProduct.info && <Paragraph paddingY='2rem'>{actualProduct.info}</Paragraph>}
					<Product
						{...actualProduct}
						onAddToCart={onAddToCart}
						onSubtractFromCart={onSubtractFromCart}
						getCount={getCount}
					/>
					<Button use={Link} to='/cart' color='primary'>
						&nbsp; Conferir Carrinho
					</Button>
				</Columns.Column>
			</Columns>
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
