import toy1 from './assets/toys/toy1.png'
import toy2 from './assets/toys/toy2.png'
import toy3 from './assets/toys/toy3.png'
import toy4 from './assets/toys/toy4.png'

export const toys = [
  {
    id: 1,
    name: 'Minion Action Figure',
    price: 2000,
    image: toy1,
    selected: false,
    type: ['figures']
  },
  {
    id: 2,
    name: 'Classic Teddy Bear',
    price: 2000,
    image: toy2,
    selected: false,
    type: ['dolls']
  },
  {
    id: 3,
    name: 'Link Amiibo Figure',
    price: 2000,
    image: toy3,
    selected: false,
    type: ['figures']
  },
  {
    id: 4,
    name: 'Super Mario  Set',
    price: 2000,
    image: toy4,
    selected: false,
    type: ['figures', 'dolls']
  }
]

export const toyTypes = ['dolls', 'figures', 'puzzles', 'vehicles']
