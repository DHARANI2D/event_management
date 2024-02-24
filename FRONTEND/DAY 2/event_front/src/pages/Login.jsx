import { Card, Button, Form, Container, Row, Col } from 'react-bootstrap';

const LoginPage = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6} className="mx-auto">
          <Card>
            <Card.Body>
              <Row>
                <Col md={6} className="text-center">
                  <img
                    src="your-image-url.jpg"
                    alt="Login Logo"
                    className="img-fluid"
                  />
                </Col>
                <Col md={6}>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit" block>
                      Login
                    </Button>

                    <Button
                      variant="danger"
                      type="button"
                      block
                      className="mt-2"
                    >
                      Login with Google
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
