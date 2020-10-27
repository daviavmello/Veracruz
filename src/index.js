import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider as BumbagProvider } from 'bumbag'
import * as serviceWorker from './serviceWorker'

const theme = {
	palette: {
		primary: '#121212',
	},
}

const Root = () => (
	<BumbagProvider theme={theme}>
		<Router>
			<App />
		</Router>
	</BumbagProvider>
)

render(<Root/>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
