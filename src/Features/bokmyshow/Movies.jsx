import React from 'react';
import { useGetBookmyshowApiQuery } from '../../services/BookmyshowApi';
function Movies() {
    var { isLoading,data } =useGetBookmyshowApiQuery();
    console.log(isLoading)
    console.log(data);
  return (
    <div>
        { isLoading && <h1>Loading......</h1> }       
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4">
            { !isLoading && data?.map((mov)=>{
            return <div class="col p-0 m-2 rounded">
            <div class="card h-100">
              <img src={mov.movieImage} style={{height:"300px"}} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">{mov.movieTitle}</h5>
                <p class="card-text">{mov.movieCensor}</p>
                <p class="card-text">{mov.releaseDate}</p>
              </div>
            </div>
          </div>
        }) }
        </div>
    </div>
  )
};
export default Movies;