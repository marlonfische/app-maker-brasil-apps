
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DeliverySummaryProps {
  destinations: string[];
  paymentMethod: 'pix' | 'card' | 'cash';
  hasReturn: boolean;
  totalValue: number;
}

const DeliverySummary = ({ 
  destinations, 
  paymentMethod, 
  hasReturn, 
  totalValue 
}: DeliverySummaryProps) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Resumo da Entrega</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Destinos:</span>
            <span>{destinations.filter(d => d.trim()).length}</span>
          </div>
          <div className="flex justify-between">
            <span>Método de pagamento:</span>
            <Badge variant="outline">
              {paymentMethod === 'pix' && 'PIX'}
              {paymentMethod === 'card' && 'Cartão'}
              {paymentMethod === 'cash' && 'Dinheiro'}
            </Badge>
          </div>
          <div className="flex justify-between">
            <span>Retorno:</span>
            <span>{hasReturn ? 'Sim' : 'Não'}</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-2">
            <span>Valor Total:</span>
            <span className="text-green-600">R$ {totalValue.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeliverySummary;
