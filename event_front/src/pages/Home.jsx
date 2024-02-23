// Home.js
import NavbarComponent from "../components/NavbarComponent";
import CarouselComponent from "../components/CarouselComponent"; 
import Menubar from "../components/Menubar";
import img1 from "../assets/images/calander.png";
import img2 from "../assets/images/celebrate.png";
import img3 from "../assets/images/quote.png";
import HitworkItem from '../components/HitworkItem';
import FooterMain from '../components/FooterMain';
const Home = () => {
  return (
    <div>
      <NavbarComponent />
      <CarouselComponent />
      <Menubar />
      <div className="container mt-4">
        <div className="row">
          <HitworkItem
            imgSrc={img1}
            title="Plan your Event"
            description="Send us your event details and we will plan everything to perfection to your preferences"
          />
          <HitworkItem
            imgSrc={img2}
            title="Get a Quote"
            description="Get a transparent and comprehensive quote of all anticipated expenses and miscellaneous"
          />
          <HitworkItem
            imgSrc={img3}
            title="Celebrate your Events"
            description="Sit back and celebrate your event with loved ones as Homevents takes care of everything else"
          />
        </div>
      </div>
      <FooterMain />
    </div>
  );
};

export default Home;
