import { FC } from "react";
import cn from "classnames";

import arrow_down from "../../assets/icons/arrow_down.svg";
import styles from "./ListElementSmallScreen.module.scss";

interface IListElement {
  href?: string;
  text?: string;
  withDropdown?: boolean;
  active?: boolean;
}
// className={cn(styles.button, styles[`hasColor-${secondary}`])}

const ListElementSmallScreen: FC<IListElement> = ({
  href,
  text,
  active,
  withDropdown,
}) => {
  return (
    <li className={cn(styles.listElementSmallScreen)}>
      <a href={href} className={cn(styles.a, styles[`active-${active}`])}>
        {text}
        {withDropdown && <img src={arrow_down} alt="arrow down" />}
      </a>
    </li>
  );
};

export default ListElementSmallScreen;
