import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Film } from 'react-feather'

import { Box, Container, Paragraph, Stack, Set } from 'bumbag'
import Logo from 'components/Logo.js'

const Footer = () => (
	<Box backgroundColor='primary' color='white'>
		<Container padding='2rem 1rem'>
			<Stack>
				<Stack orientation='horizontal' alignItems='flex-start'>
					<Box>
						<Link to='/'>
							<Logo style={{ height: '4rem', width: 'auto' }} />
						</Link>
					</Box>
					<Set orientation='horizontal'>
						<Box use='a' href='https://www.instagram.com/useveracruz/' target='_blank'>
							<Instagram />
						</Box>
						<Box use='a' href='https://www.tiktok.com/@useveracruz' target='_blank'>
							<Film />
						</Box>
					</Set>
				</Stack>

				<Stack orientation='horizontal'>
					<Paragraph fontSize='100'>
						Veracruz Vestuário & Companhia Limitada
						<br />
						Conhecereis a verdade e a verdade os libertará.
						<br />
						Jesus é o caminho a verdade e a vida
					</Paragraph>
					<Paragraph fontSize='100'>
						Brasília - DF
						<br />
						CNPJ: 28.039.254/0001-32
					</Paragraph>
				</Stack>
			</Stack>
		</Container>
	</Box>
)

export default Footer