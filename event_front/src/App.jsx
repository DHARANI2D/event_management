import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App
