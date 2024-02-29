import { Table, Form } from 'react-bootstrap';
import { useState } from 'react';
import EmailModal from './EmailModal';
import emailjs from '@emailjs/browser';
import QRCode from 'qrcode';
import Loader from './Loader';


const TicketTable = ({ tickets,event }) => {
  const [quantity, setQuantity] = useState(Array(tickets.length).fill(0));

  const [modalShow, setModalShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const calculateTotalQuantity = () => {
    return quantity.reduce((total, qty) => total + qty, 0);
  };

  const handleQuantityChange = (index, event) => {
    const newQuantity = [...quantity];
    newQuantity[index] = Number(event.target.value);
  
    // Calculate the total quantity
    const totalQuantity = newQuantity.reduce((total, qty) => total + qty, 0);
  
    // If the total quantity is more than 5, show an alert and return
    if (totalQuantity > 5) {
      alert('You cannot reserve more than 5 tickets in total');
      return;
    }
  
    setQuantity(newQuantity);
  };
  const calculateSubTotal = () => {
    return tickets.reduce(
      (total, ticket, index) => total + ticket.price * quantity[index],
      0
    );
  };

  const handleEmailSubmit = async (email) => {
    // Set loading state
    setIsLoading(true);
    const qrCodeDataURL = await QRCode.toDataURL(`Email: ${email}, Event ID: ${event.eventName}`);

  
    // Send an email notification
    emailjs
      .send(
        'service_jcunm4v',
        'template_uygm3ad',
        {
          from_name: 'Adolph Tickets',
          to_name: 'Adolph Tickets Customer',
          from_email: 'adolphjohn0@gmail.com',
          to_email: email,
          message: `
          <div style="font-family: Arial, sans-serif;">
            <h1>Your reservation was successful.</h1>
            <p>Thank you for choosing our service.</p>
            <table style="width: 100%;">
              <tr>
                <td style="vertical-align: top;">
                  <h2>${event.eventName}</h2>
                  <p>From: ${event.dateFrom}</p>
                  <p>To: ${event.dateTo}</p>
                  <p>Venue: ${event.eventVenue}</p>
                  <p>Quantity: ${quantity}</p>
                </td>
                <td style="vertical-align: top;">
                  <img src="${qrCodeDataURL}" alt="QR Code" />
                </td>
              </tr>
            </table>
          </div>
        `,
        },
        "C8bhzjgmJwFjopJkO"
      )
      .then(
        () => {
          alert('Thank you. Your reservation was successful.');
          // Close the modal
          setModalShow(false);
          setIsLoading(false);
        },
        (error) => {
          console.error(error);
          alert('Ahh, something went wrong. Please try again.');
          setIsLoading(false);
        }
      );
  };

  return (
    <div className="mt-5 shadow" id="buy-ticket">
        {/* {isLoading && <Loader />} */}
      <div className="row p-4 buy-ticket">
        <div className="col-sm-12">
          <h3 className="text-center">Tickets</h3>
          <hr />
          <Table
            responsive="sm"
            bordered
            size="xl"
            className="shadow mt-5 text-center"
          >
            <thead>
              <tr>
                <th className="p-3">Type</th>
                <th className="p-3">Price</th>
                <th className="p-3">Quantity</th>
                <th className="p-3">Sub-Total</th>
              </tr>
            </thead>
            <tbody>
            {tickets.map((ticket, index) => (
  <tr key={index}>
    <td>{ticket.type}</td>
    <td>${ticket.price}</td>
    <td>
      <Form.Select
        size="lg"
        aria-label="Default select example"
        onChange={(event) => handleQuantityChange(index, event)}
      >
        {/* Generate options dynamically based on the remaining tickets */}
        {[...Array(6 - quantity.reduce((total, qty) => total + qty, 0)).keys()].map((option) => (
          <option key={option}>{option}</option>
        ))}
      </Form.Select>
    </td>
    <td>${ticket.price * quantity[index]}</td>
  </tr>
))}
            </tbody>
          </Table>
        </div>
        <div className="row pl-4 pr-4">
  <div className="col-sm-4 col-lg-4"></div>
  <div className="col-sm-4 col-lg-4"></div>
  <div className="col-sm-4 col-lg-4 border p-5 shadow">
    <div className="row">
      <div className="col-sm-12 col-lg-6">
        <h4 className="sub-total">Sub Total</h4>
      </div>
<div className="col-sm-12 col-lg-6">
        <h4 className="sub-total">${calculateSubTotal()}</h4>
      </div>
      <div className="col-sm-12 col-lg-6">
        <h5 className="total-quantity">Total Tickets: {calculateTotalQuantity()}</h5>
      </div>
      <button
        className="btn btn-primary btn-lg custom-button"
        onClick={() => setModalShow(true)}
      >
        Checkout
      </button>
      <EmailModal
        show={modalShow}
        onHide={() => setModalShow(false)}
                onSubmit={handleEmailSubmit}
                isLoading={isLoading}
      />
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default TicketTable;
