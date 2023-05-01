function Article(props) {
  const { title, date = "January 1, 1970", review } = props;
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{review}</p>
    </article>
  );
}

export default Article;
