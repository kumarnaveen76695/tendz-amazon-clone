import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Welcome to online TRENDZ</h1>
        <img
          src="https://miro.medium.com/v2/resize:fit:1018/1*iAu65xDmvpVdBJgps6EDEw.png"
          alt="clothes that get you noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
        Fashion is part of the daily rhythm of life, constantly evolving to mirror our times, our moods, and our aspirations. Clothes are more than just fabric; they’re expressions of individuality and statements of who we are and the world we live in. At our online store, we celebrate this spirit of fashion by bringing you the latest and most exciting trends—all in one place.
        From stylish essentials to seasonal must-haves, discover a curated selection of clothing, accessories, footwear, and more that allows you to express yourself effortlessly. Our collection is updated frequently, so whether you’re looking for timeless classics or bold new pieces, you’ll find everything you need to make your fashion statement. Shop with us and redefine your style each season, with quality and convenience right at your fingertips.
        Explore our store today, and celebrate the joy of fashion in your own unique way.
        </p>
        <Link to="/products">
          <button type="button" className="shop-now-button">
            Shop Now
          </button>
        </Link>
      </div>
      <img
        src="https://miro.medium.com/v2/resize:fit:1018/1*iAu65xDmvpVdBJgps6EDEw.png"
        alt="clothes that get you noticed"
        className="home-desktop-img"
      />
    </div>
  </>
)

export default Home
