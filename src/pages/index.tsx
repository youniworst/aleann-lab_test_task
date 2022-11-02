import type { NextPage } from "next";
import { useEffect, useState } from "react";
import $api from "../axios";
import { Job } from "../components/Job";
import { JobList } from "../components/JobList";
import { Loader } from "../components/Loader";
import { useLoading } from "../hooks";
import styles from "./Home.module.scss";

const Home: NextPage = () => {
  const [list, setList] = useState([]);
  const { setLoading, loading } = useLoading();
  useEffect(() => {
    setLoading && setLoading(true);
    $api
      .get("")
      .then((res) => {
        setList(res.data);
      })
      .finally(() => setLoading && setLoading(false));
  }, []);

  return (
    <main className={styles.main}>
      {loading && <Loader />}
      <JobList jobsArray={list} />
    </main>
  );
};

export default Home;
