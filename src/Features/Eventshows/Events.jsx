import React, { useEffect } from 'react';
import { useGetEventsQuery, useLazyGetEventsQuery } from '../../services/EventsApi';
function Events() {
    var{isLoading,data}=useGetEventsQuery()
    var[EventFn]=useLazyGetEventsQuery()
    useEffect(()=>{EventFn()},[EventFn]);
    console.log(isLoading)
    console.log(data);
  return (
    <div>
      { isLoading && <h1>Loading......</h1> }  
      { !isLoading && data?.map((Ev)=>{
            return<div style={{ display: 'flex', flexGrow: 2, flexWrap: 'wrap', justifyContent: 'space-between', padding: '20px', }}>
                <div style={{ width: '300px',borderRadius: '10px',overflow: 'hidden',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff', margin: '20px'}}>
                        <img src={Ev.image} alt="" style={{width:'100%', height:'200px', objectFit:'cover'}} />
                        <div style={{padding:'15px'}}>
                            <h2 style={{padding:'10px',marginBottom:'10px',color:'#333'}}>{Ev.title}</h2>
                            <b style={{fontSize:'1rem',color:'#444',lineHeight:'1.5'}}>Price:-{Ev.price}</b>
                            <p style={{fontSize:'1rem',color:'#555',lineHeight:'1.5'}}>EventData:-{Ev.eventdate}</p>
                        </div>
                </div>
            </div>     
      } ) }  
    </div>
  )}
export default Events;
//  style={{backgroundImage:'https://images.pexels.com/photos/1406506/pexels-photo-1406506.jpeg?cs=srgb&dl=animal-avian-birds-1406506.jpg&fm=jpg'}}