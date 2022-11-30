import { FC } from "react";

import styles from "./Logo.module.scss";
import logo from "../../assets/images/Logo.svg";

const Logo: FC = () => {
  return <img src={logo} alt="logo" className={styles.img} />;
};

export default Logo;
