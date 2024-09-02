import { useState } from 'react';
import CategorySearch from './CategorySearch';
import logo from '../assets/logo.png';
import styles from './Header.module.css';

const Header = () => {
  const [category, setCategory] = useState('');

  const handleCategoryChange = (e) => {
    setCategory(e.target.getAttribute('value'));
  };

  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <a id='logo' href='#'><img  src={logo} alt='logo'></img></a>
        <ul className="nav nav-tabs">
          <li className="nav-item dropdown mx-1">
            <a className="nav-link" data-bs-toggle="dropdown" href="/" role="button" aria-expanded="false">Category</a>
            <ul className="dropdown-menu bg-info-subtle">
              <li role="button" value="business" onClick={handleCategoryChange}>business</li>
              <li role="button" value="entertainment" onClick={handleCategoryChange}>entertainment</li>
              <li role="button" value="general" onClick={handleCategoryChange}>general</li>
              <li role="button" value="health" onClick={handleCategoryChange}>health</li>
              <li role="button" value="science" onClick={handleCategoryChange}>science</li>
              <li role="button" value="sports" onClick={handleCategoryChange}>sports</li>
              <li role="button" value="technology" onClick={handleCategoryChange}>technology</li>
            </ul>
          </li>

        </ul>
      </nav>
      <CategorySearch category={category} />
    </header>
  );
};

export default Header;