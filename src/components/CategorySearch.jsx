import { useState, useEffect } from 'react';
import axios from 'axios';
import './CategorySearch.module.css';

// eslint-disable-next-line react/prop-types
const CategorySearch = ({ category }) => {
  const language = 'en';
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      if (category !== '') {
        try {
          const response = await axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&language=${language}&apiKey=5ae5b03f3b09491cb41c58b5a9bcf0ce`);
          if (response.status === 200) {
            setNews(response.data.articles);
          } else {
            setError('Error al obtener noticias');
          }
        // eslint-disable-next-line no-unused-vars
        } catch (error) {
          setError('Error al obtener noticias');
        }
      }
    };
    fetchNews();
  }, [category]);

  return (
    <div>
      <h2>{category} news</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {news.map((article) => (
            <li key={article.url}> 
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                </div>
              </div>
              <h3>{article.author}</h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategorySearch;