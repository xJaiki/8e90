import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ErrorBoundary from './pages/ErrorBoundary';
import ToastProvider from './components/ui/ToastProvider';
import Menu from './pages/Menu';
import ChiSiamo from './pages/ChiSiamo';
import Contatti from './pages/Contatti';
import MenuGenerator from './pages/GenerateMenu';

// Main App component with routing configuration
function App() {
  return (
    <Router>
      <ToastProvider />
      <ErrorBoundary>
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          
          {/* Placeholder routes for future pages */}
          <Route
            path="/menu"
            element={
              <Layout>
                <Menu />
              </Layout>
            }
          />
          
          <Route
            path="/chi-siamo"
            element={
              <Layout>
                <ChiSiamo />
              </Layout>
            }
          />
          
          <Route
            path="/galleria"
            element={
              <Layout>
                <div className="container mx-auto px-4 py-16">
                  <h1 className="text-3xl font-bold text-[#351c11] mb-4">
                    Galleria
                  </h1>
                  <p className="text-lg text-gray-700">
                    Questa pagina sarà implementata nel prossimo step.
                  </p>
                </div>
              </Layout>
            }
          />
          
          <Route
            path="/contatti"
            element={
              <Layout>
                <Contatti />
              </Layout>
            }
          />

          <Route
            path="/admin"
            element={
              <MenuGenerator />
            }
          />
          
          {/* 404 Not Found Route */}
          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;