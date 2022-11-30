import { FC } from "react";
import cn from "classnames";

import styles from "./PrimaryButton.module.scss";

interface ButtonProps {
  text: string;
  className?: string;
  color?: string;
  disabled?: boolean;
  secondary?: "secondary";
}

const Button: FC<ButtonProps> = ({
  text,
  className,
  color,
  disabled,
  secondary,
}) => {
  return (
    <>
      <button
        className={cn(styles.button, styles[`hasColor-${secondary}`])}
        disabled={disabled}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
