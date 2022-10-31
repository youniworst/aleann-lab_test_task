import axios from "axios";
import type { NextPage } from "next";
import { Job } from "../components/Job";
import styles from "./Home.module.scss";

const Home: NextPage = () => {
  const a = axios
    .get(
      "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
    )
    .then((res) => console.log(res.data));
  return (
    <main className={styles.main}>
      <Job
        title="Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur Fachärztin für Arbeitsmedizin (m/w/d)"
        address="Department name •  Allgemeines Krankenhaus der Stadt Wien - AKH"
        pictureSrc="https://picsum.photos/200/300"
        createdAt="2000-10-10T17:59:30.736Z"
      />
    </main>
  );
};

export default Home;
