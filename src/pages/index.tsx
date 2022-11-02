import type { NextPage } from "next";
import { useEffect, useState } from "react";
import $api from "../axios";
import { Job } from "../components/Job";
import { JobList } from "../components/JobList";
import styles from "./Home.module.scss";

const Home: NextPage = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    $api.get("").then((res) => setList(res.data));
  }, []);

  return (
    <main className={styles.main}>
      <JobList jobsArray={list} />
    </main>
  );
};

export default Home;
