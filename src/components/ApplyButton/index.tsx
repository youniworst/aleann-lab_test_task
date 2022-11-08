import { FC } from "react";
import { ApplyButtonProps } from "./types";
import styles from "./ApplyButton.module.scss";

export const ApplyButton: FC<ApplyButtonProps> = ({ className }) => {
  const buttonStyle = className
    ? `${className} ${styles.button}`
    : `${styles.button}`;
  return <button className={buttonStyle}>Apply now</button>;
};
