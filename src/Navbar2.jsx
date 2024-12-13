import React from 'react';
function Navbar2() {
  return (
    <div>
        <div id="carouselExampleAutoplaying" class="carousel slide w-100" style={{height:'250px'}} data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="2000">
              <img src="https://wallpaperaccess.com/full/1892755.jpg" class="d-block w-100" height={'250px'} alt="..."/>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src="https://wallpaperset.com/w/full/b/3/3/436108.jpg" class="d-block w-100" height={'250px'}  alt="..."/>
            </div>
            <div class="carousel-item" data-bs-interval="1000">
              <img src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2014/09/tech-change-world.jpg" class="d-block w-100" height={'250px'}  alt="..."/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
    </div>
  )
};
export default Navbar2
