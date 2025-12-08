import { useState } from 'react'
import { toys, toyTypes } from '../data'
import { useCart } from '../context/CartContext'

function Toys() {
  const [selectedType, setSelectedType] = useState('all')
  const { addToCart, removeFromCart, isInCart } = useCart()

  const filteredToys = selectedType === 'all' 
    ? toys 
    : toys.filter(toy => toy.type.includes(selectedType))

  const handleToggleCart = (toy) => {
    if (isInCart(toy.id)) {
      removeFromCart(toy.id)
    } else {
      addToCart(toy)
    }
  }

  return (
    <div className="toys-page">
      <div className="filter-buttons">
        <button 
          className={selectedType === 'all' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setSelectedType('all')}
        >
          All
        </button>
        {toyTypes.map(type => (
          <button 
            key={type}
            className={selectedType === type ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setSelectedType(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <div className="toys-catalog">
        {filteredToys.map(toy => (
          <div key={toy.id} className="toy-card">
            <div className="toy-image">
              <img src={toy.image} alt={toy.name} />
            </div>
            <div className="toy-info">
              <h3 className="toy-name">{toy.name}</h3>
              <p className="toy-price">{toy.price}da</p>
              <button 
                className={isInCart(toy.id) ? 'add-btn in-cart' : 'add-btn'}
                onClick={() => handleToggleCart(toy)}
              >
                {isInCart(toy.id) ? '−' : '+'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Toys
