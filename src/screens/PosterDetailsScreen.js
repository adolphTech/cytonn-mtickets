import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PosterCarousel from '../components/PosterCarousel';
import TicketTable from '../components/TicketTable';
import localforage from 'localforage';

const PosterDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    localforage.getItem('events').then((storedEvents) => {
      const foundEvent = storedEvents.find((event) => event._id === Number(id));
      setEvent(foundEvent);
    });
  }, [id]);

  return (
    <div className='poster-details-container'>
      {event && <PosterCarousel event={event} />}
      {event && <TicketTable tickets={event.tickets} event={event} />}
    </div>
  );
};

export default PosterDetails;