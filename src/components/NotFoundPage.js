import React from 'react'
import { useLocation } from 'react-router-dom'
import { Container, Heading } from 'bumbag'


const NotFoundPage = () => {
  const { pathname } = useLocation()
  return (
      <Container padding='4rem 1rem'>
      <Heading use='h1'>Ahh não! Página não encontrada.</Heading>
      <Heading use='h4' fontWeight='normal'>A página que você requisitou "{pathname}" não foi encontrada <span role='img' aria-label='emojis'>😥✨</span></Heading>
      </Container>
  )
}

export default NotFoundPage