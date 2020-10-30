import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Container, Stack, Text, Divider, Button, Flex, Badge, Drawer, Menu, Heading, Set } from 'bumbag'
import { ShoppingCart, Trash2, ExternalLink, DollarSign, X } from 'react-feather'

import { products } from 'content'
import useCart from 'store/cart'
import { getTotalCount, getCartList, getTotalPrice } from 'utils/cart'
import dictionary from 'utils/dictionary'
import Logo from 'components/Logo.js'

const Item = ({ id, count, variants }) => {
	const { title, price } = products.find(x => x.id === id)
	return (
		<Box paddingX='1rem' marginBottom='4rem'>
			<Stack spacing='minor-2'>
				<Set alignItems='center' justifyContent='space-between'>
					<Text fontSize={600} fontWeight='semibold'>
						{title}
					</Text>
					<Badge>{count}</Badge>
				</Set>
				<Box>
					<table style={{ width: '100%' }}>
						<tbody>
							{variants.map(({ count, color, gender, size }) => (
								<tr>
									{color && (
										<td>
											<Text fontSize='100'>{dictionary.colors[color] || color}</Text>
										</td>
									)}
									{gender && (
										<td>
											<Text fontSize='100'>{dictionary.genders[gender] || gender}</Text>
										</td>
									)}
									{size && (
										<td>
											<Text fontSize='100'>{dictionary.sizes[size] || size}</Text>
										</td>
									)}
									<td style={{ textAlign: 'right' }}>
										<Text marginX='0.25rem' fontSize='100' fontWeight='semibold'>
											{count}
										</Text>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</Box>
				<Divider />
				<Box>
					<Text fontSize='100' textAlign='right' display='block'>
						<span>
							{count} × R$ {price.toFixed(2)} = &nbsp;
						</span>
						<Badge fontWeight='semibold'>R$ {(count * price).toFixed(2)}</Badge>
					</Text>
				</Box>
				<Divider />
			</Stack>
		</Box>
	)
}

const FloatingCart = () => {
	const drawer = Drawer.useState({ animated: true })
	const cart = useCart(s => s.cart)
	const reset = useCart(s => s.reset)

	const totalCount = getTotalCount(cart)
	const cartList = getCartList(cart)
	const totalPrice = getTotalPrice(cartList).toFixed(2)

	const onReset = () => {
		reset()
		drawer.hide()
	}

	return (
		<Flex>
			<Drawer.Disclosure {...drawer}>
				<Button size='small' color='white' backgroundColor='primary' border='none'>
					{!!totalCount && (
						<Badge isAttached color='primary' backgroundColor='white'>
							{totalCount}
						</Badge>
					)}
					<ShoppingCart />
				</Button>
			</Drawer.Disclosure>
			<Drawer placement='right' slide width='560px' maxWidth='100%' {...drawer}>
				<Flex flexDirection='column' height='100%' justifyContent='space-between' overflowY='auto'>
					<Flex flexDirection='column'>
						<Box position='sticky' top='0rem' background='white' zIndex='1'>
							<Flex justifyContent='space-between' alignItems='center' padding='1rem 0 0.5rem 1rem'>
								<Heading use='h4' margin='0'>
									Resumo do carrinho ({totalCount})
								</Heading>
								<Button background='none' border='none' padding='1rem' onClick={drawer.hide}>
									<X size={20} display='block' />
								</Button>
							</Flex>
							<Divider margin='0' />
						</Box>
						<Box flex='1' padding='2rem 0'>
							{cartList.map(({ id, ...rest }) => (
								<Item key={id} id={id} {...rest} />
							))}
						</Box>
					</Flex>
					{!!totalCount && (
						<Menu position='sticky' bottom='0' background='white'>
							<Menu.Group>
								<Menu.Divider margin='0' />
								<Menu.Item disabled>
									<Flex alignItems='center' justifyContent='space-between'>
										<Flex alignItems='center'>
											<DollarSign size={16} display='block' />
											&nbsp; Subtotal: &nbsp;
										</Flex>
										<Text>R$ {totalPrice}</Text>
									</Flex>
								</Menu.Item>
								<Menu.Divider margin='0' />
								<Menu.Item color='danger' onClick={onReset}>
									<Flex alignItems='center'>
										<Trash2 size={16} display='block' />
										&nbsp; Limpar carrinho
									</Flex>
								</Menu.Item>
								<Menu.Divider margin='0' />
								<Menu.Item use={Link} to='/cart' onClick={drawer.hide} margin='0' color='success'>
									<Flex alignItems='center'>
										<ExternalLink size={16} display='block' />
										&nbsp; Conferir o carrinho
									</Flex>
								</Menu.Item>
								<Menu.Divider margin='0' />
								<Menu.Item onClick={drawer.hide}>
									<Flex alignItems='center'>
										<X size={16} display='block' />
										&nbsp; Fechar
									</Flex>
								</Menu.Item>
							</Menu.Group>
						</Menu>
					)}
				</Flex>
			</Drawer>
		</Flex>
	)
}

const Navbar = () => (
	<div style={{ position: 'sticky', top: 0, zIndex: 1 }}>
		<Box as='header' backgroundColor='primary' color='white'>
			<Container as='nav' padding='1rem'>
				<Flex alignItems='center' justifyContent='space-between'>
					<Link to='/'>
						<Logo style={{ height: '2rem', width: 'auto' }} />
					</Link>
					<FloatingCart />
				</Flex>
			</Container>
		</Box>
	</div>
)

export default Navbar
