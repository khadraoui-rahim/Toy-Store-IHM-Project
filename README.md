# ToyTown - E-Commerce Web Application

## Project Overview

This project is a demonstration of web development skills for the **IHM (Interface Homme-Machine)** module at the **University of Algiers**, Computer Science department, SI branch.

ToyTown is a modern, responsive e-commerce web application for a toy store, showcasing fundamental concepts of human-computer interaction, user interface design, and front-end development.

## Academic Context

- **University**: University of Algiers
- **Department**: Computer Science
- **Branch**: SI (Systèmes d'Information)
- **Module**: IHM (Interface Homme-Machine)
- **Project Type**: Educational Demonstration

## Features

### 1. Home Page
- Hero section with image grid and overlay effects
- "Our Best Sellers" section displaying featured products
- "About Us" section with company information
- Responsive design with smooth animations

### 2. Toys Catalog Page
- Dynamic product filtering by category (Dolls, Figures, Puzzles, Vehicles)
- Product cards with rounded corners and hover effects
- Add/Remove items to cart functionality
- Real-time cart state management

### 3. Shopping Cart Page
- Display of selected items with images and prices
- Dynamic total price calculation
- Checkout form with user details (Name, Email, Phone)
- Order confirmation with visual feedback (green checkmark)
- Automatic cart reset after confirmation

### 4. Navigation & Layout
- Persistent navigation bar with gradient text effects
- Footer with social media links and Google Maps integration
- Smooth routing between pages without page reloads

## Technologies Used

- **React 19.2.0** - UI library for building component-based interfaces
- **React Router DOM** - Client-side routing
- **Vite** - Fast build tool and development server
- **CSS3** - Custom styling with modern features (flexbox, grid, gradients)
- **Context API** - Global state management for shopping cart
- **Google Fonts** - Unbounded, Ubuntu, and Inter font families
- **Font Awesome** - Social media icons
- **Google Maps Embed API** - Location display

## Design Principles

### Typography
- **Unbounded**: Navigation elements and cart page
- **Ubuntu**: Best sellers section and about us
- **Inter**: Form inputs and general text

### Color Scheme
- Primary gradient: `linear-gradient(180deg, #990000 0%, #FF0202 100%)`
- Hover gradient: `linear-gradient(180deg, #FFD700 0%, #FFA500 100%)`
- Neutral colors: Gray tones for backgrounds and borders

### UI/UX Features
- Smooth corner radius (border-radius: 50px) for modern look
- Hover effects and transitions for better interactivity
- Responsive grid layouts for different screen sizes
- Visual feedback for user actions (button states, confirmations)
- Accessible form inputs with proper labels and validation

## Project Structure

```
toyStore/
├── src/
│   ├── assets/           # Images and static files
│   │   ├── logos/
│   │   ├── mainpageimage/
│   │   ├── toys/
│   │   └── aboutus pics/
│   ├── components/       # Reusable components
│   │   └── Layout.jsx
│   ├── context/          # State management
│   │   └── CartContext.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── Toys.jsx
│   │   └── Carts.jsx
│   ├── App.jsx           # Main application component
│   ├── App.css           # Global styles
│   ├── data.js           # Product data
│   └── main.jsx          # Application entry point
├── public/               # Public assets
├── package.json          # Dependencies and scripts
└── vite.config.js        # Vite configuration
```

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation Steps

1. Clone the repository:
```bash
git clone <repository-url>
cd toyStore
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## Key Learning Outcomes

This project demonstrates understanding of:

1. **Component-Based Architecture**: Modular, reusable React components
2. **State Management**: Using Context API for global state
3. **Routing**: Single-page application with multiple views
4. **Responsive Design**: Mobile-first approach with media queries
5. **User Interaction**: Forms, buttons, and dynamic content
6. **Visual Design**: Typography, color theory, and layout principles
7. **Accessibility**: Semantic HTML and ARIA labels
8. **Modern CSS**: Flexbox, Grid, gradients, and animations

## Future Enhancements

- Backend integration with REST API
- User authentication and profiles
- Product search functionality
- Payment gateway integration
- Order history and tracking
- Product reviews and ratings
- Wishlist feature
- Multi-language support

## Author

Computer Science Student - SI Branch
University of Algiers

## License

This project is created for educational purposes as part of the IHM module curriculum.

---

**Note**: This is a demonstration project for academic evaluation and learning purposes.
