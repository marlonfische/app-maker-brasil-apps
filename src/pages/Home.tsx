
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Zap, Wallet, Trophy, Settings, Bell, User, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">RápidX</h1>
          </div>
          <p className="text-xl text-gray-600 mb-8">
            Entregas no seu tempo.
          </p>
          
          {/* Quick Actions */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            <Button asChild className="bg-orange-500 hover:bg-orange-600">
              <Link to="/map">Abrir Mapa</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/admin">Painel Admin</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/dashboard">Dashboard</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/auth">Login/Cadastro</Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
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
                Sistema automatizado: R$5 + R$1/km com até 3 destinos por entrega
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

        {/* Pricing Info */}
        <Card className="mb-8 bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
          <CardHeader>
            <CardTitle className="text-center">Como Funciona o Preço</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-white rounded-lg border">
                <h3 className="font-semibold text-orange-600">Valor Base</h3>
                <p className="text-2xl font-bold">R$ 5,00</p>
                <p className="text-sm text-gray-600">Por entrega</p>
              </div>
              <div className="p-4 bg-white rounded-lg border">
                <h3 className="font-semibold text-orange-600">Por Quilômetro</h3>
                <p className="text-2xl font-bold">R$ 1,00</p>
                <p className="text-sm text-gray-600">Adicional por km</p>
              </div>
              <div className="p-4 bg-white rounded-lg border">
                <h3 className="font-semibold text-orange-600">Tempo de Espera</h3>
                <p className="text-2xl font-bold">R$ 1,30</p>
                <p className="text-sm text-gray-600">Por minuto (após 5min)</p>
              </div>
            </div>
            <div className="text-center text-sm text-gray-600">
              <Badge variant="outline" className="mb-2">Máximo 3 destinos por entrega</Badge>
              <br />
              Comerciantes podem aumentar o valor, mas não diminuir
            </div>
          </CardContent>
        </Card>

        {/* User Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-green-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-green-800">Para Comerciantes</CardTitle>
              <CardDescription>Envie suas entregas de forma rápida e segura</CardDescription>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Solicite até 3 destinos por entrega</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Geração automática de código de segurança</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Crie desafios com bônus para entregadores</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Carteira virtual com recarga via Pix/cartão</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-blue-800">Para Entregadores</CardTitle>
              <CardDescription>Ganhe dinheiro fazendo entregas na sua região</CardDescription>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Visualize entregas disponíveis no mapa</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Aceite até 3 entregas simultaneamente</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Receba pagamentos automáticos na carteira</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Saque via Pix (taxa de R$ 5,00)</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
