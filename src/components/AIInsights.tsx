
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Brain, TrendingUp, AlertTriangle, Target, Lightbulb } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const AIInsights = () => {
  const insights = [
    {
      id: 1,
      type: 'opportunity',
      title: 'Semiconductor Sector Momentum',
      confidence: 92,
      timeframe: '2-4 weeks',
      description: 'Machine learning models detect strong bullish momentum in semiconductor stocks. NVDA, AMD, and INTC showing synchronized technical breakouts with positive earnings revisions.',
      recommendation: 'Consider increasing semiconductor allocation by 5-8%',
      expectedReturn: '+12-18%',
      riskLevel: 'Medium',
      icon: TrendingUp,
      color: 'emerald',
    },
    {
      id: 2,
      type: 'warning',
      title: 'Treasury Yield Inversion Signal',
      confidence: 87,
      timeframe: '1-3 months',
      description: 'Yield curve analysis indicates potential recession signals. 10Y-2Y spread showing concerning patterns historically associated with market corrections.',
      recommendation: 'Reduce cyclical exposure, increase defensive positions',
      expectedReturn: 'Risk mitigation',
      riskLevel: 'High',
      icon: AlertTriangle,
      color: 'red',
    },
    {
      id: 3,
      type: 'rebalance',
      title: 'Portfolio Optimization Opportunity',
      confidence: 79,
      timeframe: 'Immediate',
      description: 'Current allocation shows overweight in growth vs value. Mean reversion models suggest value outperformance in next 6 months.',
      recommendation: 'Rotate 15% from growth to value stocks',
      expectedReturn: '+6-9%',
      riskLevel: 'Low',
      icon: Target,
      color: 'blue',
    },
    {
      id: 4,
      type: 'insight',
      title: 'Earnings Season Alpha Opportunity',
      confidence: 84,
      timeframe: '2-3 weeks',
      description: 'NLP sentiment analysis of management guidance indicates several companies likely to beat estimates. Historical patterns show 73% accuracy.',
      recommendation: 'Focus on AAPL, MSFT, GOOGL earnings plays',
      expectedReturn: '+8-12%',
      riskLevel: 'Medium',
      icon: Lightbulb,
      color: 'yellow',
    },
  ];

  const modelPerformance = [
    { model: 'Technical Analysis AI', accuracy: '78.4%', trades: 234, profit: '+$12,847' },
    { model: 'Fundamental Screener', accuracy: '82.1%', trades: 89, profit: '+$8,923' },
    { model: 'Sentiment Analyzer', accuracy: '71.2%', trades: 156, profit: '+$5,641' },
    { model: 'Risk Management AI', accuracy: '89.7%', trades: 45, profit: '+$3,234' },
  ];

  const learningProgress = [
    { area: 'Market Pattern Recognition', progress: 87, trend: 'improving' },
    { area: 'Earnings Prediction', progress: 79, trend: 'stable' },
    { area: 'Sentiment Analysis', progress: 92, trend: 'improving' },
    { area: 'Risk Assessment', progress: 85, trend: 'improving' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white flex items-center space-x-3">
          <Bot className="w-8 h-8 text-blue-400" />
          <span>AI Insights & Analytics</span>
        </h1>
        <div className="flex items-center space-x-2 text-sm text-slate-300">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <span>AI Models Active • Last Update: 2 min ago</span>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {insights.map((insight) => (
          <Card key={insight.id} className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white flex items-center space-x-2">
                  <insight.icon className={`w-5 h-5 text-${insight.color}-400`} />
                  <span>{insight.title}</span>
                </CardTitle>
                <Badge variant="outline" className={`text-${insight.color}-400 border-${insight.color}-400`}>
                  {insight.confidence}% confidence
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-sm text-slate-300">{insight.description}</div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-slate-400">Timeframe</div>
                    <div className="text-white font-medium">{insight.timeframe}</div>
                  </div>
                  <div>
                    <div className="text-slate-400">Expected Return</div>
                    <div className={`font-medium ${insight.expectedReturn.includes('+') ? 'text-emerald-400' : 'text-slate-300'}`}>
                      {insight.expectedReturn}
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-slate-700/30 rounded-lg">
                  <div className="text-sm font-medium text-white mb-1">AI Recommendation:</div>
                  <div className="text-sm text-slate-300">{insight.recommendation}</div>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" className="flex-1">
                    Implement
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Learn More
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Brain className="w-5 h-5 text-purple-400" />
              <span>AI Model Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {modelPerformance.map((model, index) => (
                <div key={index} className="p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-white">{model.model}</span>
                    <span className="text-emerald-400 font-medium">{model.accuracy}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>{model.trades} trades executed</span>
                    <span className="text-emerald-400">{model.profit}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">AI Learning Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {learningProgress.map((area, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">{area.area}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-medium">{area.progress}%</span>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${area.trend === 'improving' ? 'text-emerald-400 border-emerald-400' : 'text-slate-400 border-slate-400'}`}
                      >
                        {area.trend}
                      </Badge>
                    </div>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-blue-400 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${area.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Recent AI Decision Explanations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                time: '2 minutes ago',
                action: 'Bought 50 shares of AAPL',
                reason: 'Technical Analysis: Golden cross formation detected (50-day MA crossing above 200-day MA). Fundamental Analysis: Strong iPhone 15 sales data from supply chain analysis. Sentiment: 78% positive analyst sentiment shift.',
                confidence: 89,
              },
              {
                time: '15 minutes ago',
                action: 'Sold 25 shares of TSLA',
                reason: 'Technical Analysis: RSI showing overbought conditions (82.3). Risk Management: Position exceeded 8% portfolio allocation threshold. Market Structure: High correlation detected with broader EV sector weakness.',
                confidence: 84,
              },
              {
                time: '1 hour ago',
                action: 'Increased NVDA position by 15 shares',
                reason: 'Earnings Analysis: Beat probability 87% based on options flow and management guidance analysis. Sector Momentum: AI/ML sector showing institutional accumulation. Technical: Bullish flag pattern completion.',
                confidence: 92,
              },
            ].map((decision, index) => (
              <div key={index} className="p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-white">{decision.action}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-slate-400">{decision.time}</span>
                    <Badge variant="outline" className="text-blue-400 border-blue-400 text-xs">
                      {decision.confidence}% confidence
                    </Badge>
                  </div>
                </div>
                <div className="text-sm text-slate-300">{decision.reason}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIInsights;
