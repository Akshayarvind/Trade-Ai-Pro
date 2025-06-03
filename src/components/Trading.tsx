
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, TrendingDown, Search, Zap, Shield, Target } from 'lucide-react';

const Trading = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStock, setSelectedStock] = useState('RELIANCE');
  const [quantity, setQuantity] = useState('');
  const [orderType, setOrderType] = useState('market');

  const watchlist = [
    { symbol: 'RELIANCE', price: 2823.15, change: +67.20, changePercent: +2.43, signal: 'BUY' },
    { symbol: 'TCS', price: 4256.80, change: +89.45, changePercent: +2.14, signal: 'BUY' },
    { symbol: 'INFY', price: 1789.25, change: +45.60, changePercent: +2.62, signal: 'STRONG_BUY' },
    { symbol: 'HDFCBANK', price: 1634.90, change: -12.30, changePercent: -0.75, signal: 'HOLD' },
    { symbol: 'ITC', price: 456.75, change: +8.90, changePercent: +1.99, signal: 'BUY' },
    { symbol: 'ICICIBANK', price: 1205.40, change: +23.80, changePercent: +2.01, signal: 'BUY' },
  ];

  const aiSignals = [
    {
      symbol: 'RELIANCE',
      action: 'STRONG BUY',
      confidence: 92,
      reason: 'Refinery margins improving + new energy ventures',
      targetPrice: 3100,
      stopLoss: 2650,
    },
    {
      symbol: 'TCS',
      action: 'BUY',
      confidence: 89,
      reason: 'Strong Q3 results + digital transformation deals',
      targetPrice: 4600,
      stopLoss: 3900,
    },
    {
      symbol: 'INFY',
      action: 'BUY',
      confidence: 87,
      reason: 'AI/ML capabilities driving client wins',
      targetPrice: 1950,
      stopLoss: 1650,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Trading Center (NSE/BSE)</h1>
        <div className="flex items-center space-x-2 text-sm text-slate-300">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>Paper Trading Mode • ₹37,50,000 Available</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center justify-between">
                Place Order
                <Badge variant="outline" className="text-emerald-400 border-emerald-400">
                  PAPER TRADING
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-slate-300 mb-2 block">Symbol (NSE/BSE)</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <Input
                        placeholder="Search Indian stocks..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-slate-300 mb-2 block">Quantity</label>
                    <Input
                      type="number"
                      placeholder="Number of shares"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-slate-300 mb-2 block">Order Type</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant={orderType === 'market' ? 'default' : 'outline'}
                        onClick={() => setOrderType('market')}
                        className="w-full"
                      >
                        Market
                      </Button>
                      <Button
                        variant={orderType === 'limit' ? 'default' : 'outline'}
                        onClick={() => setOrderType('limit')}
                        className="w-full"
                      >
                        Limit
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-slate-700/30 rounded-lg">
                    <div className="text-lg font-bold text-white mb-2">RELIANCE - Reliance Industries</div>
                    <div className="text-2xl font-bold text-emerald-400 mb-1">₹2,823.15</div>
                    <div className="text-sm text-emerald-400">+₹67.20 (+2.43%)</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Buy
                    </Button>
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      <TrendingDown className="w-4 h-4 mr-2" />
                      Sell
                    </Button>
                  </div>

                  <div className="text-sm text-slate-400">
                    Estimated Cost: ₹{(2823.15 * (parseInt(quantity) || 0)).toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span>AI Trading Signals (Indian Market)</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aiSignals.map((signal, index) => (
                  <div key={index} className="p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="font-bold text-white">{signal.symbol}</span>
                        <Badge 
                          variant={signal.action === 'STRONG BUY' ? 'default' : signal.action === 'BUY' ? 'secondary' : 'outline'}
                          className={
                            signal.action === 'STRONG BUY' ? 'bg-emerald-600' : 
                            signal.action === 'BUY' ? 'bg-blue-600' : 
                            'text-yellow-400 border-yellow-400'
                          }
                        >
                          {signal.action}
                        </Badge>
                      </div>
                      <span className="text-sm text-slate-300">{signal.confidence}% confidence</span>
                    </div>
                    
                    <div className="text-sm text-slate-300 mb-3">{signal.reason}</div>
                    
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>Target: ₹{signal.targetPrice}</span>
                      <span>Stop Loss: ₹{signal.stopLoss}</span>
                    </div>
                    
                    <div className="flex space-x-2 mt-3">
                      <Button size="sm" className="flex-1">Execute Trade</Button>
                      <Button size="sm" variant="outline" className="flex-1">Add to Watchlist</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Watchlist (NSE)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {watchlist.map((stock, index) => (
                  <div 
                    key={index} 
                    className="p-3 bg-slate-700/30 rounded-lg cursor-pointer hover:bg-slate-700/50 transition-colors"
                    onClick={() => setSelectedStock(stock.symbol)}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-white">{stock.symbol}</span>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          stock.signal === 'STRONG_BUY' ? 'text-emerald-400 border-emerald-400' :
                          stock.signal === 'BUY' ? 'text-blue-400 border-blue-400' :
                          'text-yellow-400 border-yellow-400'
                        }`}
                      >
                        {stock.signal.replace('_', ' ')}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">₹{stock.price.toFixed(2)}</span>
                      <span className={`text-sm ${stock.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                        {stock.change >= 0 ? '+' : ''}₹{stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span>Risk Management</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Daily Loss Limit</span>
                  <span className="text-emerald-400">₹1,87,500 / ₹3,75,000</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Position Size Limit</span>
                  <span className="text-blue-400">5% max per position</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Portfolio Beta</span>
                  <span className="text-yellow-400">1.18</span>
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <Button size="sm" variant="outline" className="w-full">
                    <Target className="w-4 h-4 mr-2" />
                    Adjust Risk Settings
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Trading;
