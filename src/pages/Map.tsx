
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Navigation, 
  Bell, 
  User, 
  Settings, 
  Wallet, 
  Trophy,
  Plus,
  ArrowLeft,
  Clock,
  Package
} from "lucide-react";
import { Link } from "react-router-dom";

const Map = () => {
  const [userType, setUserType] = useState<'comerciante' | 'entregador'>('comerciante');
  const [activeDeliveries, setActiveDeliveries] = useState(2);

  // Simulação de entregas disponíveis
  const availableDeliveries = [
    { id: 1, origin: "Farmácia Central", destination: "Rua das Flores, 123", value: 8.50, distance: "3.5km", bonus: 3.00 },
    { id: 2, origin: "Mercado São João", destination: "Av. Principal, 456", value: 12.00, distance: "7km", bonus: 0 },
    { id: 3, origin: "Loja do Zé", destination: "Bairro Novo, 789", value: 6.50, distance: "1.5km", bonus: 2.00 },
  ];

  const hotZones = [
    { name: "Centro", activity: "Alta", color: "bg-red-500" },
    { name: "Shopping Mall", activity: "Média", color: "bg-yellow-500" },
    { name: "Bairro Comercial", activity: "Baixa", color: "bg-green-500" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold">RápidX Map</h1>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <select 
              value={userType} 
              onChange={(e) => setUserType(e.target.value as 'comerciante' | 'entregador')}
              className="px-3 py-2 border rounded-lg bg-white"
            >
              <option value="comerciante">Comerciante</option>
              <option value="entregador">Entregador</option>
            </select>
            
            <Button variant="outline" size="sm">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm">
              <User className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Mapa Principal */}
          <div className="lg:col-span-2">
            <Card className="h-[600px]">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Mapa Interativo</span>
                  <Badge variant="outline">
                    <Navigation className="w-3 h-3 mr-1" />
                    GPS Ativo
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-[500px] bg-gradient-to-br from-blue-100 to-green-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600 mb-2">Mapa Interativo</p>
                    <p className="text-sm text-gray-500">Aqui será exibido o mapa com:</p>
                    <ul className="text-sm text-gray-500 list-disc list-inside mt-2">
                      <li>Zonas quentes (heatmap)</li>
                      <li>Entregas disponíveis</li>
                      <li>Sua localização atual</li>
                      <li>Rotas ativas</li>
                    </ul>
                  </div>
                  
                  {/* Simulação de pins no mapa */}
                  <div className="absolute top-10 left-10 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-20 right-20 w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-20 left-20 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-10 right-10 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Painel Lateral */}
          <div className="space-y-6">
            {/* Ações Rápidas */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ações Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-orange-500 hover:bg-orange-600" asChild>
                  <Link to="/wallet">
                    <Wallet className="w-4 h-4 mr-2" />
                    Carteira (R$ 45,80)
                  </Link>
                </Button>
                
                {userType === 'comerciante' && (
                  <Button className="w-full" variant="outline" asChild>
                    <Link to="/new-delivery">
                      <Plus className="w-4 h-4 mr-2" />
                      Solicitar Entrega
                    </Link>
                  </Button>
                )}
                
                <Button className="w-full" variant="outline" asChild>
                  <Link to="/challenges">
                    <Trophy className="w-4 h-4 mr-2" />
                    Desafios
                  </Link>
                </Button>
                
                <Button className="w-full" variant="outline" asChild>
                  <Link to="/profile">
                    <User className="w-4 h-4 mr-2" />
                    Perfil
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Zonas Quentes */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Zonas Quentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {hotZones.map((zone, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${zone.color}`}></div>
                        <span className="font-medium">{zone.name}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {zone.activity}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Entregas Disponíveis (para entregadores) */}
            {userType === 'entregador' && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between">
                    <span>Entregas Disponíveis</span>
                    <Badge>{availableDeliveries.length}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 max-h-80 overflow-y-auto">
                    {availableDeliveries.map((delivery) => (
                      <div key={delivery.id} className="p-3 border rounded-lg bg-white hover:bg-gray-50 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1">
                            <p className="font-medium text-sm">{delivery.origin}</p>
                            <p className="text-xs text-gray-600">{delivery.destination}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-green-600">R$ {delivery.value.toFixed(2)}</p>
                            {delivery.bonus > 0 && (
                              <Badge variant="default" className="text-xs">
                                +R$ {delivery.bonus.toFixed(2)}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">{delivery.distance}</span>
                          <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                            Aceitar
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Status do Entregador */}
            {userType === 'entregador' && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Status Atual</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Entregas Ativas:</span>
                      <Badge variant="outline">{activeDeliveries}/3</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Status:</span>
                      <Badge className="bg-green-500">
                        <Clock className="w-3 h-3 mr-1" />
                        Disponível
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Hoje:</span>
                      <span className="font-medium text-green-600">R$ 67,50</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
