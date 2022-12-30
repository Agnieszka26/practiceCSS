import {FC} from "react";
import cn from "classnames";
import styles from "./Text.module.scss";

interface IText {
  h1?: string;
  h2?: string;
  h3?: string;
  paragraf?: string;
  smallText?: string;
  text: string;
  secondPartText?: string;
  primaryColor?: string;
}

const Text: FC<IText> = ({
  h1,
  h2,
  h3,
  paragraf,
  smallText,
  text,
  secondPartText,
  primaryColor,
}) => {
  return (
    <p className={styles.base}>
      <span className={cn(styles.p, styles[`hasType-${h1}`])}>{text}</span>
      <span
        className={cn(
          styles.p,
          styles[`hasType-${h1}`],
          styles[`hasColor-${primaryColor}`]
        )}
      >
        {secondPartText}
      </span>
    </p>
  );
};
export default Text;
