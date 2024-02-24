import { Component } from 'react';
import { Step, Stepper } from '@cimpress/react-components';
import NavbarComponent from '../components/NavbarComponent';
import FooterMain from '../components/FooterMain';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class EventBookingPage extends Component {
  state = {
    activeStep: '0',
  };

  setStep = index => {
    this.setState({ activeStep: index });
  };

  handleNext = () => {
    const { activeStep } = this.state;
    const nextStep = String(Number(activeStep) + 1);
    this.setState({ activeStep: nextStep });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    const backStep = String(Number(activeStep) - 1);
    this.setState({ activeStep: backStep });
  };

  render() {
    const isLastStep = this.state.activeStep === '6';
    const isFirstStep = this.state.activeStep === '0';

    return (
        <div>
          <NavbarComponent />
          <p className="text-center font-weight-bold">Customize your Event</p>
          <div className="d-flex">
            <div className="mr-5" style={{ fontSize: '1.2rem', borderRight: '1px solid #ccc', paddingRight: '10px' }}>
              <Stepper activeStep={this.state.activeStep} vertical>
                <Step onClick={() => this.setStep('0')}>
                  <div>Venues</div>
                  <small>Select a venue for your event</small>
                </Step>
                <Step onClick={() => this.setStep('1')}>
                  <div>Decorations</div>
                  <small>Choose decorations for your event</small>
                </Step>
                <Step onClick={() => this.setStep('2')}>
                  <div>Photography</div>
                  <small>Book a photographer for your event</small>
                </Step>
                <Step onClick={() => this.setStep('3')}>
                  <div>Cakes</div>
                  <small>Order a cake for your event</small>
                </Step>
                <Step onClick={() => this.setStep('4')}>
                  <div>Entertainment</div>
                  <small>Arrange entertainment for your event</small>
                </Step>
                <Step onClick={() => this.setStep('5')}>
                  <div>Return Gifts</div>
                  <small>Choose return gifts for your guests</small>
                </Step>
                <Step onClick={() => this.setStep('6')}>
                  <div>Food</div>
                  <small>Select catering options for your event</small>
                </Step>
              </Stepper>
           </div>
      
            <div style={{  padding: '10px', marginBottom: '10px', height: '500px', overflowY: 'auto', flex:'1'}}>
              {this.state.activeStep === '0' && <VenueStep onNext={this.handleNext} />}
              {this.state.activeStep === '1' && <DecorationStep onNext={this.handleNext} onBack={this.handleBack} />}
              {this.state.activeStep === '2' && <PhotographyStep onNext={this.handleNext} onBack={this.handleBack} />}
              {this.state.activeStep === '3' && <CakesStep onNext={this.handleNext} onBack={this.handleBack} />}
              {this.state.activeStep === '4' && <EntertainmentStep onNext={this.handleNext} onBack={this.handleBack} />}
              {this.state.activeStep === '5' && <ReturnGiftsStep onNext={this.handleNext} onBack={this.handleBack} />}
              {this.state.activeStep === '6' && <FoodStep onBack={this.handleBack} />}
            </div>
          </div><br />
          <FooterMain />
        </div>
      );
      
  }
}

const VenueStep = ({ onNext }) => (
    <div>
      <div>
        <VenueCard
          image="https://example.com/venue1.jpg"
          name="Venue 1"
          location="City A"
          price="$1000"
          onSelect={onNext}
        />
        <VenueCard
          image="https://example.com/venue2.jpg"
          name="Venue 2"
          location="City B"
          price="$1200"
          onSelect={onNext}
        />
      </div>
      <button className="btn btn-primary" onClick={onNext}>Next</button>
    </div>
  );

const VenueCard = ({ image, name, location, price, onSelect }) => (
  <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
    <div style={{ flex: '1', marginRight: '10px' }}>
      <img src={image} alt={name} style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
    <div style={{ flex: '2', textAlign: 'center' }}>
      <h3>{name}</h3>
      <p>Location: {location}</p>
      <p>Price: {price}</p>
    </div>
    <div style={{ flex: '1', textAlign: 'right' }}>
      <button className="btn btn-success" onClick={onSelect}>Select</button>
    </div>
  </div>
);

const DecorationStep = ({ onNext, onBack }) => (
  <div>
    <p>Decorations content goes here.</p>
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px' }}>
      <button className="btn btn-secondary" onClick={onBack}>Back</button>
      <button className="btn btn-primary" onClick={onNext}>Next</button>
    </div>
  </div>
);

const PhotographyStep = ({ onNext, onBack }) => (
  <div>
    <p>Photography content goes here.</p>
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px' }}>
      <button className="btn btn-secondary" onClick={onBack}>Back</button>
      <button className="btn btn-primary" onClick={onNext}>Next</button>
    </div>
  </div>
);

const CakesStep = ({ onNext, onBack }) => (
  <div>
    <p>Cakes content goes here.</p>
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px' }}>
      <button className="btn btn-secondary" onClick={onBack}>Back</button>
      <button className="btn btn-primary" onClick={onNext}>Next</button>
    </div>
  </div>
);

const EntertainmentStep = ({ onNext, onBack }) => (
  <div>
    <p>Entertainment content goes here.</p>
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px' }}>
      <button className="btn btn-secondary" onClick={onBack}>Back</button>
      <button className="btn btn-primary" onClick={onNext}>Next</button>
    </div>
  </div>
);

const ReturnGiftsStep = ({ onNext, onBack }) => (
  <div>
    <p>Return Gifts content goes here.</p>
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px' }}>
      <button className="btn btn-secondary" onClick={onBack}>Back</button>
      <button className="btn btn-primary" onClick={onNext}>Next</button>
    </div>
  </div>
);

const FoodStep = ({ onBack }) => (
  <div>
    <p>Food content goes here.</p>
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px' }}>
      <button className="btn btn-secondary" onClick={onBack}>Back</button>
      <button className="btn btn-primary" onClick={() => window.location.href = '/cart'}>Next</button>
    </div>
  </div>
);
