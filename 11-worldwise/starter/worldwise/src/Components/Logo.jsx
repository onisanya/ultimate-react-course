import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      <img src="/logo.png" alt=">WorldWise logo" />
    </Link>
    // <div className={styles.logo}>
    //   <img src="/logo.png" alt="WorldWise logo" />
    // </div>
  );
}

export default Logo;
