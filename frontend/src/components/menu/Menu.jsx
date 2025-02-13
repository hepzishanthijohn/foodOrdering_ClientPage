import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://restaurantwebsite-mernstack-1.onrender.com/api/products/getAllProducts')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <section className='menu' id='menu'>
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">POPULAR DISHES</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, iusto dolorem! Voluptatibus ipsum nam mollitia architecto. Soluta pariatur eius et recusandae veritatis. Quasi, et molestias!</p>
        </div>

        <div className="dishes_container">
          {loading && <div className="spinner"></div>}
          {error && <p>Error loading menu: {error.message}</p>}
          
          {/* Skeleton Loader */}
          {loading && (
            <div>
              {Array(5).fill().map((_, index) => (
                <div className="card skeleton-card" key={index}>
                  <div className="skeleton-image"></div>
                  <div className="skeleton-title"></div>
                  <div className="skeleton-category"></div>
                </div>
              ))}
            </div>
          )}

          {!loading && !error && data.length > 0 && (
            data.map((element) => (
              <div className="card" key={element._id}>
                <Link to={`/foodDetail/${element.id}`}>
                  <img src={element.image_url} alt={element.title} />
                </Link>
                <h3>{element.title}</h3>
                <button>{element.category}</button>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

 

export default Menu;
