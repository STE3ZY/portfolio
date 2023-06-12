import NavLinks from "./NavLinks";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Ioannis Karadimos Logo" />
      <NavLinks />
    </header>
  );
};

export default Header;
