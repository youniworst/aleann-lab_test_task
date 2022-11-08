import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { ApplyButton } from "../../components/ApplyButton";
import { InfoCard } from "../../components/InfoCard";
import { Loader } from "../../components/Loader";
import { Map } from "../../components/Map";
import { MarkedCompensationsList } from "../../components/MarkedCompensationsList";
import { ReturnButton } from "../../components/ReturnButton";
import { useJobsData, useLoading } from "../../hooks";
import { dateCount } from "../../utils/date_count";
import { jobDescriptionSpliter } from "../../utils/job_description_spliter";
import styles from "./JobPage.module.scss";

const JobPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading } = useLoading();
  const { totalList } = useJobsData();
  const currentJob = totalList.find((item) => item.id === id);

  const shareIconSrc = "/icons/share.svg";
  const favoriteIconSrc = "/icons/favorite.svg";

  const postedAgo = currentJob && dateCount(currentJob.createdAt);
  const jobDescriptionObj =
    currentJob && jobDescriptionSpliter(currentJob?.description);

  return (
    <>
      {loading && <Loader />}
      <main className={styles.main}>
        {currentJob ? (
          <>
            <div className={styles.left_side}>
              <div className={styles.head}>
                <h2 className={styles.title}>Job Details</h2>
                <div className={styles.head_actions}>
                  <div className={styles.favorite}>
                    <div className={styles.action_img}>
                      <Image
                        src={favoriteIconSrc}
                        alt=""
                        width={18}
                        height={20}
                      />
                    </div>
                    <p className={styles.action_text}>Save to my list</p>
                  </div>
                  <div className={styles.share}>
                    <div className={styles.action_img}>
                      <Image src={shareIconSrc} alt="" width={18} height={20} />
                    </div>
                    <p className={styles.action_text}>Share</p>
                  </div>
                </div>
              </div>

              <ApplyButton className={styles.top_button} />

              <div className={styles.job_title_block}>
                <p className={styles.job_title}>{currentJob?.title}</p>
                <div className={styles.salary}>
                  <p className={styles.salary_rate}>€ {currentJob?.salary}</p>
                  <p className={styles.salary_text}>Brutto, per year</p>
                </div>
              </div>

              <p className={styles.posted}>Posted {postedAgo}</p>

              <div className={styles.description}>
                <p className={styles.description_text}>
                  {jobDescriptionObj?.description}
                </p>
                <h2 className={styles.description_title}>Responsopilities</h2>
                <p className={styles.description_text}>
                  {jobDescriptionObj?.responsopilities}
                </p>
                <h2 className={styles.description_title}>
                  Compensation & Benefits:
                </h2>
                <MarkedCompensationsList
                  compensationText={jobDescriptionObj?.compensation as string}
                />
              </div>

              <ApplyButton className={styles.bottom_button} />

              <div className={styles.info}>
                <h2 className={styles.info_title}>Additional info</h2>

                <div className={styles.info_block}>
                  <h3 className={styles.info_block_title}>Employment type</h3>
                  <div className={styles.info_block_container}>
                    {currentJob.employment_type.map((item) => (
                      <InfoCard
                        key={item}
                        className={styles.info_block_container_item}
                        type="blue"
                        text={item}
                      />
                    ))}
                  </div>
                </div>

                <div className={styles.info_block}>
                  <h3 className={styles.info_block_title}>Benefits</h3>
                  <div className={styles.info_block_container}>
                    {currentJob.benefits.map((item) => (
                      <InfoCard
                        key={item}
                        className={styles.info_block_container_item}
                        type="yellow"
                        text={item}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.images}>
                <h2 className={styles.images_title}>Attached images</h2>
                <div className={styles.images_container}>
                  {currentJob.pictures.map((item, index) => (
                    <div key={index} className={styles.images_container_item}>
                      <Image src={item} alt="" fill />
                    </div>
                  ))}
                </div>
              </div>

              <ReturnButton className={styles.return_button} />
            </div>
            <div className={styles.right_side}>
              <h2 className={styles.right_side_title}>Contacts</h2>
              <Map
                address={currentJob.address}
                location={currentJob.location}
                phone={currentJob.phone}
                email={currentJob.email}
                name={currentJob.name}
              />
            </div>
          </>
        ) : (
          <h1>Something went wrong</h1>
        )}
      </main>
    </>
  );
};

export default JobPage;
