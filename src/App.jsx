import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Menu from './pages/Menu';
import PersonalInfo from './pages/PersonalInfo';
import Confirmation from './pages/Confirmation';
import Payment from './pages/Payment';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/info" element={<PersonalInfo />} />
          <Route path="/confirm" element={<Confirmation />} />
          <Route path="/pay" element={<Payment />} />
        </Routes>
      </Layout>
    </Router>
  );
}
