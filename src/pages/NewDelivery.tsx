
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  MapPin, 
  Plus, 
  Trash2, 
  Calculator,
  CreditCard,
  Banknote,
  Smartphone,
  ArrowLeftRight
} from "lucide-react";
import { Link } from "react-router-dom";

const NewDelivery = () => {
  const [destinations, setDestinations] = useState(['']);
  const [hasReturn, setHasReturn] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card' | 'cash'>('pix');
  const [customCode, setCustomCode] = useState('');
  const [useCustomCode, setUseCustomCode] = useState(false);
  const [calculatedValue, setCalculatedValue] = useState(5.00);
  const [finalValue, setFinalValue] = useState(5.00);

  const addDestination = () => {
    if (destinations.length < 3) {
      setDestinations([...destinations, '']);
    }
  };

  const removeDestination = (index: number) => {
    const newDestinations = destinations.filter((_, i) => i !== index);
    setDestinations(newDestinations);
  };

  const updateDestination = (index: number, value: string) => {
    const newDestinations = [...destinations];
    newDestinations[index] = value;
    setDestinations(newDestinations);
  };

  const calculateDeliveryValue = () => {
    // Simulação do cálculo: R$5 + R$1 por km
    // Aqui seria integrado com um serviço de mapas real
    const baseValue = 5.00;
    const kmValue = destinations.length * 2.5; // Simulação de distância
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

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Origem da Coleta
            </CardTitle>
            <CardDescription>
              A origem será automaticamente sua localização atual (GPS)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
              <MapPin className="w-4 h-4 text-green-600" />
              <span className="text-sm">📍 Sua localização atual será usada</span>
              <Badge variant="outline" className="ml-auto">GPS</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Destinos da Entrega</CardTitle>
            <CardDescription>
              Adicione até 3 destinos para esta entrega
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {destinations.map((destination, index) => (
              <div key={index} className="flex gap-2">
                <div className="flex-1">
                  <Label>Destino {index + 1}</Label>
                  <Input
                    placeholder="Digite o endereço de entrega"
                    value={destination}
                    onChange={(e) => updateDestination(index, e.target.value)}
                  />
                </div>
                {destinations.length > 1 && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-6"
                    onClick={() => removeDestination(index)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
              </div>
            ))}
            
            {destinations.length < 3 && (
              <Button 
                variant="outline" 
                onClick={addDestination}
                className="w-full"
              >
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Destino ({destinations.length}/3)
              </Button>
            )}
          </CardContent>
        </Card>

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
                  onClick={() => setPaymentMethod('pix')}
                  className="flex flex-col h-auto py-3"
                >
                  <Smartphone className="w-5 h-5 mb-1" />
                  PIX
                </Button>
                <Button
                  variant={paymentMethod === 'card' ? 'default' : 'outline'}
                  onClick={() => setPaymentMethod('card')}
                  className="flex flex-col h-auto py-3"
                >
                  <CreditCard className="w-5 h-5 mb-1" />
                  Cartão
                </Button>
                <Button
                  variant={paymentMethod === 'cash' ? 'default' : 'outline'}
                  onClick={() => setPaymentMethod('cash')}
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
                onChange={(e) => setHasReturn(e.target.checked)}
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
              onClick={calculateDeliveryValue}
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
                <p className="text-xs text-gray-500">R$5 base + R$1/km</p>
              </div>
              <div>
                <Label>Valor Final</Label>
                <Input
                  type="number"
                  min={calculatedValue}
                  step="0.01"
                  value={finalValue}
                  onChange={(e) => setFinalValue(Math.max(calculatedValue, parseFloat(e.target.value) || 0))}
                />
                <p className="text-xs text-gray-500">Só pode aumentar</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Código de Segurança</CardTitle>
            <CardDescription>
              Código para liberação do pedido pelo entregador
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="useCustomCode"
                checked={useCustomCode}
                onChange={(e) => setUseCustomCode(e.target.checked)}
                className="rounded"
              />
              <Label htmlFor="useCustomCode">Usar código personalizado</Label>
            </div>

            {useCustomCode ? (
              <Input
                placeholder="Digite seu código personalizado"
                value={customCode}
                onChange={(e) => setCustomCode(e.target.value)}
                maxLength={8}
              />
            ) : (
              <div className="p-3 bg-gray-50 border rounded-lg text-center">
                <span className="font-mono text-lg font-bold">
                  {generateSecurityCode()}
                </span>
                <p className="text-xs text-gray-500 mt-1">Código gerado automaticamente</p>
              </div>
            )}
          </CardContent>
        </Card>

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
                <span className="text-green-600">R$ {finalValue.toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-3">
          <Button className="w-full bg-orange-500 hover:bg-orange-600 h-12 text-lg">
            Solicitar Entrega - R$ {finalValue.toFixed(2)}
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
