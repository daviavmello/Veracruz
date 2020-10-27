const getProductCartKey = ({ id, color, gender, size }) =>
	[id, color, gender, size].filter(Boolean).join('_').toUpperCase()

export default getProductCartKey