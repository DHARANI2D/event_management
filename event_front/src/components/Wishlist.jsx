// Wishlist.js
import React from 'react';
import { Card, Carousel } from 'react-bootstrap';

const Wishlist = () => {
  // Sample wishlist data (you can replace this with your wishlist data)
  const wishlistItems = [
    { id: 1, name: 'Item 1', image: 'https://via.placeholder.com/100', description: 'Description for Item 1' },
    { id: 2, name: 'Item 2', image: 'https://via.placeholder.com/100', description: 'Description for Item 2' },
    { id: 3, name: 'Item 3', image: 'https://via.placeholder.com/100', description: 'Description for Item 3' },
    { id: 4, name: 'Item 4', image: 'https://via.placeholder.com/100', description: 'Description for Item 4' },
    { id: 5, name: 'Item 5', image: 'https://via.placeholder.com/100', description: 'Description for Item 5' },
    // Add more wishlist items as needed
  ];

  return (
    <div>
      <h2>Wishlist</h2>
      <Carousel>
        {[...Array(Math.ceil(wishlistItems.length / 5))].map((_, index) => (
          <Carousel.Item key={index}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              {wishlistItems.slice(index * 5, (index + 1) * 5).map((item) => (
                <Card key={item.id} style={{ width: '18rem', margin: '0 10px' }}>
                  <Card.Img variant="top" src={item.image} alt={item.name} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Wishlist;
