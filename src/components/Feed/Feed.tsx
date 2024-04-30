import Post from "../Post/Post";
import styles from "./Feed.module.scss";

const Feed = ({lng}:any) => {
  return (
    <div className={styles.container}>
      <Post lng={lng}/>
      <Post lng={lng}/>
    </div>
  );
};

export default Feed;
