import React, { useState } from 'react';
import { Link,  } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { useNavigate } from 'react-router-dom';
import localforage from 'localforage';

const AddEventScreen = () => {
  // const { id: eventId } = useParams();

  let navigate = useNavigate();

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

    const tickets = [
      {
        type: 'Regular',
        price: ticketRegularPrice,
      },
      {
        type: 'VIP',
        price: ticketVipPrice,
      },
    ];
    const newEvent = {
      _id: Date.now(), // Generate a unique ID for the new event
      eventName,
      tickets,
      ticketRegularPrice,
      ticketVipPrice,
      posterImage,
      eventDescription,
      dateFrom,
      dateTo,
      hostName,
      eventVenue,
      maximumNumber,
      isHighlighted,
    };

    // Get the existing events from local storage
    // Get the existing events from localforage
  const existingEvents = await localforage.getItem('events') || [];

  // Add the new event to the existing events
  existingEvents.push(newEvent);

  // Save the updated events to localforage
  await localforage.setItem('events', existingEvents);

  alert('Event added successfully');
  navigate('/admin');
  };

  return (
    <>
      <Link to="/admin" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Add Event</h1>
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
            Add Event
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default AddEventScreen;
