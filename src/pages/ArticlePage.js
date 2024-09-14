import { useParams } from "react-router-dom";

const ArticlePage = () => {
  const { articleId } = useParams();
  console.log(articleId);
  return <h1>This is the Article Page with id: {articleId}</h1>;
};

export default ArticlePage;
