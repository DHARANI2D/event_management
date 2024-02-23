// OrderDetails.js
import { Card, ProgressBar } from 'react-bootstrap';
import { BsCheck, BsClock, BsDot } from 'react-icons/bs';

const OrderDetails = () => {
  return (
    <Card style={{ margin: '20px' }}>
      <Card.Body>
        <Card.Title>Order Details</Card.Title>

        {/* Display In-Progress Orders */}
        <div>
          <h5>In-Progress Orders</h5>
          <ul>
            <li>
              <BsDot /> <BsClock color="orange" /> Order #123 - Item A
              <br />
              <small>Date Booked: 2022-03-01, Event Date: 2022-05-15</small>
              <ProgressBar now={25} label="Booked" variant="warning" />
            </li>
            <li>
              <BsDot /> <BsClock color="orange" /> Order #456 - Item B
              <br />
              <small>Date Booked: 2022-02-15, Event Date: 2022-04-10</small>
              <ProgressBar now={50} label="Scheduled" variant="info" />
            </li>
            {/* Add more in-progress orders as needed */}
          </ul>
        </div>
<br />
        {/* Display Completed Orders */}
        <div>
          <h5>Completed Orders</h5>
          <ul>
            <li>
              <BsDot /> <BsCheck color="green" /> Order #789 - Item C
              <br />
              <small>Date Booked: 2022-01-10, Event Date: 2022-03-25</small>
              <ProgressBar now={100} label="Celebrated" variant="danger" />
            </li>
            <li>
              <BsDot /> <BsCheck color="green" /> Order #101 - Item D
              <br />
              <small>Date Booked: 2022-04-05, Event Date: 2022-06-20</small>
              <ProgressBar now={100} label="Celebrated" variant="danger" />
            </li>
            {/* Add more completed orders as needed */}
          </ul>
        </div>

        {/* Add more order details or components as needed */}
      </Card.Body>
    </Card>
  );
};

export default OrderDetails;
