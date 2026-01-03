import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Health } from './pages/Health';
import { ProductsPage } from './pages/Products';
import { GenericPage } from './pages/GenericPage';
import { RecipesPage } from './pages/Recipes';
import { PAGES } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('te');

  return (
    <Router>
      <Layout lang={lang} setLang={setLang}>
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="/health" element={<Health lang={lang} />} />
          <Route path="/products" element={<ProductsPage lang={lang} />} />
          <Route path="/recipes" element={<RecipesPage lang={lang} />} />
          
          {/* Dynamic routes based on constants */}
          <Route path="/sourcing" element={<GenericPage data={PAGES.sourcing} lang={lang} />} />
          <Route path="/supply-chain" element={<GenericPage data={PAGES.supply} lang={lang} />} />
          <Route path="/packaging" element={<GenericPage data={PAGES.packaging} lang={lang} />} />
          <Route path="/franchise" element={<GenericPage data={PAGES.franchise} lang={lang} />} />
          <Route path="/quality" element={<GenericPage data={PAGES.quality} lang={lang} />} />
          
          {/* Reuse franchise for contact for demo purposes, usually has distinct data */}
          <Route path="/contact" element={<GenericPage data={{
            title: { te: 'మమ్మల్ని సంప్రదించండి', en: 'Contact Us', hi: 'संपर्क करें' },
            sections: [
              { type: 'text', content: { te: 'కార్పొరేట్ ఆఫీస్: విశాఖపట్నం.', en: 'Corporate Office: Visakhapatnam.', hi: 'कॉर्पोरेट कार्यालय: विशाखापत्तनम।' } },
              { type: 'form', title: { te: 'మెసేజ్ పంపండి', en: 'Send Message', hi: 'संदेश भेजें' } }
            ]
          }} lang={lang} />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;