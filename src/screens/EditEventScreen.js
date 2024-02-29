import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { useNavigate } from 'react-router-dom';
import localforage from 'localforage';

const EditEventScreen = () => {
  const { id: eventId } = useParams();
  const navigate = useNavigate();

  const [eventName, setEventName] = useState('');
  const [ticketRegularPrice, setTicketRegularPrice] = useState(0);
  const [ticketVipPrice, setTicketVipPrice] = useState(0);
  const [posterImage, setPosterImage] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [hostName, setHostName] = useState('');
  const [eventVenue, setEventVenue] = useState('');
  const [maximumNumber, setMaximumNumber] = useState(0);
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    localforage.getItem('events').then((events = []) => {
      const foundEvent = events.find((event) => event._id === Number(eventId));

      if (foundEvent) {
        setEventName(foundEvent.eventName);
        setTicketRegularPrice(foundEvent.ticketRegularPrice);
        setTicketVipPrice(foundEvent.ticketVipPrice);
        setPosterImage(foundEvent.posterImage);
        setEventDescription(foundEvent.eventDescription);
        setDateFrom(foundEvent.dateFrom);
        setDateTo(foundEvent.dateTo);
        setHostName(foundEvent.hostName);
        setEventVenue(foundEvent.eventVenue);
        setMaximumNumber(foundEvent.maximumNumber);
        setIsHighlighted(foundEvent.isHighlighted);
      }
    });
  }, [eventId]);

  const uploadFileHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result
        .replace('data:', '')
        .replace(/^.+,/, '');
      setPosterImage(base64String);
    };
    reader.readAsDataURL(file);
  };

const submitHandler = async (e) => {
    e.preventDefault();
    const updatedEvent = {
      _id: Number(eventId),
      eventName,
      ticketRegularPrice,
      ticketVipPrice,
      posterImage,
      eventDescription,
      dateFrom,
      dateTo,
      hostName,
      eventVenue,
      maximumNumber,
    };

    localforage.getItem('events').then((events = []) => {
      const eventIndex = events.findIndex(
        (event) => event._id === Number(eventId)
      );
      if (eventIndex !== -1) {
        events[eventIndex] = updatedEvent;
        localforage.setItem('events', events);
        alert('Event updated successfully');
        navigate('/admin');
      }
    });
  };

  return (
    <>
      <Link to="/admin" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Event</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="eventName" className="my-2">
            <Form.Label>Event Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter event name"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="isHighlighted" className="my-2">
            <Form.Check
              type="checkbox"
              label="Highlight event"
              checked={isHighlighted}
              onChange={(e) => setIsHighlighted(e.target.checked)}
              className="form-check"
            />
            <Form.Text className="form-text text-muted">
              Checking this will make the event appear on top of the page.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="ticketRegularPrice" className="my-2">
            <Form.Label>Ticket Regular Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter regular ticket price"
              value={ticketRegularPrice}
              onChange={(e) => setTicketRegularPrice(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="ticketVipPrice" className="my-2">
            <Form.Label>Ticket VIP Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter VIP ticket price"
              value={ticketVipPrice}
              onChange={(e) => setTicketVipPrice(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="posterImage" className="my-2">
            <Form.Label>Poster Image</Form.Label>
            <Form.Control
              type="file"
              label="Choose file"
              onChange={uploadFileHandler}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="eventDescription" className="my-2">
            <Form.Label>Event Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter event description"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="dateFrom" className="my-2">
            <Form.Label>Date From</Form.Label>
            <Form.Control
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="dateTo" className="my-2">
            <Form.Label>Date To</Form.Label>
            <Form.Control
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="hostName" className="my-2">
            <Form.Label>Host Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter host name"
              value={hostName}
              onChange={(e) => setHostName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="eventVenue" className="my-2">
            <Form.Label>Event Venue</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter event venue"
              value={eventVenue}
              onChange={(e) => setEventVenue(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="maximumNumber" className="my-2">
            <Form.Label>Maximum Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter maximum number"
              value={maximumNumber}
              onChange={(e) => setMaximumNumber(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary" className="my-2">
            Update
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default EditEventScreen;
