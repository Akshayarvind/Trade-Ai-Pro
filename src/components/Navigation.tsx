
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { TrendingUp, User, LogIn } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">TradeAI Pro</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-slate-300 hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/dashboard" className="text-slate-300 hover:text-white transition-colors">
            Dashboard
          </Link>
          <Link to="/market" className="text-slate-300 hover:text-white transition-colors">
            Market Analysis
          </Link>
          <Link to="/portfolio" className="text-slate-300 hover:text-white transition-colors">
            Portfolio
          </Link>
          <Link to="/trading" className="text-slate-300 hover:text-white transition-colors">
            Trading
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-slate-300 hover:text-white">
            <LogIn className="w-4 h-4 mr-2" />
            Login
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white">
            Start Free Trial
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
