import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import Certificates from './pages/certificates';
import Contacts from './pages/contacts';
import Footer from './Footer';
 
function App() {
return (
    <Router>
    <Navigation />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/certificates' element={<Certificates/>} />
        <Route path='/contacts' element={<Contacts/>} />
    </Routes>
    <Footer />
    </Router>
);
}
 
export default App;