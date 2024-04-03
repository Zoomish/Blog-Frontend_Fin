import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import SignIn from './pages/SignIn';
import SingUp from './pages/SingUp';
import Dashboard from './pages/Dashboard';
import FooterComponent from './components/Footer';
import Header from './components/Header';
import PrivateRouter from './components/PrivateRouter';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SingUp />} />
        <Route element={<PrivateRouter />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}
