import Image from "next/image";
import { useRouter } from "next/router";
import { FC, MouseEvent } from "react";
import styles from "./ReturnButton.module.scss";
import { ReturnButtonProps } from "./types";

export const ReturnButton: FC<ReturnButtonProps> = ({ className }) => {
  const buttonStyle = className
    ? `${className} ${styles.button}`
    : `${styles.button}`;
  const router = useRouter();
  const iconSrc = "/icons/left_arrow.svg";
  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    router.push("/");
  };
  return (
    <button onClick={clickHandler} className={buttonStyle}>
      RETURN TO JOB BOARD
      <div className={styles.img}>
        <Image src={iconSrc} alt="" width={15} height={20} />
      </div>
    </button>
  );
};
