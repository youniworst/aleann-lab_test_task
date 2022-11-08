import { FC } from "react";
import { MapProps } from "./types";
import styles from "./Map.module.scss";
import Image from "next/image";

export const Map: FC<MapProps> = ({
  address,
  name,
  phone,
  email,
  location,
  className,
}) => {
  const locationIconSrc = "/icons/location.svg";

  const containerStyle = className
    ? `${styles.container} ${className}`
    : `${styles.container}`;

  return (
    <div className={containerStyle}>
      <h2 className={styles.name}>{name}</h2>
      <div className={styles.address}>
        <div className={styles.address_img}>
          <Image src={locationIconSrc} alt="" width={13} height={18} />
        </div>
        <p>{address}</p>
      </div>
      <p className={styles.phone}>{phone}</p>
      <p className={styles.email}>{email}</p>
      <div className={styles.map}>
        
      </div>
    </div>
  );
};
