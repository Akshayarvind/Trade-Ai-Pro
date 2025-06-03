
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { TrendingUp, DollarSign, Target, Shield } from 'lucide-react';

const Portfolio = () => {
  const holdings = [
    { symbol: 'AAPL', name: 'Apple Inc', shares: 106, avgCost: 178.24, currentPrice: 182.31, value: 19325, allocation: 15.2 },
    { symbol: 'MSFT', name: 'Microsoft Corp', shares: 45, avgCost: 412.89, currentPrice: 425.67, value: 19155, allocation: 15.0 },
    { symbol: 'NVDA', name: 'NVIDIA Corp', shares: 15, avgCost: 721.33, currentPrice: 798.45, value: 11977, allocation: 9.4 },
    { symbol: 'GOOGL', name: 'Alphabet Inc', shares: 42, avgCost: 142.56, currentPrice: 148.22, value: 6225, allocation: 4.9 },
    { symbol: 'AMZN', name: 'Amazon.com Inc', shares: 35, avgCost: 155.43, currentPrice: 162.18, value: 5676, allocation: 4.5 },
    { symbol: 'TSLA', name: 'Tesla Inc', shares: 22, avgCost: 245.67, currentPrice: 251.33, value: 5529, allocation: 4.3 },
  ];

  const allocationData = [
    { name: 'Technology', value: 45.2, color: '#3B82F6' },
    { name: 'Healthcare', value: 18.5, color: '#10B981' },
    { name: 'Financial', value: 15.8, color: '#8B5CF6' },
    { name: 'Consumer', value: 12.3, color: '#F59E0B' },
    { name: 'Energy', value: 5.2, color: '#EF4444' },
    { name: 'Cash', value: 3.0, color: '#6B7280' },
  ];

  const performanceData = [
    { month: 'Jan', value: 98500 },
    { month: 'Feb', value: 102300 },
    { month: 'Mar', value: 99800 },
    { month: 'Apr', value: 105600 },
    { month: 'May', value: 112400 },
    { month: 'Jun', value: 127432 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Portfolio Management</h1>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="text-sm text-slate-300">Total Return</div>
            <div className="text-xl font-bold text-emerald-400">+$28,932.50 (+29.4%)</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-400">Portfolio Value</p>
                <p className="text-2xl font-bold text-white">$127,432</p>
                <p className="text-sm text-emerald-400">+2.34% today</p>
              </div>
              <DollarSign className="w-8 h-8 text-emerald-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-400">Total Gain/Loss</p>
                <p className="text-2xl font-bold text-emerald-400">+$28,932</p>
                <p className="text-sm text-emerald-400">+29.4% total</p>
              </div>
              <TrendingUp className="w-8 h-8 text-emerald-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-400">Risk Score</p>
                <p className="text-2xl font-bold text-yellow-400">7.2</p>
                <p className="text-sm text-slate-400">Moderate-High</p>
              </div>
              <Shield className="w-8 h-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-400">Sharpe Ratio</p>
                <p className="text-2xl font-bold text-blue-400">1.87</p>
                <p className="text-sm text-emerald-400">Excellent</p>
              </div>
              <Target className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Asset Allocation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={allocationData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {allocationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {allocationData.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-slate-300">{item.name} ({item.value}%)</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Performance History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" fontSize={12} />
                  <YAxis stroke="#9CA3AF" fontSize={12} tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                  <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Current Holdings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left text-slate-300 py-3">Symbol</th>
                  <th className="text-left text-slate-300 py-3">Company</th>
                  <th className="text-right text-slate-300 py-3">Shares</th>
                  <th className="text-right text-slate-300 py-3">Avg Cost</th>
                  <th className="text-right text-slate-300 py-3">Current Price</th>
                  <th className="text-right text-slate-300 py-3">Market Value</th>
                  <th className="text-right text-slate-300 py-3">Gain/Loss</th>
                  <th className="text-right text-slate-300 py-3">%</th>
                </tr>
              </thead>
              <tbody>
                {holdings.map((holding, index) => {
                  const gainLoss = (holding.currentPrice - holding.avgCost) * holding.shares;
                  const gainLossPercent = ((holding.currentPrice - holding.avgCost) / holding.avgCost) * 100;
                  const isPositive = gainLoss >= 0;
                  
                  return (
                    <tr key={index} className="border-b border-slate-700/50">
                      <td className="py-4">
                        <div className="font-bold text-white">{holding.symbol}</div>
                      </td>
                      <td className="py-4">
                        <div className="text-slate-300 text-sm">{holding.name}</div>
                      </td>
                      <td className="py-4 text-right text-slate-300">{holding.shares}</td>
                      <td className="py-4 text-right text-slate-300">${holding.avgCost.toFixed(2)}</td>
                      <td className="py-4 text-right text-white font-medium">${holding.currentPrice.toFixed(2)}</td>
                      <td className="py-4 text-right text-white font-medium">${holding.value.toLocaleString()}</td>
                      <td className={`py-4 text-right font-medium ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                        {isPositive ? '+' : ''}${gainLoss.toFixed(2)}
                      </td>
                      <td className={`py-4 text-right font-medium ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                        {isPositive ? '+' : ''}{gainLossPercent.toFixed(2)}%
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Portfolio;
