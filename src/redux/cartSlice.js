import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: []
  },

  reducers: {

    addItem: (state, action) => {

      const existing = state.items.find(
        (i) =>
          i._id === action.payload._id &&
          i.size === action.payload.size
      )

      if (existing) {

        existing.qty += action.payload.qty || 1

      } else {

        state.items.push({
          ...action.payload,
          qty: action.payload.qty || 1
        })

      }
    },

    removeItem: (state, action) => {

      state.items = state.items.filter(
        (i) => i._id !== action.payload
      )

    },

    updateQty: (state, action) => {

      const item = state.items.find(
        (i) => i._id === action.payload._id
      )

      if (item) {
        item.qty = action.payload.qty
      }

    },

    clearCart: (state) => {

      state.items = []

    }

  }

})

export const {
  addItem,
  removeItem,
  updateQty,
  clearCart
} = cartSlice.actions

export default cartSlice.reducer