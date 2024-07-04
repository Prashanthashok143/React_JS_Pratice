import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PasswordChecker = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [validated, setValidated] = useState(false);

  const validatePassword = () => {
    const errors = [];

    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("Password must contain at least one uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("Password must contain at least one lowercase letter");
    }
    if (!/[0-9]/.test(password)) {
      errors.push("Password must contain at least one number");
    }
    if (!/[!@#$%^&*]/.test(password)) {
      errors.push("Password must contain at least one special character");
    }
    if (password !== confirmPassword) {
      errors.push("Passwords do not match");
    }

    setErrors(errors);

    return errors.length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);

    if (validatePassword()) {
      alert('Password is valid');
      // You can proceed with form submission or further processing here
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isInvalid={validated && errors.length > 0}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid password.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="confirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          isInvalid={validated && errors.length > 0}
          required
        />
        <Form.Control.Feedback type="invalid">
          Passwords must match.
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

      {validated && errors.length > 0 && (
        <Alert variant="danger" className="mt-3">
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </Alert>
      )}
    </Form>
  );
};

export default PasswordChecker;
