import { Outlet, Link } from 'react-router-dom'
import logo from '../assets/logos/toystorelogo.png'

function Layout() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Toy Store Logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/toys">TOYS</Link></li>
          <li><Link to="/carts">CARTS</Link></li>
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <img src={logo} alt="Toy Town Logo" className="footer-logo" />
            <div className="social-section">
              <h3 className="social-title">Social</h3>
              <div className="social-icons">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
          
          <div className="footer-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.2891234567!2d3.0588!3d36.7538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb26977ea029f%3A0x7c4c9d0c5e8e8e8e!2sUniversity%20of%20Algiers!5e0!3m2!1sen!2sdz!4v1234567890"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="University of Algiers Location"
            ></iframe>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 ToyTown | All Rights Reserved</p>
        </div>
      </footer>
    </>
  )
}

export default Layout
