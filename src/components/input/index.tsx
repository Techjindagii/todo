import React, { memo } from "react";
import styles from "./style.module.css";

type Props = {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

function Input(props: Props) {
  const { onChange, placeholder, value } = props;

  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}
export default memo(Input);
