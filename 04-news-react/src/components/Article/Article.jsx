import style from "./Article.module.css";

export default function Article({ post }) {
  return (
    <a href={post.url} target="_blank">
      <article className={style.article}>
        <section className={style.imageSection}>
          <img
            src={post.image ? post.image : null}
            alt={post.imageCaption}
            className={style.img}
          />
          <span className={style.cc}>{post.imageCC}</span>
        </section>
        <section className={style.textSection}>
          <h3 className={style.title}>{post.title}</h3>
          <div className={style.catDate}>
            <span className={style.span}>{post.section}</span>
            <span className={style.span}>{post.publishedDate}</span>
          </div>
          <p className={style.description}>{post.abstract}</p>
        </section>
      </article>
    </a>
  );
}
