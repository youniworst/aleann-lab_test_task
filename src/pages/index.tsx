import type { NextPage } from "next";
import { useEffect, useState } from "react";
import $api from "../axios";
import { Job } from "../components/Job";
import { JobList } from "../components/JobList";
import { Loader } from "../components/Loader";
import { useLoading } from "../hooks";
import styles from "./Home.module.scss";

const Home: NextPage = () => {
  const { loading } = useLoading();
  return (
    <main className={styles.main}>
      {loading && <Loader />}
      <JobList />
    </main>
  );
};

export default Home;
