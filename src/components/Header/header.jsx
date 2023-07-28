import Logo from "../../assets/Nu Kenzie.svg";
import styles from "./style.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <img src={Logo} alt="Logo Nu Kenzie" />
      </div>
    </header>
  );
};
