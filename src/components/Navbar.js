import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Container, Stack, Text, DropdownMenu, Button, Flex, Badge, Drawer, Menu, Heading } from 'bumbag'
import { ShoppingCart, Trash2, ExternalLink } from 'react-feather'

import useCart from 'store/cart'
import Logo from 'components/Logo.js'
import { getTotalCount, getCartList } from 'utils/cart'

const FloatingCart = () => {
  const cart = useCart(s => s.cart)
  const reset = useCart(s => s.reset)
	const totalCount = getTotalCount(cart)
	const cartList = getCartList(cart)

  return (
		<Flex>
			<Drawer.State animated>
				<Drawer.Disclosure>
					<Button size='small' color='white' background='black' border='none'>
						{!!totalCount && <Badge isAttached>{totalCount}</Badge>}
						<ShoppingCart />
					</Button>
				</Drawer.Disclosure>
				<Drawer placement='right' fade slide>
					<Flex flexDirection='column' height='100%' justifyContent='space-between' overflowY='auto'>
						<Flex flexDirection='column'>
							<Box position='sticky' top='0rem'>
								<Heading padding='2rem 1rem 1.5rem' use='h4' background='white' margin='0'>
									Meu carrinho ({totalCount})
								</Heading>
								<Menu>
									<Menu.Group>
										<Menu.Item use={Link} to='/cart' margin='0'>
											<Flex alignItems='center'>
												<ExternalLink size={16} display='block' />
												&nbsp; Conferir o carrinho
											</Flex>
										</Menu.Item>
									</Menu.Group>
								</Menu>
							</Box>
							<Box flex='1' padding='2rem 0'>
								{}
								<pre>{JSON.stringify(cartList, null, 2)}</pre>
							</Box>
						</Flex>
						{!!totalCount && (
							<Menu position='sticky' bottom='0' background='white'>
								<Menu.Group>
									<Menu.Divider margin='0' />
									<Menu.Item color='danger' onClick={reset}>
										<Flex alignItems='center'>
											<Trash2 size={16} display='block' />
											&nbsp; Limpar carrinho
										</Flex>
									</Menu.Item>
								</Menu.Group>
							</Menu>
						)}
					</Flex>
				</Drawer>
			</Drawer.State>
		</Flex>
	)
}

const Navbar = () => (
  <div style={{position:'sticky', top:0}}>
    <Box as='header' background='black' color='white'>
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