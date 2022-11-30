import { FC, useEffect, useState } from "react";

import Button from "../../atoms/PrimaryButton/PrimaryButton";
import Link from "../../atoms/Link/Link";
import Logo from "../../atoms/Logo/Logo";

import useWindowDimensions from "../../assets/hooks/useWindowDimensions";
import { GiHamburgerMenu } from "react-icons/gi";

import styles from "./Navbar.module.scss";
import variables from "../../assets/styles/variables.module.scss";

const Navbar: FC = () => {
  const { width } = useWindowDimensions();

  const [isSmallScreen, setSmallScreen] = useState(true);

  console.log(variables.breakpointTablet);
  useEffect(() => {
    width > Number(variables.breakpointTablet)
      ? setSmallScreen(false)
      : setSmallScreen(true);
  }, [width]);

  return (
    <nav className={styles.nav}>
      <Logo />
      {isSmallScreen ? (
        <GiHamburgerMenu />
      ) : (
        <ul className={styles.ul}>
          <Link text="HOME" href="/" active />
          <Link text="ABOUT" href="/" />
          <Link text="SERVICES" href="/" withDropdown />
          <Link text="BLOG " href="/" withDropdown />
          <Link text="CONTACT " href="/" />
        </ul>
      )}

      <Button text="Question A Quoto" />
    </nav>
  );
};

export default Navbar;
