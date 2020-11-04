import React from 'react'
import { Link } from 'react-router-dom'
import Hero from './Hero'
import { Card, Box, Image, Stack, Heading, Container, Columns, Text, Paragraph, Badge } from 'bumbag'

import { products } from 'content'

const Product = ({ title, images, price }) => {
	return (
		<Box textAlign='center' marginBottom='2rem'>
			<Card variant='shadowed' as='article' cursor='pointer' marginBottom='0.5rem' overflow='hidden' padding='0'>
				{images?.default && (
					<div style={{ position: 'relative' }}>
						<Image src={`/img/${images.default}`} />
					</div>
				)}
			</Card>
			<Heading use='h5' padding='1rem 0 0.25rem 0' marginBottom='0'>
				{title}
			</Heading>
			<Text>R$ {price.toFixed(2)}</Text>
		</Box>
	)
}

const NextProduct = () => {
	return (
				<Box textAlign='center' marginBottom='2rem'>
					<Card
						maxHeight='12rem'
						variant='shadowed'
						as='article'
						cursor='pointer'
						marginBottom='0.5rem'
						overflow='hidden'
						padding='0'
					>
						<div style={{ }}>
							<Image src={`/img/next.jpg`} />
						</div>
					</Card>
					<Heading use='h5' padding='1rem 0 0.25rem 0' marginBottom='0'>
						Moletom
					</Heading>
					<Text>
						Em breve&nbsp;
						<span role='img' aria-label='emojis'>
							👀
						</span>
					</Text>
				</Box>
	)
}

const About = () => (
	<Box marginY='4rem' spacing='major-4'>
		<Heading use='h1'>Sobre a Veracruz</Heading>
		<Columns>
			<Columns.Column spreadTablet={12} spreadWidescreen={4} spread={4}>
				<Badge textTransform='uppercase' padding='0.25rem 0.5rem' marginY='2rem'>
					Quem nós somos?&nbsp;
					<span role='img' aria-label='emojis'>
						{' '}
						👋
					</span>
				</Badge>
				<Paragraph>
					Somos uma organização que tem como objetivo levar o evangelho ao mundo de uma maneira nunca vista antes,
					mostrando assim quem Jesus verdadeiramente É!{' '}
				</Paragraph>
			</Columns.Column>
			<Columns.Column spreadTablet={12} spreadWidescreen={4} spread={4}>
				<Badge textTransform='uppercase' padding='0.25rem 0.5rem' marginY='2rem'>
					Por que vestuário?&nbsp;
					<span role='img' aria-label='emojis'>
						👕
					</span>
				</Badge>
				<Paragraph>
					A roupa que você veste fala muito sobre você, então porque não usar uma blusa que traga boas notícias?
					<br /> <br />
					“Com isso todos saberão que vocês são meus discípulos, se vocês se amarem uns aos outros”.” ‭‭João‬ ‭13:35‬
					‭NVI‬‬
				</Paragraph>
			</Columns.Column>
			<Columns.Column spreadTablet={12} spreadWidescreen={4} spread={4}>
				<Badge textTransform='uppercase' padding='0.25rem 0.5rem' marginY='2rem'>
					Coleção Veritas&nbsp;
					<span role='img' aria-label='emojis'>
						🌟
					</span>
				</Badge>
				<Paragraph>
					Veritas vem do latim, que significa “verdade”, e foi daí que surgiu o nome de nossa primeira coleção, pois
					acreditamos em João 8:32 “E conhecereis a verdade, e a verdade os libertará”. O mundo precisa conhecer a
					verdade do evangelho, a verdade que temos um Pai de amor e somos chamados de filhos de Deus! E aí, topa pregar
					essa mensagem?
				</Paragraph>
			</Columns.Column>
		</Columns>
	</Box>
)

const ProductList = () => {
	return (
		<Container padding='0 1rem 4rem 1rem'>
			<Stack spacing='major-4'>
				<Heading use='h1'>Produtos</Heading>
				<Columns>
					{products.map(product => (
						<Columns.Column key={product.id} spreadTablet={12} spreadWidescreen={6} spread={6}>
							<Link to={{ pathname: `/${product.id}`, query: { id: product.id } }}>
								<Product {...product} key={product.id} />
							</Link>
						</Columns.Column>
					))}
				</Columns>
						<NextProduct />
			</Stack>
			<About />
		</Container>
	)
}

const Home = () => {
	return (
		<Container isFluid padding='0'>
			<Hero />
			<ProductList />
		</Container>
	)
}

export default Home
