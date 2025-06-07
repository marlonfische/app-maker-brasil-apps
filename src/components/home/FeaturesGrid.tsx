
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Wallet, Trophy, Clock, Bell, User } from "lucide-react";

const FeaturesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      <Card className="text-center hover:shadow-lg transition-shadow border-orange-200">
        <CardHeader>
          <MapPin className="w-12 h-12 mx-auto text-orange-600 mb-2" />
          <CardTitle className="text-lg">Mapa Interativo</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Visualize zonas quentes, entregas disponíveis e sua localização em tempo real
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="text-center hover:shadow-lg transition-shadow border-orange-200">
        <CardHeader>
          <Wallet className="w-12 h-12 mx-auto text-green-600 mb-2" />
          <CardTitle className="text-lg">Carteira Virtual</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Gerencie seus pagamentos, recebimentos e saques de forma segura
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="text-center hover:shadow-lg transition-shadow border-orange-200">
        <CardHeader>
          <Trophy className="w-12 h-12 mx-auto text-purple-600 mb-2" />
          <CardTitle className="text-lg">Desafios</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Comerciantes podem criar desafios com bônus para suas entregas
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="text-center hover:shadow-lg transition-shadow border-orange-200">
        <CardHeader>
          <Clock className="w-12 h-12 mx-auto text-blue-600 mb-2" />
          <CardTitle className="text-lg">Entregas Rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Sistema automatizado: R$5 + R$5/km com até 3 destinos por entrega
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="text-center hover:shadow-lg transition-shadow border-orange-200">
        <CardHeader>
          <Bell className="w-12 h-12 mx-auto text-indigo-600 mb-2" />
          <CardTitle className="text-lg">Notificações</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Receba notificações em tempo real sobre novas entregas e atualizações
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="text-center hover:shadow-lg transition-shadow border-orange-200">
        <CardHeader>
          <User className="w-12 h-12 mx-auto text-red-600 mb-2" />
          <CardTitle className="text-lg">Aprovação Manual</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Todos os cadastros passam por verificação manual para maior segurança
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeaturesGrid;
