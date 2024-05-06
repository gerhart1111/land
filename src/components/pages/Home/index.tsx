import Feed from "@/components/Feed/Feed";
import MiniPost from "@/components/Sidebar/MiniPost/MiniPost";
import styles from "./Home.module.scss";

export default function HomePage({ lng }: any) {
  return (
    <div className={styles.homePage}>
      <main className={styles.mainHome}>
        <Feed lng={lng} />
      </main>
    </div>
  );
}
