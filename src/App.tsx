import Header from "./sections/Header/Header";

import styles from "./App.module.scss";
import variables from "./assets/styles/variables.module.scss";
import "@fontsource/poppins";
import { FC } from "react";

const App: FC = () => {
  return (
    <div className={styles.body}>
      <Header />;
    </div>
  );
};

export default App;
