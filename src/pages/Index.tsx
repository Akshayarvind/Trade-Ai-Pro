
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '@/components/Dashboard';
import MarketAnalysis from '@/components/MarketAnalysis';
import Portfolio from '@/components/Portfolio';
import Trading from '@/components/Trading';
import AIInsights from '@/components/AIInsights';
import LandingPage from '@/components/LandingPage';
import Navigation from '@/components/Navigation';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

const Index = () => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <>
            <Navigation />
            <LandingPage />
          </>
        } 
      />
      <Route 
        path="/*" 
        element={
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
            <Header />
            <div className="flex">
              <Sidebar />
              <main className="flex-1 p-6 ml-64">
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/market" element={<MarketAnalysis />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/trading" element={<Trading />} />
                  <Route path="/ai-insights" element={<AIInsights />} />
                </Routes>
              </main>
            </div>
          </div>
        } 
      />
    </Routes>
  );
};

export default Index;
