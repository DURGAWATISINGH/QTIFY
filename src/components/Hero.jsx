import heroImage from "../assests/Group 7483.png";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <h1>100 Thousand Songs, ad-free</h1>

      <img
        className="heroImage"
        src={heroImage}
        alt="Hero Section"
      />
    </div>
  );
}

export default Hero;