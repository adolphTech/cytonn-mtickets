import React from 'react';
import {Button, Carousel} from 'react-bootstrap';
import { MdShoppingCart } from "react-icons/md";
import moment from 'moment';

import './PosterCarousel.css';

const PosterCarousel = ({ event }) => {
  return (
    <div className="shadow">
      <div className="row p-4">
        <div className="col-md-6">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={`data:image/png;base64,${event.posterImage}`}
                alt="Event slide"
              />
            </Carousel.Item>
            {/* Add more Carousel.Item components if you have more images */}
          </Carousel>
        </div>

        <div className="col-md-6">
          <div className="event-details">
            <h2>{event.eventName}</h2>

            <hr />
            <div className="details pb-4">
              <p>
                <span className="label">From:</span> {moment(event.dateFrom).format('dddd, MMMM Do, YYYY, HH:mm')}
              </p>
              <p>
                <span className="label">To:</span> {moment(event.dateTo).format('dddd, MMMM Do, YYYY, HH:mm')}
              </p>
              <p>
                <span className="label">Venue:</span> {event.eventVenue}
              </p>
              <p>
                <span className="label">Host:</span> {event.hostName}
              </p>
              <p>
                <span className="label">Description:</span>
              </p>
              <p>
                {event.eventDescription}
              </p>
            </div>

            <Button variant="primary" size='md' className='w-100 custom-button' href="#buy-ticket"><MdShoppingCart /> Buy Ticket</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosterCarousel;