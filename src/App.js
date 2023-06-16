import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; //Routes is like switch which will make sure that once the url string matches one char it stops and Route is used for navigation
import { AnimatePresence } from 'framer-motion';

// Import pages
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';

function App() {
  const location = useLocation();

  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<AboutUs />} />
          <Route path='/work' element={<OurWork />} />
          <Route path='/work/:id' element = {<MovieDetail />} />
          <Route path ='/contact' element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
