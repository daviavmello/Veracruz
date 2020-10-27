import React, { useState } from 'react'
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

import { products } from 'content'
import dictionary from 'utils/dictionary'
import getProductCartKey from 'utils/getProductCartKey'
import useCart from 'store/cart'

const Product = ({ id, title, images, colors, genders, sizes, price, onAddToCart, onSubtractFromCart, getCount }) => {
	const [color, setColor] = useState(colors?.[0])
	const [gender, setGender] = useState(genders?.[0])
	const [size, setSize] = useState(sizes?.[0])

	const handleAddToCart = e => {
		e.preventDefault()
		onAddToCart({ id, color, gender, size })
  }
  
  const handleSubtractFromCart = e => {
		e.preventDefault()
		onSubtractFromCart({ id, color, gender, size })
  }
  
  const count = getCount({ id, color, gender, size })

	return (
		<Card as='article' marginBottom='4rem' overflow='hidden' padding='0'>
			{images?.default && <Image src={`/img/${images.default}`} />}
			<Box padding='1rem'>
				<Heading use='h3'>{title}</Heading>
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
							<Flex alignItems='center' justifyContent='flex-end'>
                <Paragraph fontWeight="bold" margin='0'>
                  R$ {price.toFixed(2)}
                </Paragraph>
              </Flex>
						</Stack>
					</FieldStack>
				</form>
			</Box>
		</Card>
	)
}

const ProductList = () => {
  const cart = useCart(x => x.cart)
  const setCart = useCart(x => x.setCart)

  const getCount = data => {
    const key = getProductCartKey(data)
    return cart?.[key]?.count || 0
  }
  
  const onAddToCart = data => {
    const key = getProductCartKey(data)
    const hasItemOnCart = key in cart
    if (!hasItemOnCart) return setCart({...cart, [key]: {...data, count: 1} })
    const previousCount = cart[key].count
    return setCart({ ...cart, [key]: { ...data, count: previousCount + 1 } })
  }
  
  const onSubtractFromCart = data => {
    const key = getProductCartKey(data)
    const hasItemOnCart = key in cart
    if (!hasItemOnCart) return
    const previousCount = cart[key].count
    const count = previousCount - 1

    const { [key]: item, ...newCart } = cart

    if (count === 0) return setCart(newCart)
    return setCart({ ...cart, [key]: { ...data, count } })
  }

  return (
		<Container padding='4rem 1rem'>
			<Stack spacing='major-4'>
				<Heading use='h1'>Produtos</Heading>
				<Columns>
					{products.map(product => (
						<Columns.Column spreadTablet={6} spreadWidescreen={4} spread={3}>
							<Product {...product} onAddToCart={onAddToCart} onSubtractFromCart={onSubtractFromCart} getCount={getCount} />
						</Columns.Column>
					))}
				</Columns>
			</Stack>
		</Container>
	)
}

export default ProductList