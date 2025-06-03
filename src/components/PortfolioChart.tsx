
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, AreaChart } from 'recharts';

const PortfolioChart = () => {
  const data = [
    { time: '9:30', value: 124500, benchmark: 124000 },
    { time: '10:00', value: 125200, benchmark: 124300 },
    { time: '10:30', value: 124800, benchmark: 124100 },
    { time: '11:00', value: 126100, benchmark: 124800 },
    { time: '11:30', value: 125700, benchmark: 124900 },
    { time: '12:00', value: 127200, benchmark: 125200 },
    { time: '12:30', value: 126900, benchmark: 125400 },
    { time: '1:00', value: 127432, benchmark: 125600 },
  ];

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          Portfolio Performance
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-slate-300">Your Portfolio</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-slate-500 rounded-full"></div>
              <span className="text-slate-300">S&P 500</span>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="time" 
                stroke="#9CA3AF"
                fontSize={12}
              />
              <YAxis 
                stroke="#9CA3AF"
                fontSize={12}
                domain={['dataMin - 1000', 'dataMax + 1000']}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#3B82F6"
                strokeWidth={2}
                fill="url(#portfolioGradient)"
              />
              <Line
                type="monotone"
                dataKey="benchmark"
                stroke="#6B7280"
                strokeWidth={1}
                strokeDasharray="5 5"
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioChart;
