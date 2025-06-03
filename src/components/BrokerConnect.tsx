
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, Shield, Zap, Users, CheckCircle, AlertTriangle } from 'lucide-react';

const BrokerConnect = () => {
  const [selectedBroker, setSelectedBroker] = useState('groww');

  const brokers = {
    groww: {
      name: 'Groww',
      logo: '🌱',
      features: ['Zero brokerage on delivery', 'User-friendly interface', 'Popular among beginners'],
      method: 'Manual Portfolio Sync',
      supported: true,
      cost: 'Free',
      integration: 'manual'
    },
    zerodha: {
      name: 'Zerodha Kite',
      logo: '🚀',
      features: ['Advanced charting', 'API access', 'Low brokerage'],
      method: 'Kite Connect API',
      supported: true,
      cost: '₹2000/month',
      integration: 'api'
    },
    angel: {
      name: 'Angel One',
      logo: '👼',
      features: ['Smart API', 'Research reports', 'Multiple segments'],
      method: 'Angel One API',
      supported: true,
      cost: '₹1500/month',
      integration: 'api'
    },
    upstox: {
      name: 'Upstox',
      logo: '📈',
      features: ['Fast execution', 'Developer friendly', 'Good API docs'],
      method: 'Upstox API',
      supported: true,
      cost: '₹1000/month',
      integration: 'api'
    }
  };

  const steps = {
    manual: [
      'Open your broker app/website',
      'Navigate to Portfolio section',
      'Copy your holdings data',
      'Paste or upload to TradeAI Pro',
      'Start receiving AI signals'
    ],
    api: [
      'Create developer account with broker',
      'Generate API keys',
      'Enter credentials in TradeAI Pro',
      'Authorize connection',
      'Enable automated trading (Premium)'
    ]
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Connect Your Broker</h2>
        <p className="text-slate-300">Link your trading account to get personalized AI recommendations</p>
      </div>

      <Tabs value={selectedBroker} onValueChange={setSelectedBroker} className="space-y-6">
        <TabsList className="grid grid-cols-4 bg-slate-800 border-slate-700">
          {Object.entries(brokers).map(([key, broker]) => (
            <TabsTrigger key={key} value={key} className="text-xs">
              {broker.logo} {broker.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(brokers).map(([key, broker]) => (
          <TabsContent key={key} value={key}>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-3">
                  <span className="text-2xl">{broker.logo}</span>
                  <div>
                    <div>{broker.name} Integration</div>
                    <div className="text-sm font-normal text-slate-400">{broker.method}</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium text-white mb-3">Features</h3>
                    <ul className="space-y-2">
                      {broker.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-white mb-3">Integration Steps</h3>
                    <ol className="space-y-2">
                      {steps[broker.integration].map((step, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-slate-300">
                          <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0">
                            {index + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-green-400" />
                    <div>
                      <div className="text-white font-medium">Integration Cost</div>
                      <div className="text-sm text-slate-400">{broker.cost}</div>
                    </div>
                  </div>
                  <Badge className={broker.integration === 'manual' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}>
                    {broker.integration === 'manual' ? 'Free' : 'API Required'}
                  </Badge>
                </div>

                {broker.integration === 'manual' ? (
                  <div className="space-y-4">
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700"
                      onClick={() => window.open('https://groww.in', '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Open {broker.name} & Start Manual Sync
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-slate-300">API Key</Label>
                        <Input 
                          type="password"
                          placeholder="Enter your API key"
                          className="bg-slate-700 border-slate-600 text-white"
                        />
                      </div>
                      <div>
                        <Label className="text-slate-300">API Secret</Label>
                        <Input 
                          type="password"
                          placeholder="Enter your API secret"
                          className="bg-slate-700 border-slate-600 text-white"
                        />
                      </div>
                    </div>
                    
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Zap className="w-4 h-4 mr-2" />
                      Connect {broker.name} API
                    </Button>
                  </div>
                )}

                <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5" />
                    <div className="text-xs text-amber-200">
                      <strong>Security Note:</strong> Your API credentials are encrypted and stored securely. We never store your trading passwords. 
                      {broker.integration === 'api' && ' API access is read-only by default for portfolio analysis.'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <Card className="bg-gradient-to-r from-blue-600/10 to-green-600/10 border-blue-500/30">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <Users className="w-8 h-8 text-blue-400" />
            <div>
              <h3 className="text-white font-medium">Popular Choice</h3>
              <p className="text-slate-300 text-sm">
                Most users start with <strong>Groww manual sync</strong> for free portfolio analysis, then upgrade to API integration for automated features.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BrokerConnect;
