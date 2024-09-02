import PropTypes from 'prop-types';
import Article from './Article.jsx';

const ArticleList = ({ articles }) => {
  return (
    <ul>
      {articles.map((article, index) => (
        <li key={index}>
          <Article article={article} />
        </li>
      ))}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ArticleList;