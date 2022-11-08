import { FC } from "react";
import { MarkedCompensationsListProps } from "./types";
import styles from "./MarkedCompensationsList.module.scss";
import Image from "next/image";

export const MarkedCompensationsList: FC<MarkedCompensationsListProps> = ({
  compensationText,
  className,
}) => {
  const array = compensationText
    .split(".")
    .map((item) => item.trim())
    .filter((item) => item.length);

  const bulletIconSrc = "/icons/bullet.svg";

  const listStyle = className ? `${className}` : "";

  return (
    <ul className={listStyle}>
      {array.map((item) => (
        <li key={item} className={styles.li}>
          <div className={styles.img}>
            <Image src={bulletIconSrc} alt="" fill />
          </div>
          {item}
        </li>
      ))}
    </ul>
  );
};
