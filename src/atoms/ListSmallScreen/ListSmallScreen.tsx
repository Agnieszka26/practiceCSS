import { FC, ReactNode } from "react";
import styles from "./ListSmallScreen.module.scss";

interface ListProps {
  children: ReactNode;
}
const ListSmallScreen: FC<ListProps> = ({ children }) => {
  return <ul className={styles.listSmallScreen}>{children}</ul>;
};

export default ListSmallScreen;
