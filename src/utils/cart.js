import { products } from 'content'

export const getProductCartKey = ({ id, color, gender, size }) =>
	[id, color, gender, size].filter(Boolean).join('_').toUpperCase()

export const getItemCount = cart => data => {
	const key = getProductCartKey(data)
	return cart?.[key]?.count || 0
}

export const addToCart = (cart, setCart) => data => {
	const key = getProductCartKey(data)
	const hasItemOnCart = key in cart
	if (!hasItemOnCart) return setCart({ ...cart, [key]: { ...data, count: 1 } })
	const previousCount = cart[key].count
	return setCart({ ...cart, [key]: { ...data, count: previousCount + 1 } })
}

export const subtractFromCart = (cart, setCart) => data => {
	const key = getProductCartKey(data)
	const hasItemOnCart = key in cart
	if (!hasItemOnCart) return
	const previousCount = cart[key].count
	const count = previousCount - 1

	const { [key]: item, ...newCart } = cart

	if (count === 0) return setCart(newCart)
	return setCart({ ...cart, [key]: { ...data, count } })
}

export const getTotalCount = cart => Object.values(cart).reduce((acc, curr) => acc + curr?.count || 0, 0)

export const getCartList = cart =>
	Object.values(cart).reduce((acc, { id, ...rest }) => {
		const item = acc.find(x => x.id === id)
		if (!item) return [...acc, { id, count: rest.count, variants: [rest] }]
		return [...acc.filter(x => x.id !== id), { id, count: item.count + rest.count, variants: [...item.variants, rest] }]
	}, [])

export const getTotalPrice = cartList =>
	cartList.reduce((acc, curr) => {
		const productPrice = products.find(({ id }) => id === curr.id).price
		return acc + productPrice * curr.count
	}, 0)