import { FC, useEffect, useState } from "react";
import { Job } from "../Job";
import { JobListProps } from "./types";
import styles from "./JobList.module.scss";
import { IJob } from "../../models/jobModel";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import { useLoading, useJobsData } from "../../hooks";
import $api from "../../axios";

export const JobList: FC<JobListProps> = ({ className }) => {
  const itemsPerPage = 4;

  const [currentItems, setCurrentItems] = useState<IJob[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState<number>(0);

  const { totalList } = useJobsData();

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(totalList.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(totalList.length / itemsPerPage));
  }, [totalList, itemOffset, itemsPerPage]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % totalList.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
    window.scrollTo(0, 0);
  };

  const prevArrrowIcon = "/icons/left_arrow.svg";
  const prevImg = (
    <div>
      <Image alt="" src={prevArrrowIcon} width={13} height={15} />
    </div>
  );

  const nextArrrowIcon = "/icons/right_arrow.svg";
  const nextImg = (
    <div>
      <Image alt="" src={nextArrrowIcon} width={13} height={15} />
    </div>
  );

  return (
    <div className={className}>
      {currentItems.map((item: IJob) => (
        <Job
          key={item.id}
          id={item.id}
          className={styles.job}
          pictureSrc={item.pictures[0]}
          title={item.title}
          address={item.address}
          createdAt={item.createdAt}
        />
      ))}
      {currentItems.length > 0 && (
        <ReactPaginate
          className={styles.paginate}
          breakLabel="..."
          nextLabel={nextImg}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          pageClassName={styles.paginate_number}
          previousLabel={prevImg}
          previousLinkClassName={styles.prev}
          nextLinkClassName={styles.next}
          activeClassName={styles.active_number}
          breakClassName={styles.break}
        />
      )}
    </div>
  );
};
