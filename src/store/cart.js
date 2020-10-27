import create from 'zustand'

const getLocalStorage = k => JSON.parse(window.localStorage.getItem(k))
const setLocalStorage = (k, v) => window.localStorage.setItem(k, JSON.stringify(v))

const initialState = {}

const useCart = create(set => ({
	cart: getLocalStorage('cart') || initialState,
	setCart: cart => set(() => {
    setLocalStorage('cart', cart)
    return { cart }
  }),
  reset: () => set(() => {
    setLocalStorage('cart', initialState)
    return { cart: initialState }
  }),
}))

export default useCart
