import logo from "../../assets/logo.svg";
import styles from "../Navbar/navbar.module.css";
const Logo = () => {
  return (
    <div>
      <img src={logo} alt="Logo" className={styles.img} />
    </div>
  );
};

export default Logo;
