// Home.js
import NavbarComponent from "../components/NavbarComponent";
import CarouselComponent from "../components/CarouselComponent"; 
import Menubar from "../components/Menubar";
import FeatureCard from '../components/FeatureCard';
import img1 from "../assets/images/calander.png";
import img2 from "../assets/images/celebrate.png";
import img3 from "../assets/images/quote.png";

const Home = () => {
  return (
    <div>
      <NavbarComponent />
      <CarouselComponent />
      <Menubar />
      <section id="features" className="py-5 bg-light">
        <div className="container py-5">
          <div className="row">
            {/* Use FeatureCard component for each card */}
            <div className="container mt-4">
              <div className="card" style={{ width: '18rem' }}>
                <img
                  className="card-img-top"
                  src="https://via.placeholder.com/100x180/?text=Image+cap"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <FeatureCard
              imgSrc={img2}
              title="Get A Quote"
              description="Get a transparent and comprehensive quote of all anticipated expenses and miscellaneous"
            />
            <FeatureCard
              imgSrc={img3}
              title="Celebrate Events"
              description="Sit back and celebrate your event with loved ones as Homevents takes care of everything else"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
