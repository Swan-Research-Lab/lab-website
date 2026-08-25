import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import { HomePage } from './routes/Home.tsx';
import { ResearchPage } from './routes/Research.tsx';
import { PeoplePage } from './routes/People.tsx';
import { PublicationsPage } from './routes/Publications.tsx';
import { NewsPage } from './routes/News.tsx';
import { ContactPage } from './routes/Contact.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="research" element={<ResearchPage />} />
          <Route path="people" element={<PeoplePage />} />
          <Route path="publications" element={<PublicationsPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
