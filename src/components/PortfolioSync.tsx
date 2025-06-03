
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, Download, RefreshCw, AlertCircle, CheckCircle, Smartphone } from 'lucide-react';

const PortfolioSync = () => {
  const [syncStatus, setSyncStatus] = useState('disconnected');
  const [holdings, setHoldings] = useState([]);

  const brokers = [
    { name: 'Groww', status: 'Manual Import', color: 'bg-green-500', supported: true },
    { name: 'Zerodha Kite', status: 'API Available', color: 'bg-blue-500', supported: true },
    { name: 'Angel One', status: 'API Available', color: 'bg-purple-500', supported: true },
    { name: 'Upstox', status: 'API Available', color: 'bg-orange-500', supported: true },
    { name: 'ICICI Direct', status: 'Manual Import', color: 'bg-red-500', supported: false },
  ];

  const handleGrowwImport = () => {
    setSyncStatus('importing');
    // Simulate import process
    setTimeout(() => {
      setSyncStatus('success');
      setHoldings([
        { symbol: 'RELIANCE', quantity: 50, avgPrice: 2420.50 },
        { symbol: 'TCS', quantity: 25, avgPrice: 3750.00 },
        { symbol: 'INFY', quantity: 75, avgPrice: 1580.30 },
      ]);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Smartphone className="w-5 h-5 text-blue-400" />
            <span>Broker Integration</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="groww" className="space-y-4">
            <TabsList className="bg-slate-700 border-slate-600">
              <TabsTrigger value="groww">Groww (Manual)</TabsTrigger>
              <TabsTrigger value="api">API Brokers</TabsTrigger>
              <TabsTrigger value="import">CSV Import</TabsTrigger>
            </TabsList>

            <TabsContent value="groww" className="space-y-4">
              <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <h3 className="font-medium text-blue-300 mb-2">Connect with Groww Portfolio</h3>
                <p className="text-sm text-slate-300 mb-4">
                  Since Groww doesn't provide public APIs, you can manually import your portfolio data for analysis.
                </p>
                
                <div className="space-y-3">
                  <div className="text-sm text-slate-300">
                    <strong>How to import from Groww:</strong>
                    <ol className="list-decimal list-inside mt-2 space-y-1 text-xs">
                      <li>Open Groww app → Go to Portfolio</li>
                      <li>Take screenshots or note down your holdings</li>
                      <li>Enter the data manually below or upload CSV</li>
                    </ol>
                  </div>

                  {syncStatus === 'disconnected' && (
                    <Button 
                      onClick={handleGrowwImport}
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Start Manual Import
                    </Button>
                  )}

                  {syncStatus === 'importing' && (
                    <Button disabled className="w-full">
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Processing...
                    </Button>
                  )}

                  {syncStatus === 'success' && (
                    <div className="space-y-3">
                      <div className="flex items-center text-green-400">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Portfolio imported successfully!
                      </div>
                      <Button variant="outline" className="w-full">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Refresh Data
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="api" className="space-y-4">
              <div className="grid gap-3">
                {brokers.filter(broker => broker.supported && broker.name !== 'Groww').map((broker, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 ${broker.color} rounded-full`}></div>
                      <div>
                        <div className="text-white font-medium">{broker.name}</div>
                        <div className="text-xs text-slate-400">{broker.status}</div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Connect
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-amber-400 mt-0.5" />
                  <div className="text-xs text-amber-200">
                    <strong>Note:</strong> API connections require broker-specific authentication and may have usage limits.
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="import" className="space-y-4">
              <div className="space-y-4">
                <div>
                  <Label className="text-slate-300">Upload Portfolio CSV</Label>
                  <div className="mt-2 border-2 border-dashed border-slate-600 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                    <div className="text-sm text-slate-300">Drag and drop your CSV file here</div>
                    <div className="text-xs text-slate-500 mt-1">Format: Symbol, Quantity, Avg Price</div>
                    <Button size="sm" variant="outline" className="mt-3">
                      Choose File
                    </Button>
                  </div>
                </div>

                <Button className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Sample CSV Template
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {holdings.length > 0 && (
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Imported Holdings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {holdings.map((holding, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                  <div>
                    <div className="text-white font-medium">{holding.symbol}</div>
                    <div className="text-sm text-slate-400">Qty: {holding.quantity}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white">₹{holding.avgPrice}</div>
                    <Badge variant="outline" className="text-xs">
                      Synced
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PortfolioSync;
