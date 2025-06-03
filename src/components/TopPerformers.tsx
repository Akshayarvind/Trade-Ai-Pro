
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Star } from 'lucide-react';

const TopPerformers = () => {
  const performers = [
    { symbol: 'RELIANCE', name: 'Reliance Industries', return: '+12.47%', value: '₹8,10,834.50', change: '+₹89,203.40' },
    { symbol: 'TCS', name: 'Tata Consultancy Services', return: '+8.92%', value: '₹14,18,945.20', change: '+₹1,16,553.80' },
    { symbol: 'INFY', name: 'Infosys Limited', return: '+6.34%', value: '₹11,75,672.30', change: '+₹70,034.20' },
    { symbol: 'HDFCBANK', name: 'HDFC Bank Ltd', return: '+5.78%', value: '₹9,36,489.60', change: '+₹51,083.50' },
    { symbol: 'ITC', name: 'ITC Limited', return: '+4.23%', value: '₹7,39,876.40', change: '+₹30,001.30' },
  ];

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center space-x-2">
          <Star className="w-5 h-5 text-yellow-400" />
          <span>Top Performers (NSE)</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {performers.map((stock, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="text-center">
                  <div className="text-xs text-slate-500">#{index + 1}</div>
                </div>
                <div>
                  <div className="font-bold text-white">{stock.symbol}</div>
                  <div className="text-xs text-slate-400">{stock.name}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-emerald-400 font-medium">{stock.return}</div>
                <div className="text-sm text-slate-300">{stock.value}</div>
                <div className="text-xs text-emerald-400">{stock.change}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopPerformers;
