
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CreditCard, Banknote, Smartphone, ArrowLeftRight } from "lucide-react";

interface PaymentDetailsProps {
  paymentMethod: 'pix' | 'card' | 'cash';
  hasReturn: boolean;
  onPaymentMethodChange: (method: 'pix' | 'card' | 'cash') => void;
  onHasReturnChange: (hasReturn: boolean) => void;
}

const PaymentDetails = ({ 
  paymentMethod, 
  hasReturn, 
  onPaymentMethodChange, 
  onHasReturnChange 
}: PaymentDetailsProps) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Detalhes do Pagamento</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>Como o cliente final irá pagar?</Label>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <Button
              variant={paymentMethod === 'pix' ? 'default' : 'outline'}
              onClick={() => onPaymentMethodChange('pix')}
              className="flex flex-col h-auto py-3"
            >
              <Smartphone className="w-5 h-5 mb-1" />
              PIX
            </Button>
            <Button
              variant={paymentMethod === 'card' ? 'default' : 'outline'}
              onClick={() => onPaymentMethodChange('card')}
              className="flex flex-col h-auto py-3"
            >
              <CreditCard className="w-5 h-5 mb-1" />
              Cartão
            </Button>
            <Button
              variant={paymentMethod === 'cash' ? 'default' : 'outline'}
              onClick={() => onPaymentMethodChange('cash')}
              className="flex flex-col h-auto py-3"
            >
              <Banknote className="w-5 h-5 mb-1" />
              Dinheiro
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="hasReturn"
            checked={hasReturn}
            onChange={(e) => onHasReturnChange(e.target.checked)}
            className="rounded"
          />
          <Label htmlFor="hasReturn" className="flex items-center gap-2">
            <ArrowLeftRight className="w-4 h-4" />
            Entrega com retorno (troco/débito)
          </Label>
        </div>

        {hasReturn && (
          <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              O entregador precisará retornar dinheiro ou cartão de débito ao estabelecimento após a entrega.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PaymentDetails;
