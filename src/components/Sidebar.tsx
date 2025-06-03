
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  TrendingUp, 
  Briefcase, 
  BarChart3, 
  Bot,
  Target,
  Shield,
  History
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const navigation = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Market Analysis', href: '/market', icon: TrendingUp },
    { name: 'Portfolio', href: '/portfolio', icon: Briefcase },
    { name: 'Trading', href: '/trading', icon: BarChart3 },
    { name: 'AI Insights', href: '/ai-insights', icon: Bot },
    { name: 'Risk Management', href: '/risk', icon: Shield },
    { name: 'Trade History', href: '/history', icon: History },
    { name: 'Goals', href: '/goals', icon: Target },
  ];

  return (
    <nav className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-slate-800/90 backdrop-blur-sm border-r border-slate-700 p-4 overflow-y-auto">
      <div className="space-y-2">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              cn(
                'flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              )
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-lg border border-blue-500/30">
        <div className="text-sm font-medium text-blue-300 mb-2">AI Trading Status</div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-slate-300">Active Learning</span>
        </div>
        <div className="text-xs text-slate-400 mt-1">Next trade analysis in 3m 24s</div>
      </div>
    </nav>
  );
};

export default Sidebar;
