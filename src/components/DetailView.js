import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Stack, Heading, Paragraph } from 'bumbag'


import { products } from 'content'
import NotFoundPage from 'components/NotFoundPage'

const ProductView = ({ id }) => {
	const { title, description, info } = products.find(x => x.id === id)
	return (
		<Container padding='4rem 1rem'>
			<Stack>
				{title && <Heading use='h1'>{title}</Heading>}
				{description && <Heading as='h2' use='h4'>{description}</Heading>}
				{info && <Paragraph>{info}</Paragraph>}
			</Stack>
		</Container>
	)

}

const DetailView = () => {
	const { id } = useParams()
	// return <pre>{JSON.stringify({p: ), id})}</pre>
	if(!products.some(x => x.id === id)) return <NotFoundPage/>
	return <ProductView id={id} />
}

export default DetailView
