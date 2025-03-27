import Head from "next/head";
import TimelineApp from "../components/TimelineApp";
import "../styles.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Expo Maths Africaines</title>
      </Head>
      <TimelineApp />
    </>
  );
}
