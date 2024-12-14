import React from 'react';
import { useGetmoviesdetailsQuery } from '../../services/BookmyshowApi';
import { useParams } from 'react-router-dom';

function MovieDetails() {
    var {id}=useParams();
    var {isLoading,data}=useGetmoviesdetailsQuery(id);
    console.log(isLoading);
    console.log(data); 
  return (
    <div>
      { isLoading && <h1>Loading.......</h1> }     
      <div>
        <div>
            <img  src={data?.movieImage} alt="" />
            <h1>{data?.movieTitle}</h1>
            <b>{data?.movieCensor}</b> &nbsp;&nbsp;
            <b>{data?.movieFormats}</b>
            <h5>{data?.movieDuration}</h5>
            <b>{data?.movieType}</b>
            <h6>{data?.releaseDate}</h6>
            <p>{data?.aboutUs}</p>
            <i>Language:-{data?.language}</i> <br />
            <b>Price:-{data?.price}</b> <br />
            <a href='http://bookmyshow.com' className='btn btn-success'>Add Ticket</a>
        </div>
      </div>
    </div>
  )};
export default MovieDetails;