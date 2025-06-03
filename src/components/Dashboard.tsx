
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, IndianRupee, Activity, Target, AlertTriangle } from 'lucide-react';
import PortfolioChart from './PortfolioChart';
import RecentTrades from './RecentTrades';
import TopPerformers from './TopPerformers';
import AIRecommendations from './AIRecommendations';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Portfolio Value',
      value: '₹95,67,432.50',
      change: '+2.34%',
      changeValue: '+₹2,19,945.21',
      icon: IndianRupee,
      positive: true,
    },
    {
      title: 'Daily P&L',
      value: '₹1,38,247.32',
      change: '+1.47%',
      changeValue: 'Today',
      icon: TrendingUp,
      positive: true,
    },
    {
      title: 'Active Positions',
      value: '23',
      change: '3 new',
      changeValue: 'This week',
      icon: Activity,
      positive: true,
    },
    {
      title: 'Risk Score',
      value: '7.2/10',
      change: '-0.3',
      changeValue: 'vs last week',
      icon: AlertTriangle,
      positive: false,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Trading Dashboard</h1>
        <div className="flex items-center space-x-2 text-sm text-slate-300">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>NSE/BSE Open • AI Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-400">{stat.title}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className={`text-sm ${stat.positive ? 'text-emerald-400' : 'text-red-400'}`}>
                      {stat.change}
                    </span>
                    <span className="text-xs text-slate-500">{stat.changeValue}</span>
                  </div>
                </div>
                <div className={`p-2 rounded-lg ${stat.positive ? 'bg-emerald-500/20' : 'bg-red-500/20'}`}>
                  <stat.icon className={`w-6 h-6 ${stat.positive ? 'text-emerald-400' : 'text-red-400'}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PortfolioChart />
        </div>
        <div>
          <AIRecommendations />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentTrades />
        <TopPerformers />
      </div>
    </div>
  );
};

export default Dashboard;
