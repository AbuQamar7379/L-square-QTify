import "./navbar.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav>
      <Logo />
      <Search />
      <Button text="GIVE FEEDBACK" />
    </nav>
  );
};

export default Navbar;
