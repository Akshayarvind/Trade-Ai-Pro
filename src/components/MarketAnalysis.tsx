
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Activity, BarChart3, Globe } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const MarketAnalysis = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Market Analysis</h1>
        <div className="text-sm text-slate-300">
          Last updated: 2 minutes ago
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger value="overview">Market Overview</TabsTrigger>
          <TabsTrigger value="technical">Technical Analysis</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
          <TabsTrigger value="economic">Economic Indicators</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                  <span>S&P 500</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white mb-2">4,567.89</div>
                <div className="text-emerald-400 text-sm">+1.23% (+56.78)</div>
                <div className="text-xs text-slate-400 mt-2">Strong bullish momentum</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Activity className="w-5 h-5 text-blue-400" />
                  <span>NASDAQ</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white mb-2">14,234.56</div>
                <div className="text-emerald-400 text-sm">+2.05% (+287.34)</div>
                <div className="text-xs text-slate-400 mt-2">Tech sector leading gains</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-purple-400" />
                  <span>VIX</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white mb-2">18.45</div>
                <div className="text-red-400 text-sm">-2.34% (-0.44)</div>
                <div className="text-xs text-slate-400 mt-2">Low volatility environment</div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Sector Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { sector: 'Technology', performance: '+3.45%', color: 'emerald' },
                  { sector: 'Healthcare', performance: '+2.12%', color: 'emerald' },
                  { sector: 'Financial', performance: '+1.87%', color: 'emerald' },
                  { sector: 'Consumer Disc.', performance: '+0.92%', color: 'emerald' },
                  { sector: 'Energy', performance: '-1.23%', color: 'red' },
                  { sector: 'Utilities', performance: '-0.56%', color: 'red' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-slate-300">{item.sector}</span>
                    <span className={`font-medium text-${item.color}-400`}>{item.performance}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="technical" className="space-y-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Technical Indicators</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-white">Moving Averages</h3>
                  {[
                    { period: 'MA(20)', value: '4,532.45', signal: 'BULLISH', color: 'emerald' },
                    { period: 'MA(50)', value: '4,489.23', signal: 'BULLISH', color: 'emerald' },
                    { period: 'MA(200)', value: '4,356.78', signal: 'BULLISH', color: 'emerald' },
                  ].map((ma, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                      <div>
                        <div className="text-slate-300">{ma.period}</div>
                        <div className="text-sm text-slate-400">{ma.value}</div>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full bg-${ma.color}-500/20 text-${ma.color}-400`}>
                        {ma.signal}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-white">Momentum Indicators</h3>
                  {[
                    { indicator: 'RSI(14)', value: '67.8', signal: 'NEUTRAL', color: 'yellow' },
                    { indicator: 'MACD', value: '12.34', signal: 'BULLISH', color: 'emerald' },
                    { indicator: 'Stoch %K', value: '78.9', signal: 'OVERBOUGHT', color: 'red' },
                  ].map((indicator, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                      <div>
                        <div className="text-slate-300">{indicator.indicator}</div>
                        <div className="text-sm text-slate-400">{indicator.value}</div>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full bg-${indicator.color}-500/20 text-${indicator.color}-400`}>
                        {indicator.signal}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sentiment" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">News Sentiment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Overall Market</span>
                    <span className="text-emerald-400 font-medium">POSITIVE (78%)</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                  
                  <div className="mt-4 space-y-3">
                    {[
                      { source: 'Financial News', sentiment: 'Positive', score: 82 },
                      { source: 'Social Media', sentiment: 'Neutral', score: 64 },
                      { source: 'Analyst Reports', sentiment: 'Positive', score: 89 },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <span className="text-slate-300">{item.source}</span>
                        <span className={`${item.score > 70 ? 'text-emerald-400' : item.score > 50 ? 'text-yellow-400' : 'text-red-400'}`}>
                          {item.sentiment} ({item.score}%)
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Fear & Greed Index</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">72</div>
                  <div className="text-lg text-emerald-400 mb-4">GREED</div>
                  <div className="w-full bg-slate-700 rounded-full h-3 mb-4">
                    <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-emerald-500 h-3 rounded-full relative">
                      <div className="absolute top-0 bg-white w-1 h-3 rounded-full" style={{ left: '72%' }}></div>
                    </div>
                  </div>
                  <div className="text-sm text-slate-400">
                    Market showing strong optimism. Consider taking profits.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="economic" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { indicator: 'Fed Funds Rate', value: '5.25%', change: 'No change', impact: 'Neutral' },
              { indicator: 'Inflation (CPI)', value: '3.2%', change: '-0.1%', impact: 'Positive' },
              { indicator: 'Unemployment', value: '3.7%', change: '+0.1%', impact: 'Negative' },
              { indicator: 'GDP Growth', value: '2.4%', change: '+0.2%', impact: 'Positive' },
              { indicator: '10Y Treasury', value: '4.35%', change: '-0.05%', impact: 'Positive' },
              { indicator: 'Dollar Index', value: '103.45', change: '+0.23', impact: 'Negative' },
            ].map((econ, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-4">
                  <div className="text-lg font-bold text-white mb-1">{econ.value}</div>
                  <div className="text-sm text-slate-300 mb-2">{econ.indicator}</div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">{econ.change}</span>
                    <span className={`px-2 py-1 rounded-full ${
                      econ.impact === 'Positive' ? 'bg-emerald-500/20 text-emerald-400' :
                      econ.impact === 'Negative' ? 'bg-red-500/20 text-red-400' :
                      'bg-slate-500/20 text-slate-400'
                    }`}>
                      {econ.impact}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MarketAnalysis;
