import React from 'react'

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (items) => {},
  clearCartContext: () => {},
})

export default CartContext
