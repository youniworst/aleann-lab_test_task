import { FC } from "react";
import { Job } from "../Job";
import { JobListProps } from "./types";
import styles from './JobList.module.scss'

export const JobList: FC<JobListProps> = ({ className, jobsArray }) => {
  return <div className={className}>
    {jobsArray.map((item) => <Job key={item.id} className={styles.job} pictureSrc={item.pictures[0]} title={item.title} address={item.address} createdAt={item.createdAt}/>)}
  </div>;
};
