// Login.js
import { Link } from 'react-router-dom';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import loginImage from '/Users/dharanidharansenthilkumar/Projects/event_management/event_front/src/assets/images/login2.jpg';
import Header from '../components/Brand';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    if (!email.trim()) {
      alert('Email is required');
      return;
    }

    if (!password.trim()) {
      alert('Password is required');
      return;
    }

    // Add your login logic here
    // For now, just log the email and password
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div><Header />
    <Row className="justify-content-center align-items-center min-vh-100 mt-1">
      {/* Card for Image */}
      <Col md={6}>
        <Card className="border-0">
          <Card.Body>
            <img src={loginImage} alt="Login Image" className="img-fluid" />
          </Card.Body>
        </Card>
      </Col>

      {/* Card for Credentials with Border */}
      <Col md={4}>
        <Card className="mx-auto border">
          <Card.Body>
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail" as={Col} md={12}>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" as={Col} md={12}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" />
              </Form.Group><br />

              <Button variant="primary" type="submit" className="d-flex align-items-center">
                Login
            </Button>
            </Form>
            <p className="mt-3">
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </div>
  );
};

export default Login;
