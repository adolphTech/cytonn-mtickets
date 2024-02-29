import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PosterCard from '../components/PosterCard';
import HrLine from '../components/HrLine';
import moment from 'moment';
import localforage from 'localforage';
import Loader from '../components/Loader';
import initData from '../assets/init.json';

const HomeScreen = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    localforage.getItem('events').then((storedEvents) => {
      if (storedEvents) {
        setEvents(storedEvents);
        setLoading(false);
      } else {
        // Use the imported data
        localforage.setItem('events', initData).then(() => {
          // Set the events state
          setEvents(initData);
          setLoading(false);
        });
      }
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="container mx-auto">
        <HrLine title="Highlighted Events" />

        <div className="row mb-2">
          {events
            .filter((event) => event.isHighlighted)
            .map((event) => (
              <div className="col-md-4" key={event._id}>
                <Link to={`/${event._id}`}>
                  <PosterCard
                    imgLink={`data:image/png;base64,${event.posterImage}`}
                    title={event.eventName}
                    location={event.eventVenue}
                    date={moment(event.dateFrom).format('DD MMM').toUpperCase()}
                    id={event._id}
                  />
                </Link>
              </div>
            ))}
        </div>

        <HrLine title="Upcoming Events" />

        <div className="row mt-1">
          {events.map((event) => (
            <div className="col-md-4" key={event._id}>
              <Link to={`/${event._id}`}>
                <PosterCard
                  imgLink={`data:image/png;base64,${event.posterImage}`}
                  title={event.eventName}
                  location={event.eventVenue}
                  date={moment(event.dateFrom).format('DD MMM').toUpperCase()}
                  id={event._id}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;