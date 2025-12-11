import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('toyStoreCart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(() => {
    localStorage.setItem('toyStoreCart', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (toy) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.id === toy.id)
      if (exists) {
        return prev
      }
      return [...prev, { ...toy, quantity: 1 }]
    })
  }

  const removeFromCart = (toyId) => {
    setCartItems(prev => prev.filter(item => item.id !== toyId))
  }

  const increaseQuantity = (toyId) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === toyId 
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    )
  }

  const decreaseQuantity = (toyId) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === toyId && (item.quantity || 1) > 1
          ? { ...item, quantity: (item.quantity || 1) - 1 }
          : item
      )
    )
  }

  const isInCart = (toyId) => {
    return cartItems.some(item => item.id === toyId)
  }

  const clearCart = () => {
    setCartItems([])
    localStorage.removeItem('toyStoreCart')
  }

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0)

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      increaseQuantity,
      decreaseQuantity,
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
