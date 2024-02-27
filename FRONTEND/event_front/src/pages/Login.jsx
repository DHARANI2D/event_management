// Login.js
import { Link } from 'react-router-dom';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import loginImage from '/Users/dharanidharansenthilkumar/Projects/event_management/FRONTEND/event_front/src/assets/images/login2.jpg';
import Header from '../components/Brand';
import Footer from '../components/Footer';

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
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const responseGoogleSuccess = (response) => {
    console.log('Google Login Success:', response);
  };

  const responseGoogleFailure = (error) => {
    console.error('Google Login Failure:', error);
  };

  return (
    <div>
      <Header />
      <Row className="justify-content-center align-items-center mt-1">
  <Col xs={6}>
    <Card className="border-0">
      <Card.Body>
        <img src={loginImage} alt="Login Image" className="img-fluid" />
      </Card.Body>
    </Card>
  </Col>

  <Col xs={6}>
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

          <div className="d-flex align-items-center justify-content-center">
            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </div>

          <div className="text-center mt-3">
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
            <GoogleLogin
              clientId="YOUR_GOOGLE_CLIENT_ID" 
              buttonText="Login with Google"
              onSuccess={responseGoogleSuccess}
              onFailure={responseGoogleFailure}
              cookiePolicy={'single_host_origin'}
              className="google-login-button"
            />
          </div>
        </Form>
      </Card.Body>
    </Card>
  </Col>
</Row>

      <Footer />
    </div>
  );
};

export default Login;
