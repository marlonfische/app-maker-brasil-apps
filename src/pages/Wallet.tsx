
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Wallet, 
  Plus, 
  Minus,
  CreditCard,
  Smartphone,
  TrendingUp,
  TrendingDown,
  Clock,
  DollarSign
} from "lucide-react";
import { Link } from "react-router-dom";

const WalletPage = () => {
  const [userType] = useState<'comerciante' | 'entregador'>('comerciante');
  const [balance] = useState(145.80);
  const [addAmount, setAddAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const transactions = [
    { id: 1, type: 'credit', description: 'Recarga via PIX', amount: 100.00, date: '2024-01-15 14:30', status: 'completed' },
    { id: 2, type: 'debit', description: 'Entrega #1234', amount: -12.50, date: '2024-01-15 13:45', status: 'completed' },
    { id: 3, type: 'debit', description: 'Entrega #1235', amount: -8.75, date: '2024-01-15 12:20', status: 'completed' },
    { id: 4, type: 'credit', description: 'Recarga via Cartão', amount: 50.00, date: '2024-01-14 16:15', status: 'completed' },
    { id: 5, type: 'pending', description: 'Saque solicitado', amount: -25.00, date: '2024-01-14 15:30', status: 'pending' },
  ];

  const calculateCardFee = (amount: number) => {
    return amount * 0.0299; // 2.99%
  };

  const calculateFinalAmount = (amount: number) => {
    return amount - calculateCardFee(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/map">
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Carteira Virtual</h1>
        </div>

        {/* Saldo Principal */}
        <Card className="mb-6 bg-gradient-to-r from-orange-500 to-red-600 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Wallet className="w-6 h-6" />
              Saldo Disponível
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold mb-2">
              R$ {balance.toFixed(2)}
            </div>
            <p className="text-orange-100">
              {userType === 'comerciante' 
                ? 'Disponível para pagamento de entregas' 
                : 'Disponível para saque'
              }
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Adicionar Saldo (Comerciante) */}
          {userType === 'comerciante' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="w-5 h-5 text-green-600" />
                  Adicionar Saldo
                </CardTitle>
                <CardDescription>
                  Recarregue sua carteira para pagar entregas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Valor a adicionar</Label>
                  <Input
                    type="number"
                    placeholder="Ex: 100,00"
                    value={addAmount}
                    onChange={(e) => setAddAmount(e.target.value)}
                    min="10"
                    step="0.01"
                  />
                </div>

                <div className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Smartphone className="w-4 h-4" />
                        <span className="font-medium">PIX</span>
                      </div>
                      <Badge variant="outline" className="text-green-600">Sem taxa</Badge>
                    </div>
                    <p className="text-sm text-gray-600">Crédito instantâneo</p>
                    <Button className="w-full mt-2 bg-green-600 hover:bg-green-700">
                      Pagar com PIX
                    </Button>
                  </div>

                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4" />
                        <span className="font-medium">Cartão de Crédito</span>
                      </div>
                      <Badge variant="outline" className="text-orange-600">Taxa 2,99%</Badge>
                    </div>
                    {addAmount && (
                      <div className="text-sm space-y-1 mb-2">
                        <div className="flex justify-between">
                          <span>Valor:</span>
                          <span>R$ {parseFloat(addAmount || '0').toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-orange-600">
                          <span>Taxa:</span>
                          <span>-R$ {calculateCardFee(parseFloat(addAmount || '0')).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-bold border-t pt-1">
                          <span>Crédito final:</span>
                          <span>R$ {calculateFinalAmount(parseFloat(addAmount || '0')).toFixed(2)}</span>
                        </div>
                      </div>
                    )}
                    <Button className="w-full mt-2" variant="outline">
                      Pagar com Cartão
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Sacar Saldo (Entregador) */}
          {userType === 'entregador' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Minus className="w-5 h-5 text-blue-600" />
                  Solicitar Saque
                </CardTitle>
                <CardDescription>
                  Transfira seus ganhos para sua conta
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Valor a sacar</Label>
                  <Input
                    type="number"
                    placeholder="Ex: 50,00"
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                    min="10"
                    max={balance}
                    step="0.01"
                  />
                </div>

                <div className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4" />
                      <span className="font-medium">Saque via PIX</span>
                    </div>
                    <Badge variant="outline" className="text-orange-600">Taxa R$ 5,00</Badge>
                  </div>
                  {withdrawAmount && (
                    <div className="text-sm space-y-1 mb-2">
                      <div className="flex justify-between">
                        <span>Valor:</span>
                        <span>R$ {parseFloat(withdrawAmount || '0').toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-orange-600">
                        <span>Taxa:</span>
                        <span>-R$ 5,00</span>
                      </div>
                      <div className="flex justify-between font-bold border-t pt-1">
                        <span>Você recebe:</span>
                        <span>R$ {Math.max(0, parseFloat(withdrawAmount || '0') - 5).toFixed(2)}</span>
                      </div>
                    </div>
                  )}
                  <Button className="w-full mt-2 bg-blue-600 hover:bg-blue-700">
                    Solicitar Saque
                  </Button>
                </div>

                <div className="text-xs text-gray-500">
                  Saques são processados em até 24 horas úteis
                </div>
              </CardContent>
            </Card>
          )}

          {/* Estatísticas */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Resumo do Mês
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-green-600 mx-auto mb-1" />
                  <div className="font-bold text-green-600">R$ 420,50</div>
                  <div className="text-xs text-gray-600">
                    {userType === 'comerciante' ? 'Recargas' : 'Ganhos'}
                  </div>
                </div>
                <div className="text-center p-3 bg-red-50 rounded-lg">
                  <TrendingDown className="w-5 h-5 text-red-600 mx-auto mb-1" />
                  <div className="font-bold text-red-600">R$ 287,30</div>
                  <div className="text-xs text-gray-600">
                    {userType === 'comerciante' ? 'Gastos' : 'Saques'}
                  </div>
                </div>
              </div>
              
              <div className="pt-2 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Saldo líquido:</span>
                  <span className="font-bold text-green-600">+R$ 133,20</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Histórico de Transações */}
        <Card>
          <CardHeader>
            <CardTitle>Histórico de Transações</CardTitle>
            <CardDescription>
              Suas últimas movimentações na carteira
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === 'credit' ? 'bg-green-100' :
                      transaction.type === 'debit' ? 'bg-red-100' : 'bg-yellow-100'
                    }`}>
                      {transaction.type === 'credit' && <TrendingUp className="w-5 h-5 text-green-600" />}
                      {transaction.type === 'debit' && <TrendingDown className="w-5 h-5 text-red-600" />}
                      {transaction.type === 'pending' && <Clock className="w-5 h-5 text-yellow-600" />}
                    </div>
                    <div>
                      <div className="font-medium">{transaction.description}</div>
                      <div className="text-sm text-gray-500">{transaction.date}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-bold ${
                      transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.amount > 0 ? '+' : ''}R$ {Math.abs(transaction.amount).toFixed(2)}
                    </div>
                    <Badge variant={transaction.status === 'completed' ? 'default' : 'outline'} className="text-xs">
                      {transaction.status === 'completed' ? 'Concluído' : 'Pendente'}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WalletPage;
