import Post from "../Post/Post";
import styles from "./Feed.module.scss";
import { articles } from "@/lib/articles";

const Feed = ({ lng }: any) => {
  return (
    <div className={styles.container}>
      {articles.map((article, index) => (
        <Post
          key={index}
          lng={lng}
          feed={article.feed}
          title={article.title}
          subtitle={article.subtitle}
          slug={article.slug}
          ns={article.translateNS}
          image={article.image}
        />
      ))}
    </div>
  );
};

export default Feed;
