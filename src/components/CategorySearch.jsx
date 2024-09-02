import { useState, useEffect } from 'react';
import axios from 'axios';
import config  from '../API/config.js';
import './CategorySearch.module.css';

const { apiUrl, apiKey } = config;

// eslint-disable-next-line react/prop-types
const CategorySearch = ({ category }) => {
  const language = 'en';
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      if (category !== '') {
        const response = await axios.get(`${apiUrl}/top-headlines?category=${category}&language=${language}&apiKey=${apiKey}`);
        setNews(response.data.articles);
      }
    };
    fetchNews();
  }, [category]);


  return (
    <div>
    
      <h2>{category} news</h2>
      
      <ul>
        {news.map((article) => (
          
          <li key={article.title}>



            <div className="card" >
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
              </div>
            </div>






            <h3>{article.author}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySearch;