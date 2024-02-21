// Register.js
import { Link } from 'react-router-dom';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import loginImage from '../assets/images/login.jpg';
import { useState } from 'react';
import Header from '../components/Brand';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    city: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Add your form submission logic here
      // For now, just log the form data
      console.log(formData);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newFormErrors = { ...formErrors };

    // Basic validation for each field
    if (!formData.name.trim()) {
      newFormErrors.name = 'Name is required';
      isValid = false;
    } else {
      newFormErrors.name = '';
    }

    if (!formData.email.trim()) {
      newFormErrors.email = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      newFormErrors.email = 'Enter a valid email address';
      isValid = false;
    } else {
      newFormErrors.email = '';
    }

    if (!formData.mobile.trim()) {
      newFormErrors.mobile = 'Mobile is required';
      isValid = false;
    } else if (!isValidMobile(formData.mobile)) {
      newFormErrors.mobile = 'Enter a valid mobile number';
      isValid = false;
    } else {
      newFormErrors.mobile = '';
    }

    if (!formData.password.trim()) {
      newFormErrors.password = 'Password is required';
      isValid = false;
    } else {
      newFormErrors.password = '';
    }

    if (formData.password !== formData.confirmPassword) {
      newFormErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    } else {
      newFormErrors.confirmPassword = '';
    }

    if (!formData.city.trim()) {
      newFormErrors.city = 'City is required';
      isValid = false;
    } else {
      newFormErrors.city = '';
    }

    setFormErrors(newFormErrors);
    return isValid;
  };

  const isValidEmail = (email) => {
    // Use a regular expression to check if the email format is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidMobile = (mobile) => {
    // Use a regular expression to check if the mobile number format is valid
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(mobile);
  };

  return (
    <div><Header />
    <Row className="justify-content-center align-items-center min-vh-100">
      {/* Card for Image */}
      <Col md={6}>
        <Card className="border-0">
          <Card.Body>
            {/* Use the imported image */}
            <img
              src={loginImage}
              alt="Register Image"
              className="img-fluid"
            />
          </Card.Body>
        </Card>
      </Col>

      {/* Card for Credentials */}
      <Col md={4}>
        <Card className="mx-auto">
          <Card.Body>
            <h2>Register</h2>
            <Form onSubmit={handleSubmit}>
              {/* Add form fields for registration */}
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!formErrors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!formErrors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicMobile">
                <Form.Label>Mobile number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your mobile number"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  isInvalid={!!formErrors.mobile}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.mobile}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  isInvalid={!!formErrors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.password}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label>Retype Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Retype password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  isInvalid={!!formErrors.confirmPassword}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.confirmPassword}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  isInvalid={!!formErrors.city}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.city}
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit">
                Register
              </Button><br />
            </Form>
            <p className="mt-3">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </div>
  );
};

export default Register;
