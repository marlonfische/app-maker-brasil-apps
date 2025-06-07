
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import DeliveryOrigin from "@/components/delivery/DeliveryOrigin";
import DestinationsInput from "@/components/delivery/DestinationsInput";
import PaymentDetails from "@/components/delivery/PaymentDetails";
import ValueCalculation from "@/components/delivery/ValueCalculation";
import SecurityCode from "@/components/delivery/SecurityCode";
import DeliverySummary from "@/components/delivery/DeliverySummary";

const NewDelivery = () => {
  const [destinations, setDestinations] = useState(['']);
  const [hasReturn, setHasReturn] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card' | 'cash'>('pix');
  const [customCode, setCustomCode] = useState('');
  const [useCustomCode, setUseCustomCode] = useState(false);
  const [calculatedValue, setCalculatedValue] = useState(10.00);
  const [finalValue, setFinalValue] = useState(10.00);

  // Cálculo dos valores
  const adminFee = finalValue * 0.20; // 20% de taxa administrativa
  const totalValue = finalValue + adminFee; // Valor total que o comerciante paga

  const calculateDeliveryValue = () => {
    // Novo cálculo: R$5 inicial + R$5 por km
    const baseValue = 5.00;
    const kmValue = destinations.filter(d => d.trim()).length * 5.00; // R$5 por km
    const total = baseValue + kmValue;
    setCalculatedValue(total);
    setFinalValue(total);
  };

  const generateSecurityCode = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/map">
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Nova Entrega</h1>
        </div>

        <DeliveryOrigin />

        <DestinationsInput 
          destinations={destinations}
          onDestinationsChange={setDestinations}
        />

        <PaymentDetails 
          paymentMethod={paymentMethod}
          hasReturn={hasReturn}
          onPaymentMethodChange={setPaymentMethod}
          onHasReturnChange={setHasReturn}
        />

        <ValueCalculation 
          destinations={destinations}
          calculatedValue={calculatedValue}
          finalValue={finalValue}
          adminFee={adminFee}
          totalValue={totalValue}
          onCalculateValue={calculateDeliveryValue}
          onFinalValueChange={setFinalValue}
        />

        <SecurityCode 
          useCustomCode={useCustomCode}
          customCode={customCode}
          onUseCustomCodeChange={setUseCustomCode}
          onCustomCodeChange={setCustomCode}
          generateSecurityCode={generateSecurityCode}
        />

        <DeliverySummary 
          destinations={destinations}
          paymentMethod={paymentMethod}
          hasReturn={hasReturn}
          totalValue={totalValue}
        />

        <div className="space-y-3">
          <Button className="w-full bg-orange-500 hover:bg-orange-600 h-12 text-lg">
            Solicitar Entrega - R$ {totalValue.toFixed(2)}
          </Button>
          
          <p className="text-center text-sm text-gray-600">
            O pagamento será debitado da sua carteira virtual
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewDelivery;
