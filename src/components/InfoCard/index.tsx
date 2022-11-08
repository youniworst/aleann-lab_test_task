import { FC } from "react";
import styles from "./InfoCard.module.scss";
import { InfoCardProps } from "./types";

export const InfoCard: FC<InfoCardProps> = ({ type, className, text }) => {
  const typedStyle =
    type === "blue"
      ? `${styles.blue}`
      : type === "yellow"
      ? `${styles.yellow}`
      : "";
  const cardStyle = className
    ? `${className} ${styles.card} ${typedStyle}`
    : `${styles.card} ${typedStyle}`;

  return <div className={cardStyle}>{text}</div>;
};
