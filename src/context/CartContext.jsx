import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (toy) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.id === toy.id)
      if (exists) {
        return prev
      }
      return [...prev, toy]
    })
  }

  const removeFromCart = (toyId) => {
    setCartItems(prev => prev.filter(item => item.id !== toyId))
  }

  const isInCart = (toyId) => {
    return cartItems.some(item => item.id === toyId)
  }

  const clearCart = () => {
    setCartItems([])
  }

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      isInCart, 
      clearCart,
      totalPrice 
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
