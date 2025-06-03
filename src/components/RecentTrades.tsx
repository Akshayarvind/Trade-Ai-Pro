
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const RecentTrades = () => {
  const trades = [
    {
      symbol: 'AAPL',
      action: 'BUY',
      quantity: 50,
      price: 178.24,
      time: '2 min ago',
      reason: 'Strong earnings beat + AI momentum',
      profit: 234.50,
      profitable: true,
    },
    {
      symbol: 'TSLA',
      action: 'SELL',
      quantity: 25,
      price: 245.67,
      time: '15 min ago',
      reason: 'Technical resistance at $250',
      profit: -123.75,
      profitable: false,
    },
    {
      symbol: 'NVDA',
      action: 'BUY',
      quantity: 15,
      price: 721.33,
      time: '1 hour ago',
      reason: 'AI sector bullish crossover',
      profit: 445.20,
      profitable: true,
    },
    {
      symbol: 'MSFT',
      action: 'SELL',
      quantity: 30,
      price: 412.89,
      time: '2 hours ago',
      reason: 'Profit taking at resistance',
      profit: 567.40,
      profitable: true,
    },
  ];

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center space-x-2">
          <Clock className="w-5 h-5" />
          <span>Recent AI Trades</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trades.map((trade, index) => (
            <div key={index} className="p-4 bg-slate-700/30 rounded-lg border border-slate-600">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <Badge variant={trade.action === 'BUY' ? 'default' : 'secondary'} className="text-xs">
                    {trade.action}
                  </Badge>
                  <span className="font-bold text-white">{trade.symbol}</span>
                  <span className="text-slate-300">{trade.quantity} shares @ ${trade.price}</span>
                </div>
                <div className="flex items-center space-x-2">
                  {trade.profitable ? (
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-400" />
                  )}
                  <span className={`text-sm font-medium ${trade.profitable ? 'text-emerald-400' : 'text-red-400'}`}>
                    ${Math.abs(trade.profit).toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="text-xs text-slate-400 mb-1">{trade.time}</div>
              <div className="text-sm text-slate-300">{trade.reason}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentTrades;
