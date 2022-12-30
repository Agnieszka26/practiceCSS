import {FC} from "react";

import Button from "../../atoms/PrimaryButton/PrimaryButton";

import Text from "../../atoms/Text/Text";

import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <div className={styles.container}>
      {/* <div> */}
      <div>
        <Text text="We are Creative" h1="h1" />
        <Text
          text="and "
          secondPartText="Digital Agency"
          h1="h1"
          primaryColor={"primaryColor"}
        />
        <div style={{padding: "10px 25%"}}>
          <Text
            h2="h2"
            text="There are many variations of passages of Lorem Ipsum available, but the
suffered alteration in some form, by injected humour  suffered alteration in
by injected humour majority "
          />
        </div>
        <div className={styles.buttonContainer}>
          <Button text="read more" secondary="secondary" />
          <Button text="services" />
        </div>

        {/* </div> */}
      </div>
    </div>
  );
};

export default Header;
