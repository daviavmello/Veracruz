import React from 'react'
import { Switch, Route } from 'react-router-dom'

import GlobalStyle from 'components/GlobalStyle'
import Navbar from 'components/Navbar'
import DetailView from 'components/DetailView'
// import ProductList from 'components/ProductList'
import Home from 'components/Home'
import Cart from 'components/Cart'
import NotFoundPage from 'components/NotFoundPage'
import Footer from 'components/Footer'

const App = () => (
	<>
		<GlobalStyle />
		<Navbar />
		<main>
			<Switch>
				<Route exact path='/' component={Home} />
				{/* <Route exact path='/products' component={ProductList} /> */}
				<Route exact path='/cart' component={Cart} />
				<Route path='/:id' component={DetailView} />
				<Route component={NotFoundPage} />
			</Switch>
		</main>
		<Footer />
	</>
)

export default App
