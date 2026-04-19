import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { VisitorProvider } from './core/visitor/VisitorContext.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <VisitorProvider>
        <App />
      </VisitorProvider>
    </BrowserRouter>
  </StrictMode>
);
