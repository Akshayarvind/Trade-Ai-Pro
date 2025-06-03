
import React from 'react';
import { Bell, Settings, User, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 px-6 py-4 flex items-center justify-between relative z-50">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-white" />
        </div>
        <h1 className="text-xl font-bold text-white">TradeAI Pro</h1>
        <div className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full border border-emerald-500/30">
          DEMO MODE
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="text-right">
          <div className="text-sm text-slate-300">Portfolio Value</div>
          <div className="text-lg font-bold text-emerald-400">$127,432.50</div>
          <div className="text-xs text-emerald-400">+2.34% (+$2,945.21)</div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
            <Bell className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
            <Settings className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
            <User className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
