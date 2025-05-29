
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Trophy, 
  Plus, 
  Calendar,
  DollarSign,
  Target,
  Star,
  Clock,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";

const Challenges = () => {
  const [userType] = useState<'comerciante' | 'entregador'>('comerciante');
  const [showCreateForm, setShowCreateForm] = useState(false);

  const activeChallengues = [
    {
      id: 1,
      title: "Bônus Farmácia Central",
      description: "Entregas da Farmácia Central hoje terão bônus de R$ 3,00",
      bonus: 3.00,
      validUntil: "2024-01-15 23:59",
      completedDeliveries: 8,
      totalDeliveries: 15,
      creator: "Farmácia Central",
      status: "active"
    },
    {
      id: 2,
      title: "Rush Mercado São João",
      description: "Entregas do Mercado São João entre 18h-20h com bônus R$ 5,00",
      bonus: 5.00,
      validUntil: "2024-01-15 20:00",
      completedDeliveries: 3,
      totalDeliveries: 10,
      creator: "Mercado São João",
      status: "active"
    }
  ];

  const completedChallenges = [
    {
      id: 3,
      title: "Desafio Semanal Loja do Zé",
      description: "Completar 20 entregas da Loja do Zé na semana",
      bonus: 15.00,
      completedDeliveries: 20,
      totalDeliveries: 20,
      creator: "Loja do Zé",
      status: "completed",
      earnedAmount: 15.00
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/map">
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">Desafios</h1>
          </div>

          {userType === 'comerciante' && (
            <Button 
              onClick={() => setShowCreateForm(!showCreateForm)}
              className="bg-orange-500 hover:bg-orange-600"
            >
              <Plus className="w-4 h-4 mr-2" />
              Criar Desafio
            </Button>
          )}
        </div>

        {/* Formulário de Criação (Comerciante) */}
        {userType === 'comerciante' && showCreateForm && (
          <Card className="mb-6 border-orange-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Criar Novo Desafio
              </CardTitle>
              <CardDescription>
                Crie um desafio exclusivo para suas entregas e incentive os entregadores
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Título do Desafio</Label>
                <Input placeholder="Ex: Bônus Entrega Rápida" />
              </div>

              <div>
                <Label>Descrição</Label>
                <Input placeholder="Ex: Entregas do meu estabelecimento hoje terão bônus" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Valor do Bônus (R$)</Label>
                  <Input type="number" placeholder="Ex: 3.00" min="1" step="0.50" />
                </div>
                <div>
                  <Label>Válido até</Label>
                  <Input type="datetime-local" />
                </div>
              </div>

              <div>
                <Label>Número máximo de entregas com bônus</Label>
                <Input type="number" placeholder="Ex: 20" min="1" />
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-medium text-blue-800 mb-2">Regras Importantes:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• O desafio se aplica apenas às entregas do seu estabelecimento</li>
                  <li>• O bônus será pago automaticamente aos entregadores</li>
                  <li>• Você será cobrado pelo valor total dos bônus concedidos</li>
                  <li>• O desafio pode ser cancelado a qualquer momento</li>
                </ul>
              </div>

              <div className="flex gap-3">
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Criar Desafio
                </Button>
                <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                  Cancelar
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Estatísticas do Usuário */}
        <Card className="mb-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-6 h-6" />
              {userType === 'comerciante' ? 'Seus Desafios' : 'Suas Conquistas'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold">
                  {userType === 'comerciante' ? '2' : '12'}
                </div>
                <div className="text-purple-100">
                  {userType === 'comerciante' ? 'Desafios Ativos' : 'Desafios Concluídos'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">
                  {userType === 'comerciante' ? 'R$ 120,00' : 'R$ 78,50'}
                </div>
                <div className="text-purple-100">
                  {userType === 'comerciante' ? 'Investido em Bônus' : 'Ganho em Bônus'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">
                  {userType === 'comerciante' ? '11' : '34'}
                </div>
                <div className="text-purple-100">
                  {userType === 'comerciante' ? 'Entregas Bonificadas' : 'Entregas com Bônus'}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Desafios Ativos */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-green-600" />
              Desafios Ativos
            </CardTitle>
            <CardDescription>
              {userType === 'comerciante' 
                ? 'Desafios que você criou e estão em andamento'
                : 'Desafios disponíveis para você participar'
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeChallengues.map((challenge) => (
                <div key={challenge.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{challenge.title}</h3>
                        <Badge className="bg-green-500">
                          +R$ {challenge.bonus.toFixed(2)}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{challenge.description}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {challenge.creator}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Válido até {new Date(challenge.validUntil).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-sm">
                        <span className="font-medium">{challenge.completedDeliveries}</span>
                        <span className="text-gray-500">/{challenge.totalDeliveries} entregas</span>
                      </div>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${(challenge.completedDeliveries / challenge.totalDeliveries) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    {userType === 'comerciante' ? (
                      <Button variant="outline" size="sm">
                        Gerenciar
                      </Button>
                    ) : (
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                        Participar
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Desafios Concluídos */}
        {completedChallenges.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-600" />
                Desafios Concluídos
              </CardTitle>
              <CardDescription>
                Histórico de desafios finalizados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {completedChallenges.map((challenge) => (
                  <div key={challenge.id} className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{challenge.title}</h3>
                          <Badge variant="outline" className="bg-green-50 text-green-700">
                            Concluído
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{challenge.description}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {challenge.creator}
                          </div>
                          {userType === 'entregador' && (
                            <div className="flex items-center gap-1">
                              <DollarSign className="w-3 h-3" />
                              Ganho: R$ {challenge.earnedAmount?.toFixed(2)}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-sm">
                          <span className="font-medium">{challenge.completedDeliveries}</span>
                          <span className="text-gray-500">/{challenge.totalDeliveries} entregas</span>
                        </div>
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full w-full"></div>
                        </div>
                      </div>
                      
                      <Badge className="bg-green-500">
                        <Trophy className="w-3 h-3 mr-1" />
                        100%
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Challenges;
