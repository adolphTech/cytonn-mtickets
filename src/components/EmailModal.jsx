import { Modal, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import Loader from './Loader';

const EmailModal = ({ show, onHide, onSubmit, isLoading }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(email);
    setEmail('');
  };

  return (
    <Modal show={show} onHide={onHide}>
      {isLoading ? (
        <>
          <Loader />
          <p>Sending email...</p>
        </>
      ) : (
        <>
          <Modal.Header closeButton>
            <Modal.Title>Enter your email</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Form.Text className="text-muted mt-3">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit" className='mt-3'>
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </>
      )}
    </Modal>
  );
};

export default EmailModal;