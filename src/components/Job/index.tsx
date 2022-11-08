import { FC, MouseEvent } from "react";
import { JobProps } from "./types";
import styles from "./Job.module.scss";
import Image from "next/image";
import { nanoid } from "nanoid";
import { dateCount } from "../../utils/date_count";
import { useRouter } from "next/router";

export const Job: FC<JobProps> = ({
  id,
  title,
  address,
  location = "Vienna, Austria",
  createdAt,
  pictureSrc,
  rate = 5,
  className,
}) => {
  const starIconSrc = "/icons/star.svg";
  const locationIconSrc = "/icons/location.svg";
  const favoriteIconSrc = "/icons/favorite.svg";

  const containerStyle = `${styles.container} ${className}`;

  const router = useRouter();
  const titleClickHandler = (event: MouseEvent<HTMLSpanElement>) => {
    router.push(`/job/${id}`);
  };

  return (
    <div className={containerStyle}>
      <div className={styles.img}>
        <Image src={pictureSrc} alt={""} width={85} height={85} />
      </div>

      <div className={styles.text_block}>
        <h2  className={styles.title}>
          <span className={styles.title_text} onClick={titleClickHandler}>{title}</span>
        </h2>
        <p className={styles.address}>{address}</p>
        <div className={styles.location}>
          <div className={styles.location_img}>
            <Image src={locationIconSrc} alt={""} width={13} height={18} />
          </div>
          <p className={styles.location_text}>{location}</p>
        </div>
      </div>

      <div className={styles.rate}>
        {Array(rate)
          .fill(0)
          .map((item, index) => (
            <div key={index} className={styles.rate_star}>
              <Image src={starIconSrc} alt={""} width={19} height={18} />
            </div>
          ))}
      </div>

      <div className={styles.end}>
        <div className={styles.favorite_img}>
          <Image width={16} height={20} src={favoriteIconSrc} alt={""} />
        </div>
        <p className={styles.created_at}>Posted {dateCount(createdAt)}</p>
      </div>
    </div>
  );
};
