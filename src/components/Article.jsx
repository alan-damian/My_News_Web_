import PropTypes from 'prop-types';

function Article(props) {
  if (!props.article) {
    throw new Error('Article prop is required and cannot be null or undefined');
  }

  return (
    <div>
      <h2>{props.article.title}</h2>
      <p>{props.article.description}</p>
    </div>
  );
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string // Remove isRequired if description is optional
  }).isRequired
};

export default Article;