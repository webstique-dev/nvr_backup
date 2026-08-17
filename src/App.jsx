import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from './animations/motion';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import ScrollToTopOnRoute from './components/Common/ScrollToTopOnRoute';
import ScrollToTopButton from './components/Common/ScrollToTopButton';
import Preloader from './components/Common/Preloader';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import TrainingPrograms from './pages/TrainingPrograms';
import TrainingDetail from './pages/TrainingDetail';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import NotFound from './pages/NotFound';

function App() {
  const location = useLocation();
  const [isPreloading, setIsPreloading] = useState(true);

  return (
    <> 
      <ScrollToTopOnRoute />
      <Navbar />
      <main id="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/training-programs" element={<TrainingPrograms />} />
              <Route path="/training-programs/:slug" element={<TrainingDetail />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <ScrollToTopButton />
      {isPreloading && <Preloader onFinish={() => setIsPreloading(false)} />}
    </>
  );
}

export default App;
