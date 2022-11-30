import { FC } from "react";

import Button from "../../atoms/PrimaryButton/PrimaryButton";
import Navbar from "../../components/Navbar/Navbar";
import Text from "../../atoms/Text/Text";

import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Navbar />
        <Text text="We are Creativeand Digital Agency" h1="h1" />
        <Button text="read more" secondary="secondary" />
      </div>
    </section>
  );
};

export default Header;
