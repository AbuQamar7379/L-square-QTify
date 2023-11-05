import "./navbar.css";
import Logo from "./Logo";
import Search from "./Search";
import Button from "./Button";

const Navbar = () => {
    return (
        <nav>
        <Logo />
        <Search />
        <Button text='GIVE FEEDBACK' />
        </nav>
    )
    
};

export default Navbar;