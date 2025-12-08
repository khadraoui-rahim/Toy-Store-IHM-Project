import { useState } from 'react'
import { useCart } from '../context/CartContext'

function Carts() {
  const { cartItems, totalPrice, clearCart } = useCart()
  const [confirmed, setConfirmed] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleConfirm = (e) => {
    e.preventDefault()
    setConfirmed(true)
    setTimeout(() => {
      setConfirmed(false)
      setFormData({ name: '', email: '', phone: '' })
      clearCart()
    }, 3000)
  }

  return (
    <div className="carts-page">
      <div className="cart-items-section">
        <div className="cart-items-list">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">{item.price}da</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="checkout-section">
        {!confirmed ? (
          <div className="checkout-form-container">
            <h2 className="checkout-title">
              To get in touch and keep communication smooth, we'll need a few basic details.
            </h2>
            <form onSubmit={handleConfirm} className="checkout-form">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="form-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="form-input"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="form-input"
              />
              <div className="total-section">
                <p className="total-label">Total Pay :</p>
                <p className="total-amount">{totalPrice}da</p>
              </div>
              <button type="submit" className="confirm-btn">CONFIRM</button>
            </form>
          </div>
        ) : (
          <div className="confirmation-message">
            <div className="checkmark">✓</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Carts
