import { useState } from 'react';
import { Card, Button, Form, Col, Row } from 'react-bootstrap';
import NavbarComponent from '../components/NavbarComponent';
import OrderDetails from '../components/OrderDetails';
import Wishlist from '../components/Wishlist';
import FooterMain from '../components/FooterMain';

const UserProfile = () => {
  // Sample user data (you can replace this with your user data)
  const initialUserData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    mobile: '123-456-7890',
    phone: '987-654-3210',
    city: 'Sample City',
    profileImage: 'https://via.placeholder.com/150', // Placeholder image URL
  };

  const [userData, setUserData] = useState(initialUserData);
  const [isEditing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    // Perform save/update logic here (e.g., make an API call to update user data)
    setEditing(false);
    // For this example, we're not making an API call, just updating state
  };

  const handleCancelClick = () => {
    setEditing(false);
    // Reset user data to initial values on cancel
    setUserData(initialUserData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <NavbarComponent />
      <Row>
        {/* Left Card for User Profile */}
        <Col md={6}>
          <Card style={{ margin: '20px' }}>
            <Card.Img variant="top" src={userData.profileImage} alt="Profile" style={{ borderRadius: '50%', width: '150px', height: '150px', margin: 'auto' }} />
            <Card.Body>
              <Card.Title>User Profile</Card.Title>
              <Form>
                <Form.Group as={Row} controlId="formName">
                  <Form.Label column sm={4}>
                    Name:
                  </Form.Label>
                  <Col sm={8}>
                    {isEditing ? (
                      <Form.Control type="text" name="name" value={userData.name} onChange={handleInputChange} />
                    ) : (
                      <Form.Control plaintext readOnly defaultValue={userData.name} />
                    )}
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formEmail">
                  <Form.Label column sm={4}>
                    Email:
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control plaintext readOnly defaultValue={userData.email} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formMobile">
                  <Form.Label column sm={4}>
                    Mobile:
                  </Form.Label>
                  <Col sm={8}>
                    {isEditing ? (
                      <Form.Control type="text" name="mobile" value={userData.mobile} onChange={handleInputChange} />
                    ) : (
                      <Form.Control plaintext readOnly defaultValue={userData.mobile} />
                    )}
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPhone">
                  <Form.Label column sm={4}>
                    Phone:
                  </Form.Label>
                  <Col sm={8}>
                    {isEditing ? (
                      <Form.Control type="text" name="phone" value={userData.phone} onChange={handleInputChange} />
                    ) : (
                      <Form.Control plaintext readOnly defaultValue={userData.phone} />
                    )}
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formCity">
                  <Form.Label column sm={4}>
                    City:
                  </Form.Label>
                  <Col sm={8}>
                    {isEditing ? (
                      <Form.Control type="text" name="city" value={userData.city} onChange={handleInputChange} />
                    ) : (
                      <Form.Control plaintext readOnly defaultValue={userData.city} />
                    )}
                  </Col>
                </Form.Group>
              </Form>
              <div>
                {isEditing ? (
                  <>
                    <Button variant="primary" onClick={handleSaveClick}>
                      Save
                    </Button>
                    <Button variant="secondary" onClick={handleCancelClick} style={{ marginLeft: '5px' }}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button variant="info" onClick={handleEditClick}>
                    Edit
                  </Button>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Right Card for Order Details */}
        <Col md={6}>
          <OrderDetails />
        </Col>
      </Row>
      <Wishlist />
      <FooterMain />
    </div>
  );
};

export default UserProfile;
