import Article from "../Article/Article";
import style from "./NewsList.module.css";

export default function NewsList({ news }) {
  return (
    <ul className={style.newsList}>
      {news.map((post, i) => {
        return (
          <li key={post.id ? post.id : i}>
            <Article post={post} />
          </li>
        );
      })}
    </ul>
  );
}
