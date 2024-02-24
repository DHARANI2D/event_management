import { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cake from '/Users/dharanidharansenthilkumar/Projects/event_management/event_front/src/assets/images/cake.gif'
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Landing = lazy(() => import('./pages/Landing'));
const Home = lazy(() => import('./pages/Home'));
const UserProfile = lazy(() => import('./pages/UserProfile'));
const VenuesPage = lazy(() => import('./pages/Venues'));
const Event = lazy(() => import('./pages/EventPage'));
const Quote = lazy(() => import('./pages/Quote'));
const AdminPage = lazy(() => import('./pages/Admin'));
const FeedbackPage = lazy(() => import('./pages/FeedbackPage'));
const Checkout = lazy(() => import('./pages/Cart'));


const LoadingOverlay = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(255, 255, 255, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <img
        src={Cake}  
        style={{ width: '400px', height: '400px' }} 
      />
    </div>
  );
};

function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Router>
      <div className="container-fluid">
        {isLoading && <LoadingOverlay />}
        <Routes>
          <Route path="/login" element={<Suspense fallback={<div>Loading...</div>}><Login /></Suspense>} />
          <Route path="/register" element={<Suspense fallback={<div>Loading...</div>}><Register /></Suspense>} />
          <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Landing /></Suspense>} />
          <Route path="/home" element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
          <Route path="/user" element={<Suspense fallback={<div>Loading...</div>}><UserProfile /></Suspense>} />
          <Route path="/venue" element={<Suspense fallback={<div>Loading...</div>}><VenuesPage /></Suspense>} />
          <Route path="/event" element={<Suspense fallback={<div>Loading...</div>}><Event /></Suspense>} />
          <Route path="/admin" element={<Suspense fallback={<div>Loading...</div>}><AdminPage /></Suspense>} />
          <Route path="/quote" element={<Suspense fallback={<div>Loading...</div>}><Quote /></Suspense>} />
          <Route path="/feedback" element={<Suspense fallback={<div>Loading...</div>}><FeedbackPage /></Suspense>} />
          <Route path="/cart" element={<Suspense fallback={<div>Loading...</div>}><Checkout /></Suspense>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
