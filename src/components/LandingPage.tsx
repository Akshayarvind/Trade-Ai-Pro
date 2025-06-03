
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star, TrendingUp, Shield, Zap, Brain, BarChart3, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Trading',
      description: 'Advanced machine learning algorithms analyze NSE/BSE markets in real-time'
    },
    {
      icon: TrendingUp,
      title: 'Market Analysis',
      description: 'Comprehensive technical and fundamental analysis for Indian stocks'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Automated stop-loss, position sizing, and portfolio protection'
    },
    {
      icon: Zap,
      title: 'Real-time Execution',
      description: 'Lightning-fast trade execution with multiple broker integrations'
    },
    {
      icon: BarChart3,
      title: 'Portfolio Tracking',
      description: 'Real-time portfolio monitoring with performance analytics'
    },
    {
      icon: Target,
      title: 'Goal-based Investing',
      description: 'Set financial goals and let AI optimize your investment strategy'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Day Trader, Mumbai',
      content: 'TradeAI Pro has revolutionized my trading. The AI insights helped me achieve 23% returns last quarter.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Investment Analyst, Bangalore',
      content: 'The risk management features are exceptional. It saved me from major losses during market volatility.',
      rating: 5
    },
    {
      name: 'Amit Patel',
      role: 'Portfolio Manager, Delhi',
      content: 'Best-in-class automated trading platform for Indian markets. The NSE/BSE integration is seamless.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 text-emerald-400 text-sm rounded-full border border-emerald-500/30 mb-6">
            <Star className="w-4 h-4 mr-2" />
            India's #1 AI Trading Platform
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Trade Smarter with
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"> AI</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Harness the power of artificial intelligence to automate your stock trading on NSE & BSE. 
            Advanced algorithms, real-time analysis, and automated risk management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-3">
              Start Free Trial
            </Button>
            <Link to="/dashboard">
              <Button variant="outline" size="lg" className="border-slate-400 text-slate-300 hover:bg-slate-800 px-8 py-3">
                View Demo
              </Button>
            </Link>
          </div>
          <div className="mt-8 text-sm text-slate-400">
            ✓ 7-day free trial • ✓ No credit card required • ✓ Cancel anytime
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose TradeAI Pro?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-xl mb-2">Basic</CardTitle>
                <div className="text-3xl font-bold text-white">
                  ₹999<span className="text-lg font-normal text-slate-400">/month</span>
                </div>
                <p className="text-slate-400">Perfect for beginners</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 mr-3" />
                    Paper trading & backtesting
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 mr-3" />
                    Basic market analysis
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 mr-3" />
                    Portfolio tracking
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 mr-3" />
                    Email support
                  </div>
                </div>
                <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white mt-6">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="bg-gradient-to-b from-blue-900/50 to-emerald-900/50 border-blue-500/50 hover:border-blue-400/70 transition-colors relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-white text-xl mb-2">Premium</CardTitle>
                <div className="text-3xl font-bold text-white">
                  ₹2,999<span className="text-lg font-normal text-slate-400">/month</span>
                </div>
                <p className="text-slate-400">For serious traders</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 mr-3" />
                    All Basic features
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 mr-3" />
                    Live automated trading
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 mr-3" />
                    Advanced AI strategies
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 mr-3" />
                    Real-time alerts
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 mr-3" />
                    Priority support
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white mt-6">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-xl mb-2">Enterprise</CardTitle>
                <div className="text-3xl font-bold text-white">
                  ₹9,999<span className="text-lg font-normal text-slate-400">/month</span>
                </div>
                <p className="text-slate-400">For institutions</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 mr-3" />
                    All Premium features
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 mr-3" />
                    Custom AI models
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 mr-3" />
                    Multi-account management
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 mr-3" />
                    API access
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 mr-3" />
                    Dedicated support
                  </div>
                </div>
                <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white mt-6">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Trusted by Traders Across India
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-medium text-white">{testimonial.name}</div>
                    <div className="text-sm text-slate-400">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Trading?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join thousands of traders already using AI to maximize their returns in Indian markets.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-3">
            Start Your Free Trial Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
