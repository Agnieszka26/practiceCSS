import { FC } from "react";
import cn from "classnames";

import arrow_down from "../../assets/images/arrow_down.svg";
import styles from "./Link.module.scss";

interface ILink {
  href: string;
  text: string;
  withDropdown?: boolean;
  active?: boolean;
}
// className={cn(styles.button, styles[`hasColor-${secondary}`])}

const Link: FC<ILink> = ({ href, text, active, withDropdown }) => {
  return (
    <li className={cn(styles.li)}>
      <a href={href} className={cn(styles.a, styles[`active-${active}`])}>
        {text}
        {withDropdown && <img src={arrow_down} alt="arrow down" />}
      </a>
    </li>
  );
};

export default Link;
