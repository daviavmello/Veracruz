import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Container, Stack, Text, DropdownMenu, Button, Flex, Badge, Drawer } from 'bumbag'
import { ShoppingCart } from 'react-feather'

import useCart from 'store/cart'
import Logo from 'components/Logo.js'

const FloatingCart = () => {
  const cart = useCart(s => s.cart)
  const totalCount = Object.values(cart).reduce((acc, curr) => acc + curr?.count || 0, 0)
  return (
		<Flex>
			<Drawer.State>
				<Drawer.Disclosure>
					<Button size='small' color='white' background='black' border='none'>
						{!!totalCount && <Badge isAttached>{totalCount}</Badge>}
						<ShoppingCart />
					</Button>
				</Drawer.Disclosure>
				<Drawer placement='right'>
					<Link to='/cart'>Ir para o carrinho</Link>
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