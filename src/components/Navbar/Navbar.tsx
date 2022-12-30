import {FC, useEffect, useState} from "react";

import Button from "../../atoms/PrimaryButton/PrimaryButton";
import ListElement from "../../atoms/ListElement/ListElement";
import Logo from "../../atoms/Logo/Logo";
import List from "../../atoms/List/List";
import {RoutesPath} from "../../constants";

import {GiHamburgerMenu} from "react-icons/gi";

import styles from "./Navbar.module.scss";

const listElementData = [
  {
    text: "HOME",
    href: RoutesPath.HOME,
    active: true,
    withDropdown: false,
  },
  {
    text: "ABOUT",
    href: RoutesPath.ABOUT,
    active: false,
    withDropdown: false,
  },
  {
    text: "SERVICES",
    href: RoutesPath.SERVICES,
    active: false,
    withDropdown: true,
  },
  {
    text: "BLOG ",
    href: RoutesPath.BLOG,
    active: false,
    withDropdown: true,
  },
  {
    text: "CONTACT ",
    href: RoutesPath.CONTACT,
    active: false,
    withDropdown: false,
  },
];

const Navbar: FC = () => {
  return (
    <nav className={styles.nav}>
      <Logo />

      <GiHamburgerMenu />

      <List>
        {listElementData.map(({href, text, active, withDropdown}, index) => (
          <ListElement key={`${text}-${index}`} href={href} text={text} active={active} withDropdown={withDropdown}/>
        ))}
      </List>

      <Button text="Question A Quoto" />
    </nav>
  );
};

export default Navbar;
