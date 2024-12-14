import React from 'react';
function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a href="https://in.bookmyshow.com/" class="text-decoration-none"><h1 style={{color:'red',textShadow:'0 0 10px rgba(248, 50, 50, 0.5),0 0 20px rgba(228, 34, 34, 0.5),0 0 30px rgba(249, 45, 45, 0.5),0 0 40px rgba(255, 0, 0, 0.5),0 0 50px rgba(255, 0, 0, 0.5)'}}>BookMyShow</h1></a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" style={{listStyle:'none'}}>
              <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item" style={{listStyle:'none'}}>
                <a class="nav-link" href="/movies">Movies</a>
              </li>
              <li class="nav-item" style={{listStyle:'none'}}>
                <a class="nav-link" href="/events">Events</a>
              </li>
              <li class="nav-item" style={{listStyle:'none'}}>
                <a class="nav-link" href="/addmovies">AddMovie</a>
              </li>
              <li class="nav-item" style={{listStyle:'none'}}>
                <a class="nav-link" href="/addevents">AddEvent</a>
              </li>
            </ul>  
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </nav>
    </div>
  )};
export default Navbar;
