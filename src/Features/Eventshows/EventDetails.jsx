import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetEventDetailsQuery } from '../../services/EventsApi';
function EventDetails() {
    var {id}=useParams()
    var{isLoading,data}=useGetEventDetailsQuery(id);
    console.log(isLoading,data);
  return (
    <div>
      { isLoading && <h1>Loading.........</h1> }
      <div>
        <div>
          <img src={data?.image} alt="" />
          <h1>{data?.title}</h1>
          <h5>{data?.category}</h5>
          <b>{data?.venue}</b> <br />
          <span>{data?.description}</span>
          <h6>Date:-{data?.eventdate}</h6>
          <h6>Languages:-{data?.language}</h6>
          <i>Location:-{data?.location}</i>
          <h6>Price:-{data?.price}</h6>
        </div>
      </div>
    </div>
  )}
export default EventDetails;