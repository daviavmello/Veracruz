import React from 'react'
import { useLocation } from 'react-router-dom'

const NotFoundPage = () => {
  const { pathname } = useLocation()
  return (
    <>
      <h1>Ahh não! Página não encontrada.</h1>
      <h2>A página que você requisitou <span>{pathname}</span> não foi encontrada.</h2>
    </>
  )
}

export default NotFoundPage