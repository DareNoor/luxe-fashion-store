import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"
import userReducer from "./userSlice"

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem("cart", JSON.stringify(state.cart))
  } catch (e) {}
}

const loadFromLocalStorage = () => {
  try {
    const cart = localStorage.getItem("cart")
    if (cart) return { cart: JSON.parse(cart) }
  } catch (e) {}
  return undefined
}

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer
  },
  preloadedState: loadFromLocalStorage()
})

store.subscribe(() => saveToLocalStorage(store.getState()))