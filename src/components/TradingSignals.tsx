
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Target, Clock, AlertTriangle, Copy } from 'lucide-react';

const TradingSignals = () => {
  const signals = [
    {
      symbol: 'RELIANCE',
      action: 'BUY',
      confidence: 85,
      targetPrice: 2580,
      currentPrice: 2456.80,
      stopLoss: 2350,
      timeframe: '1-2 weeks',
      reason: 'Technical breakout above resistance + positive quarterly results',
      type: 'Swing Trade'
    },
    {
      symbol: 'TCS',
      action: 'HOLD',
      confidence: 78,
      targetPrice: 3900,
      currentPrice: 3789.45,
      stopLoss: 3650,
      timeframe: '2-3 weeks',
      reason: 'Strong fundamentals, awaiting Q3 results',
      type: 'Long Term'
    },
    {
      symbol: 'INFY',
      action: 'SELL',
      confidence: 72,
      targetPrice: 1480,
      currentPrice: 1567.20,
      stopLoss: 1620,
      timeframe: '1 week',
      reason: 'Technical indicators show weakness, profit booking recommended',
      type: 'Short Term'
    },
    {
      symbol: 'HDFCBANK',
      action: 'BUY',
      confidence: 88,
      targetPrice: 1780,
      currentPrice: 1678.90,
      stopLoss: 1620,
      timeframe: '3-4 weeks',
      reason: 'Banking sector momentum + RBI policy favorable',
      type: 'Swing Trade'
    }
  ];

  const copyToClipboard = (signal) => {
    const signalText = `${signal.action} ${signal.symbol} at ₹${signal.currentPrice}
Target: ₹${signal.targetPrice}
Stop Loss: ₹${signal.stopLoss}
Confidence: ${signal.confidence}%
Reason: ${signal.reason}`;
    
    navigator.clipboard.writeText(signalText);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">AI Trading Signals</h2>
        <Badge variant="outline" className="border-emerald-500 text-emerald-400">
          Real-time Analysis
        </Badge>
      </div>

      <div className="grid gap-4">
        {signals.map((signal, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${
                    signal.action === 'BUY' ? 'bg-emerald-500/20' :
                    signal.action === 'SELL' ? 'bg-red-500/20' : 'bg-yellow-500/20'
                  }`}>
                    {signal.action === 'BUY' ? (
                      <TrendingUp className={`w-5 h-5 ${
                        signal.action === 'BUY' ? 'text-emerald-400' : 'text-red-400'
                      }`} />
                    ) : signal.action === 'SELL' ? (
                      <TrendingDown className="w-5 h-5 text-red-400" />
                    ) : (
                      <Target className="w-5 h-5 text-yellow-400" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-bold text-white">{signal.symbol}</h3>
                      <Badge className={
                        signal.action === 'BUY' ? 'bg-emerald-500/20 text-emerald-400' :
                        signal.action === 'SELL' ? 'bg-red-500/20 text-red-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }>
                        {signal.action}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {signal.type}
                      </Badge>
                    </div>
                    <div className="text-sm text-slate-400 mt-1">
                      Confidence: {signal.confidence}%
                    </div>
                  </div>
                </div>
                
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyToClipboard(signal)}
                  className="shrink-0"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <div className="text-xs text-slate-400">Current Price</div>
                  <div className="text-white font-medium">₹{signal.currentPrice}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Target Price</div>
                  <div className="text-emerald-400 font-medium">₹{signal.targetPrice}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Stop Loss</div>
                  <div className="text-red-400 font-medium">₹{signal.stopLoss}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Timeframe</div>
                  <div className="text-blue-400 font-medium">{signal.timeframe}</div>
                </div>
              </div>

              <div className="p-3 bg-slate-700/30 rounded-lg mb-4">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm text-slate-300">{signal.reason}</div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button 
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open('https://groww.in/stocks', '_blank')}
                >
                  Execute in Groww
                </Button>
                <Button variant="outline" className="flex-1">
                  Set Price Alert
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-amber-500/10 border-amber-500/30">
        <CardContent className="p-4">
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-amber-400" />
            <div>
              <div className="text-amber-200 font-medium">Disclaimer</div>
              <div className="text-sm text-amber-200/80">
                These are AI-generated trading signals for educational purposes. Always do your own research and consult with a financial advisor before making investment decisions.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TradingSignals;
