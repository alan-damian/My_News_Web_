import { useState, useEffect } from 'react';
import ArticleList from '../components/ArticleList.jsx';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=5ae5b03f3b09491cb41c58b5a9bcf0ce');
      const data = await response.json();
      setArticles(data.articles);
      setLoading(false);
    };
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Last News</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ArticleList articles={articles} />
      )}
    </div>
  );
};

export default Home;