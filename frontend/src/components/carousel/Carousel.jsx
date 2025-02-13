import React from 'react';
import './Carousel.css';

import foodImg from '../../assets/foodImages/about.png'
import foodimg3 from '../../assets/foodImages/whoweare.png'
import burgerImg from '../../assets/foodImages/burger4.png'
import dessertImg from '../../assets/foodImages/glassSweetbg.png';

import Header from '../../Pages/header/Header';


const Carousel = () => {
  return (
    <div className="carouselContainer">
      <Header/>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">  
       <div className="banner-item">

        <div className="banner-item1">
            <div className="upperImg">
            <img src={burgerImg} alt="" id='img1'/>
            </div>
            <div className="textContent">
            <p>Taste Flavours from <br />Around the world</p>
              <button>Explore Menu</button>
              <p id='text2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Rerum quisquam at odit aut eligendi architecto sint doloremque quas, <br /> perferendis animi?</p>
            </div>
           
        </div>
       </div>
        </div>
        <div className="carousel-item">
        <div className="banner-item">
       
        <div className="banner-item2">
           <div className="content2">
            <p id='content2-text1'>Making your life sweeter </p>
            <p> one bite at a time</p>
            <div className="imageItem">
            <button>Order now</button>
            <img src={dessertImg}  alt="" />
            </div>
           
           </div>
        </div>
        </div>
            
          {/* <img src={img2} className="d-block w-75" alt="Second slide" style={{height:"80vh"}}/> */}
        </div>
        <div className="carousel-item">
        <div className="banner-item">
        
        <div className="banner-item3">
            <img src={foodimg3} alt="about" />
        
       <div className="content">
           <p className='title'>It's not just Food, It's an Experiance</p>
            <button>Explore</button>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat nobis debitis amet aut! Doloremque accusamus voluptatem dignissimos nam minima tempora expedita sit.
            </p>
       </div>
       </div>
        </div>
          {/* <img src={img3} className="d-block w-75" alt="Third slide" style={{height:"80vh"}}/> */}
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
  );
};

export default Carousel;
