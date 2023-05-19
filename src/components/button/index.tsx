import React, { memo } from "react";
import styles from "./style.module.css";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

function Button(props: Props) {
  const { onClick, children } = props;

  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
export default memo(Button);
