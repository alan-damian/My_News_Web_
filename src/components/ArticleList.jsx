import PropTypes from 'prop-types';
import Article from './Article.jsx';

const ArticleList = ({ articles }) => {
  const listaArticulos = articles.map((article, index) => (
    <li key={index}>
      <Article article={article} />
    </li>
  ));

  return (
    <ul>
      {listaArticulos}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ArticleList;