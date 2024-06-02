import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './SignupLogin.css';

const SignupLogin = () => {
  const [isSignup, setIsSignup] = useState(true);

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    
    <Container className="mt-5">
      
      <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
      <Form>
        {isSignup && (
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
        )}
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          {isSignup ? 'Sign Up' : 'Login'}
        </Button>
      </Form>
      <Button variant="link" onClick={toggleForm}>
        {isSignup ? 'Already have an account? Login' : 'Don’t have an account? Sign Up'}
      </Button>
    </Container>
  );
};

export default SignupLogin;
