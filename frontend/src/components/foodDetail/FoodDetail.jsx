import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './FoodDetail.css';
import Header from '../../Pages/header/Header';
import { useUserContext } from '../../context/UserContext'; // Import the custom hook
import Footer from '../footer/Footer';

const FoodDetail = () => {
  const { id } = useParams();
  const { addItemToCart } = useUserContext(); // Use the function from context
  const [foodItem, setFoodItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cartMessage, setCartMessage] = useState("");

  useEffect(() => {
    axios
      .get(`https://restaurantwebsite-mernstack-1.onrender.com/api/products/getProductById/${id}`)
      .then(response => {
        setFoodItem({
          id: response.data.data._id,
          title: response.data.data.title,
          price: response.data.data.price,
          category: response.data.data.category,
          image_url: response.data.data.image_url,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
          ingredients: ["Lorem ipsum dolor", "Sit amet", "Consectetur adipiscing", "Vestibulum ac tortor", "Nulla facilisi"],
        });
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    addItemToCart(foodItem, quantity);
    setCartMessage(`${foodItem.title} added to your cart!`);
    setTimeout(() => setCartMessage(""), 3000); // Remove the message after 3 seconds
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    if (value > 0) setQuantity(value);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading food details: {error.message}</p>;

  return (
    <>
      <Header />
      <div className="food-detail-container">
        <div className="food-detail">
          <div className="food-image">
            <img src={foodItem.image_url} alt={foodItem.title} />
          </div>
          <div className="food-info">
            <h2>{foodItem.title}</h2>
            <p className="category">{foodItem.category}</p>
            <h3 className="price">${foodItem.price}</h3>

            <div className="quantity-selector">
              <label htmlFor="quantity">Quantity:</label>
              <input 
                type="number" 
                id="quantity" 
                value={quantity} 
                onChange={handleQuantityChange} 
                min="1" 
              />
            </div>

            <button className="add-to-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
            {cartMessage && <p className="cart-message">{cartMessage}</p>}

            <div className="food-description">
              <h4>Description:</h4>
              <p>{foodItem.description}</p>
            </div>

            <div className="additional-info">
              <h4>Ingredients:</h4>
              <ul>
                {foodItem.ingredients?.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li> 
                ))}
              </ul>
              <h4>Estimated Delivery Time:</h4>
              <p>30-40 minutes</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default FoodDetail;
