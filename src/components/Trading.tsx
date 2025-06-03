
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Play, Square, BarChart3, AlertTriangle, Crown } from 'lucide-react';
import PremiumGate from './PremiumGate';

const Trading = () => {
  const [selectedStock, setSelectedStock] = useState('RELIANCE');
  const [quantity, setQuantity] = useState('100');
  const [orderType, setOrderType] = useState('market');
  const [showPremiumGate, setShowPremiumGate] = useState(false);

  // Mock data for Indian stocks
  const stocks = [
    { symbol: 'RELIANCE', name: 'Reliance Industries', price: 2456.80, change: '+1.2%', volume: '15.6M' },
    { symbol: 'TCS', name: 'Tata Consultancy Services', price: 3789.45, change: '+0.8%', volume: '8.2M' },
    { symbol: 'INFY', name: 'Infosys Limited', price: 1567.20, change: '-0.5%', volume: '12.1M' },
    { symbol: 'HDFCBANK', name: 'HDFC Bank', price: 1678.90, change: '+1.5%', volume: '18.9M' },
    { symbol: 'ITC', name: 'ITC Limited', price: 456.75, change: '+2.1%', volume: '25.4M' },
  ];

  const aiStrategies = [
    { name: 'Momentum Breakout', status: 'Active', returns: '+12.4%', risk: 'Medium' },
    { name: 'Mean Reversion', status: 'Paused', returns: '+8.7%', risk: 'Low' },
    { name: 'Sector Rotation', status: 'Active', returns: '+15.2%', risk: 'High' },
    { name: 'News Sentiment', status: 'Premium', returns: '+18.9%', risk: 'Medium' },
  ];

  const activePositions = [
    { symbol: 'RELIANCE', quantity: 50, avgPrice: 2420.50, currentPrice: 2456.80, pnl: '+1,815' },
    { symbol: 'TCS', quantity: 25, avgPrice: 3750.00, currentPrice: 3789.45, pnl: '+986' },
    { symbol: 'INFY', quantity: 75, avgPrice: 1580.30, currentPrice: 1567.20, pnl: '-983' },
  ];

  const handleLiveTrading = () => {
    setShowPremiumGate(true);
  };

  if (showPremiumGate) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Live Trading</h1>
          <Button 
            variant="outline" 
            onClick={() => setShowPremiumGate(false)}
            className="border-slate-400 text-slate-300"
          >
            Back to Demo
          </Button>
        </div>
        <div className="max-w-2xl mx-auto">
          <PremiumGate 
            feature="Live Automated Trading"
            description="Execute real trades with AI-powered strategies on NSE/BSE. Advanced risk management, real-time execution, and portfolio optimization included."
            requiredPlan="Premium"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Trading Terminal</h1>
        <div className="flex items-center space-x-4">
          <Badge variant="outline" className="border-emerald-500 text-emerald-400">
            DEMO MODE
          </Badge>
          <Button 
            onClick={handleLiveTrading}
            className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white"
          >
            <Crown className="w-4 h-4 mr-2" />
            Upgrade to Live Trading
          </Button>
        </div>
      </div>

      <Tabs defaultValue="manual" className="space-y-6">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger value="manual">Manual Trading</TabsTrigger>
          <TabsTrigger value="ai-strategies">AI Strategies</TabsTrigger>
          <TabsTrigger value="positions">Active Positions</TabsTrigger>
        </TabsList>

        <TabsContent value="manual" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Stock Selection */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Select Stock</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {stocks.map((stock) => (
                  <div 
                    key={stock.symbol}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedStock === stock.symbol 
                        ? 'bg-blue-600/20 border border-blue-500/50' 
                        : 'bg-slate-700/30 hover:bg-slate-700/50'
                    }`}
                    onClick={() => setSelectedStock(stock.symbol)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-white">{stock.symbol}</div>
                        <div className="text-xs text-slate-400">{stock.name}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-white">₹{stock.price.toLocaleString()}</div>
                        <div className={`text-xs ${stock.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                          {stock.change}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Order Placement */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Place Order</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-slate-300">Selected Stock</Label>
                  <div className="p-2 bg-slate-700/50 rounded text-white font-medium">
                    {selectedStock}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-300">Quantity</Label>
                  <Input 
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                    placeholder="Enter quantity"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-300">Order Type</Label>
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

                <div className="grid grid-cols-2 gap-2 pt-4">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Buy
                  </Button>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    <TrendingDown className="w-4 h-4 mr-2" />
                    Sell
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Market Data */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Market Data</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-slate-400">NIFTY 50</div>
                    <div className="text-lg font-bold text-emerald-400">21,567.89</div>
                    <div className="text-xs text-emerald-400">+1.23%</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">SENSEX</div>
                    <div className="text-lg font-bold text-emerald-400">71,234.56</div>
                    <div className="text-xs text-emerald-400">+2.05%</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm text-slate-300 font-medium">Quick Stats</div>
                  <div className="text-xs text-slate-400">
                    Market Open: 9:15 AM IST<br/>
                    Volume: High<br/>
                    Volatility: Medium
                  </div>
                </div>

                <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                  <div className="text-xs text-emerald-400 font-medium mb-1">AI Signal</div>
                  <div className="text-xs text-slate-300">
                    Bullish momentum detected for Banking sector
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="ai-strategies" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiStrategies.map((strategy, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white">{strategy.name}</CardTitle>
                    <Badge 
                      variant={strategy.status === 'Active' ? 'default' : strategy.status === 'Premium' ? 'secondary' : 'outline'}
                      className={
                        strategy.status === 'Active' 
                          ? 'bg-emerald-500/20 text-emerald-400' 
                          : strategy.status === 'Premium'
                          ? 'bg-amber-500/20 text-amber-400'
                          : ''
                      }
                    >
                      {strategy.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Returns</span>
                      <span className="text-emerald-400 font-medium">{strategy.returns}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Risk Level</span>
                      <span className={`font-medium ${
                        strategy.risk === 'Low' ? 'text-emerald-400' :
                        strategy.risk === 'Medium' ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {strategy.risk}
                      </span>
                    </div>
                    
                    {strategy.status === 'Premium' ? (
                      <Button 
                        className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white"
                        onClick={handleLiveTrading}
                      >
                        <Crown className="w-4 h-4 mr-2" />
                        Upgrade Required
                      </Button>
                    ) : (
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          disabled={strategy.status === 'Active'}
                        >
                          <Play className="w-4 h-4 mr-2" />
                          {strategy.status === 'Active' ? 'Running' : 'Start'}
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          disabled={strategy.status !== 'Active'}
                        >
                          <Square className="w-4 h-4 mr-2" />
                          Stop
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="positions" className="space-y-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Active Positions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activePositions.map((position, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div>
                        <div className="font-medium text-white">{position.symbol}</div>
                        <div className="text-sm text-slate-400">Qty: {position.quantity}</div>
                      </div>
                      <div>
                        <div className="text-sm text-slate-400">Avg Price</div>
                        <div className="text-white">₹{position.avgPrice}</div>
                      </div>
                      <div>
                        <div className="text-sm text-slate-400">Current Price</div>
                        <div className="text-white">₹{position.currentPrice}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-medium ${position.pnl.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                        ₹{position.pnl}
                      </div>
                      <Button variant="outline" size="sm" className="mt-2">
                        Close Position
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Trading;
