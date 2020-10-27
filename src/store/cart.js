import create from 'zustand'

const getLocalStorage = k => JSON.parse(window.localStorage.getItem(k))
const setLocalStorage = (k, v) => window.localStorage.setItem(k, JSON.stringify(v))

const useCart = create(set => ({
	cart: getLocalStorage('cart') || {},
	setCart: cart => set(() => {
    setLocalStorage('cart', cart)
    return { cart }
  }),
}))

export default useCart
