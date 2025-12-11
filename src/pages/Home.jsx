import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/mainpageimage/1.png'
import img2 from '../assets/mainpageimage/2.png'
import img3 from '../assets/mainpageimage/3.png'
import img4 from '../assets/mainpageimage/4.png'
import aboutBg from '../assets/aboutus pics/background.png'
import logo from '../assets/logos/toystorelogo.png'
import { toys } from '../data'

function Home() {
  const bestSellersRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.2 }
    )

    if (bestSellersRef.current) {
      observer.observe(bestSellersRef.current)
    }

    return () => {
      if (bestSellersRef.current) {
        observer.unobserve(bestSellersRef.current)
      }
    }
  }, [])

  return (
    <>
      <div className="hero-grid">
        <div className="grid-item grid-item-1">
          <img src={img1} alt="Child playing with toys" />
          <div className="overlay"></div>
        </div>
        <div className="grid-item grid-item-2">
          <img src={img2} alt="Family with tablet" />
          <div className="overlay"></div>
        </div>
        <div className="grid-item grid-item-3">
          <img src={img3} alt="Happy child" />
          <div className="overlay"></div>
        </div>
        <div className="grid-item grid-item-4">
          <img src={img4} alt="Child with toy cars" />
          <div className="overlay"></div>
        </div>
        <div className="hero-text">
          <h1>Create the perfect environment for your children</h1>
        </div>
      </div>

      <section className="best-sellers" ref={bestSellersRef}>
        <h2 className="section-title">OUR BEST SELLERS</h2>
        <p className="section-subtitle">here lies a selection of our best work, ready for your kids to play with</p>
        
        <div className="home-toys-grid">
          {toys.map((toy, index) => (
            <div key={toy.id} className="home-toy-card" style={{ animationDelay: `${index * 0.15}s` }}>
              <img src={toy.image} alt={toy.name} />
              <p className="home-toy-price">{toy.price}da</p>
              <p className="home-toy-availability">Limited quantity</p>
            </div>
          ))}
        </div>

        <Link to="/toys">
          <button className="toys-button">TOYS</button>
        </Link>
      </section>

      <section className="about-us">
        <img src={aboutBg} alt="About us background" className="about-bg" />
        <div className="about-content">
          <img src={logo} alt="Toy Town Logo" className="about-logo" />
          <h2 className="about-title">About us</h2>
          <p className="about-text">
            At ToyTown, we're dedicated to bringing joy and imagination to every child's world through our wide range of high-quality toys and games.
          </p>
          <p className="about-text">
            We understand how important play is in creating unforgettable childhood memories.
          </p>
          <p className="about-text">
            Our mission is to offer toys that inspire creativity, learning, and endless fun — because we believe every moment of play helps build the happiest memories of growing up.
          </p>
        </div>
      </section>
    </>
  )
}

export default Home
