import heroImage from "../assests/Group 7483.png";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <img
        className="heroImage"
        src={heroImage}
        alt="Hero Section"
      />
    </div>
  );
}

export default Hero;