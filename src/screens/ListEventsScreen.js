import React, { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import localforage from 'localforage';
import Loader from '../components/Loader';

const ListEventsScreen = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    localforage.getItem('events').then((storedEvents) => {
      if (storedEvents) {
        setEvents(storedEvents);
        setLoading(false);
      }
    });
  }, []);

  const deleteHandler = (id) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this event?'
    );
    if (confirmDelete) {
      const updatedEvents = events.filter((event) => event._id !== id);
      setEvents(updatedEvents);
      localforage.setItem('events', updatedEvents);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Events</h1>
        </Col>
        <Col className="text-end">
          <LinkContainer to={`/admin/addEvent`}>
            <Button className="btn-sm m-3">
              <FaEdit /> Create Event
            </Button>
          </LinkContainer>
        </Col>
      </Row>

      <Table stripped="true" hover responsive className="table-sm">
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Regular Price</th>
            <th>VIP Price</th>
            <th>Poster Image</th>
            <th>Date From</th>
            <th>Date To</th>
            {/* <th>Host Name</th> */}
            <th>Venue</th>
            <th>Max Number</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {events.map((event) => (
            <tr key={event._id}>
              <td>{event.eventName}</td>
              <td>${event.ticketRegularPrice}</td>
              <td>${event.ticketVipPrice}</td>
              <td>
                <td>
                  <img
                    src={`data:image/png;base64,${event.posterImage}`}
                    alt={event.eventName}
                    style={{
                      width: '40px',
                      height: '40px',
                      objectFit: 'cover',
                    }}
                  />
                </td>
              </td>
              <td>{event.dateFrom}</td>
              <td>{event.dateTo}</td>
              {/* <td className='fs-6 text-wrap'>{event.hostName}</td> */}
              <td className='fs-6 text-wrap'>{event.eventVenue}</td>
              <td>{event.maximumNumber}</td>
              <td>
                <LinkContainer to={`/admin/event/${event._id}/edit`}>
                  <Button variant="light" className="btn-sm mx-2">
                    <FaEdit />
                  </Button>
                </LinkContainer>

                <Button
                  variant="danger"
                  className="btn-sm"
                  onClick={() => deleteHandler(event._id)}
                >
                  <FaTrash style={{ color: 'white' }} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ListEventsScreen;