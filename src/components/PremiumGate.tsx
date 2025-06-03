
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lock, Crown, Star } from 'lucide-react';

interface PremiumGateProps {
  feature: string;
  description: string;
  requiredPlan?: 'Premium' | 'Enterprise';
}

const PremiumGate: React.FC<PremiumGateProps> = ({ 
  feature, 
  description, 
  requiredPlan = 'Premium' 
}) => {
  return (
    <Card className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-amber-500/50">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
          {requiredPlan === 'Enterprise' ? (
            <Crown className="w-8 h-8 text-white" />
          ) : (
            <Star className="w-8 h-8 text-white" />
          )}
        </div>
        <CardTitle className="text-white flex items-center justify-center gap-2">
          <Lock className="w-5 h-5 text-amber-400" />
          {requiredPlan} Feature
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
        <p className="text-slate-300 mb-6">{description}</p>
        <div className="space-y-3">
          <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white">
            Upgrade to {requiredPlan}
          </Button>
          <Button variant="outline" className="w-full border-slate-400 text-slate-300 hover:bg-slate-800">
            View All Plans
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PremiumGate;
