
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, TrendingUp, AlertTriangle, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AIRecommendations = () => {
  const recommendations = [
    {
      type: 'opportunity',
      icon: TrendingUp,
      title: 'Strong Buy Signal',
      subtitle: 'TSLA showing bullish momentum',
      confidence: 89,
      action: 'Consider buying 20 shares',
      color: 'emerald',
    },
    {
      type: 'warning',
      icon: AlertTriangle,
      title: 'Risk Alert',
      subtitle: 'High volatility detected in tech sector',
      confidence: 94,
      action: 'Reduce position sizes by 15%',
      color: 'yellow',
    },
    {
      type: 'rebalance',
      icon: Target,
      title: 'Portfolio Rebalancing',
      subtitle: 'Tech allocation above target (45% vs 40%)',
      confidence: 76,
      action: 'Sell $2,400 in tech stocks',
      color: 'blue',
    },
  ];

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center space-x-2">
          <Bot className="w-5 h-5 text-blue-400" />
          <span>AI Recommendations</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <div key={index} className="p-4 bg-slate-700/30 rounded-lg border border-slate-600">
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg bg-${rec.color}-500/20`}>
                  <rec.icon className={`w-4 h-4 text-${rec.color}-400`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-white">{rec.title}</h4>
                    <span className="text-xs text-slate-400">{rec.confidence}% confidence</span>
                  </div>
                  <p className="text-sm text-slate-300 mb-2">{rec.subtitle}</p>
                  <p className="text-xs text-slate-400 mb-3">{rec.action}</p>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="text-xs h-7">
                      Accept
                    </Button>
                    <Button size="sm" variant="ghost" className="text-xs h-7">
                      Dismiss
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AIRecommendations;
