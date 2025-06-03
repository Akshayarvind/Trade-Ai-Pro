import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Activity, BarChart3, Globe } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PortfolioSync from './PortfolioSync';
import TradingSignals from './TradingSignals';
import BrokerConnect from './BrokerConnect';

const MarketAnalysis = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Market Analysis (India)</h1>
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
          <TabsTrigger value="signals">AI Signals</TabsTrigger>
          <TabsTrigger value="portfolio">Portfolio Sync</TabsTrigger>
          <TabsTrigger value="brokers">Broker Connect</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                  <span>NIFTY 50</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white mb-2">21,567.89</div>
                <div className="text-emerald-400 text-sm">+1.23% (+267.78)</div>
                <div className="text-xs text-slate-400 mt-2">Strong bullish momentum</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Activity className="w-5 h-5 text-blue-400" />
                  <span>SENSEX</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white mb-2">71,234.56</div>
                <div className="text-emerald-400 text-sm">+2.05% (+1,287.34)</div>
                <div className="text-xs text-slate-400 mt-2">Banking sector leading gains</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-purple-400" />
                  <span>India VIX</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white mb-2">15.45</div>
                <div className="text-red-400 text-sm">-2.34% (-0.37)</div>
                <div className="text-xs text-slate-400 mt-2">Low volatility environment</div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Sector Performance (NSE)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { sector: 'Information Technology', performance: '+3.45%', color: 'emerald' },
                  { sector: 'Banking & Financial', performance: '+2.12%', color: 'emerald' },
                  { sector: 'Pharmaceutical', performance: '+1.87%', color: 'emerald' },
                  { sector: 'FMCG', performance: '+0.92%', color: 'emerald' },
                  { sector: 'Oil & Gas', performance: '-1.23%', color: 'red' },
                  { sector: 'Real Estate', performance: '-0.56%', color: 'red' },
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
              <CardTitle className="text-white">Technical Indicators (NIFTY 50)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-white">Moving Averages</h3>
                  {[
                    { period: 'MA(20)', value: '21,432.45', signal: 'BULLISH', color: 'emerald' },
                    { period: 'MA(50)', value: '21,289.23', signal: 'BULLISH', color: 'emerald' },
                    { period: 'MA(200)', value: '20,956.78', signal: 'BULLISH', color: 'emerald' },
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
                    { indicator: 'MACD', value: '112.34', signal: 'BULLISH', color: 'emerald' },
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
                <CardTitle className="text-white">News Sentiment (India)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Overall Market</span>
                    <span className="text-emerald-400 font-medium">POSITIVE (76%)</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '76%' }}></div>
                  </div>
                  
                  <div className="mt-4 space-y-3">
                    {[
                      { source: 'Economic Times', sentiment: 'Positive', score: 84 },
                      { source: 'Business Standard', sentiment: 'Positive', score: 78 },
                      { source: 'MoneyControl', sentiment: 'Neutral', score: 62 },
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
                <CardTitle className="text-white">FII/DII Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-300">FII Net Flow</span>
                      <span className="text-emerald-400 font-medium">₹2,345 Cr</span>
                    </div>
                    <div className="text-xs text-slate-400">Strong buying interest from Foreign Institutional Investors</div>
                  </div>
                  
                  <div className="p-3 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-300">DII Net Flow</span>
                      <span className="text-blue-400 font-medium">₹1,876 Cr</span>
                    </div>
                    <div className="text-xs text-slate-400">Domestic Institutional Investors showing confidence</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="economic" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { indicator: 'Repo Rate (RBI)', value: '6.50%', change: 'No change', impact: 'Neutral' },
              { indicator: 'CPI Inflation', value: '5.2%', change: '-0.3%', impact: 'Positive' },
              { indicator: 'GDP Growth', value: '7.6%', change: '+0.4%', impact: 'Positive' },
              { indicator: '10Y G-Sec Yield', value: '7.15%', change: '-0.08%', impact: 'Positive' },
              { indicator: 'USD/INR', value: '83.45', change: '+0.23', impact: 'Negative' },
              { indicator: 'Gold (₹/10g)', value: '₹62,450', change: '-₹145', impact: 'Positive' },
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

        <TabsContent value="signals" className="space-y-6">
          <TradingSignals />
        </TabsContent>

        <TabsContent value="portfolio" className="space-y-6">
          <PortfolioSync />
        </TabsContent>

        <TabsContent value="brokers" className="space-y-6">
          <BrokerConnect />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MarketAnalysis;
