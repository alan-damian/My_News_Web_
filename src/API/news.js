import api from './api.js';

/**
 * News API client
 */
const News = {
  /**
   * Fetch news by category
   * @param {string} category - News category
   * @returns {Promise<News[]>} - Promise that resolves with an array of news
   */
  async getNews(category) {
    try {
      const response = await api.get(`/news/${category}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching news: ${error}`);
      throw error;
    }
  },
};

export default News;