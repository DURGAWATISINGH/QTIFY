import Logo from "../Logo";
import Search from "../Search";
import Button from "../Button";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <Search />
      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;