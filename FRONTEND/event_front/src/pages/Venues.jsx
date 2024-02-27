
import seat from '/Users/dharanidharansenthilkumar/Projects/event_management/FRONTEND/event_front/src/assets/images/audience.png';
import { useState } from 'react';
import { BsHeart, BsFillHeartFill } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';

const venuesData = [
  { id: 1, name: 'Venue 1', location: 'City A', capacity: 100, imgUrl: 'https://via.placeholder.com/150?text=Venue1' },
  { id: 2, name: 'Venue 2', location: 'City B', capacity: 150, imgUrl: 'https://via.placeholder.com/150?text=Venue2' },
  { id: 3, name: 'Venue 3', location: 'City C', capacity: 200, imgUrl: 'https://via.placeholder.com/150?text=Venue3' },
  // Add more venue data as needed
];

const VenueCard = ({ venue, onAddToWishlist }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);

  const handleAddToWishlist = () => {
    setIsInWishlist(!isInWishlist);
    onAddToWishlist(venue);
  };

  return (
    <div className="card">
      {/* Bootstrap card image */}
      <img src={venue.imgUrl} className="card-img-top" alt={venue.name} />

      <div className="card-body">
        <h5 className="card-title d-flex align-items-center justify-content-center">{venue.name}</h5>
        <p className="card-text d-flex align-items-center justify-content-center">Location: {venue.location}</p>
        <p className="card-text"><img src={seat} height={20} width={20} ></img>{venue.capacity}</p>

        {/* Heart icon for wishlist */}
        <button
          className={`btn btn-link ${isInWishlist ? 'text-danger' : ''}`}
          onClick={handleAddToWishlist}
        >
          {isInWishlist ? <BsFillHeartFill /> : <BsHeart />}
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [venues, setVenues] = useState(venuesData);
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (venue) => {
    setWishlist([...wishlist, venue]);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Event Venues</h1>
      <div className="row">
        {venues.map((venue) => (
          <div key={venue.id} className="col-md-4 mb-4">
            <VenueCard venue={venue} onAddToWishlist={addToWishlist} />
          </div>
        ))}
      </div>

      <h2 className="mt-5">Wishlist</h2>
      {wishlist.length > 0 ? (
        <ul>
          {wishlist.map((wishlistItem) => (
            <li key={wishlistItem.id}>{wishlistItem.name}</li>
          ))}
        </ul>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default App;
