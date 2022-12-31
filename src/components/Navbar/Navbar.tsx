import { FC, useEffect, useState } from "react";

import Button from "../../atoms/PrimaryButton/PrimaryButton";
import ListElement from "../../atoms/ListElement/ListElement";
import Logo from "../../atoms/Logo/Logo";
import List from "../../atoms/List/List";
import ListSmallScreen from "../../atoms/ListSmallScreen/ListSmallScreen";
import ListElementSmallScreen from "../../atoms/ListElementSmallScreen/ListElementSmallScreen";
import { RoutesPath } from "../../constants";

import HamburgerButton from "../../atoms/HamburgerButton/HamburgerButton";

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
  const [open, setOpen] = useState<boolean>(false);
  const onClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <nav className={styles.nav}>
        <Logo />

        <HamburgerButton isOpen={open} onClick={onClick} />
        <List>
          {listElementData.map(
            ({ href, text, active, withDropdown }, index) => (
              <ListElement
                key={`${text}-${index}`}
                href={href}
                text={text}
                active={active}
                withDropdown={withDropdown}
              />
            )
          )}
          <Button text="Question A Quoto" />
        </List>
      </nav>
      {open ? (
        <ListSmallScreen>
          {listElementData.map(
            ({ href, text, active, withDropdown }, index) => (
              <ListElementSmallScreen
                key={`${text}-${index}`}
                href={href}
                text={text}
                active={active}
                withDropdown={withDropdown}
              />
            )
          )}
          <div className={styles.button}>
            <Button text="Question A Quoto" />
          </div>
        </ListSmallScreen>
      ) : null}
    </>
  );
};

export default Navbar;
