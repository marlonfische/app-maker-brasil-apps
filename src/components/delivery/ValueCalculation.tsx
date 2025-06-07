
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator } from "lucide-react";

interface ValueCalculationProps {
  destinations: string[];
  calculatedValue: number;
  finalValue: number;
  adminFee: number;
  totalValue: number;
  onCalculateValue: () => void;
  onFinalValueChange: (value: number) => void;
}

const ValueCalculation = ({ 
  destinations,
  calculatedValue, 
  finalValue, 
  adminFee,
  totalValue,
  onCalculateValue, 
  onFinalValueChange 
}: ValueCalculationProps) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-5 h-5" />
          Valor da Entrega
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button 
          variant="outline" 
          onClick={onCalculateValue}
          className="w-full"
        >
          Calcular Valor Automático
        </Button>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Valor Calculado</Label>
            <div className="text-lg font-bold text-green-600">
              R$ {calculatedValue.toFixed(2)}
            </div>
            <p className="text-xs text-gray-500">R$5 base + R$5/km</p>
          </div>
          <div>
            <Label>Valor Final</Label>
            <Input
              type="number"
              min={calculatedValue}
              step="0.01"
              value={finalValue}
              onChange={(e) => onFinalValueChange(Math.max(calculatedValue, parseFloat(e.target.value) || 0))}
            />
            <p className="text-xs text-gray-500">Só pode aumentar</p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Valor da entrega:</span>
              <span>R$ {finalValue.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-red-600">
              <span>Taxa administrativa (20%):</span>
              <span>- R$ {adminFee.toFixed(2)}</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold">
              <span>Total a pagar:</span>
              <span>R$ {totalValue.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ValueCalculation;
