import { FC } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import style from "./HamburgerButton.module.scss";

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerButton: FC<HamburgerButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button className={style.hamburgerButton} onClick={onClick}>
      <GiHamburgerMenu size={42} />
    </button>
  );
};

export default HamburgerButton;
