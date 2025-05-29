
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Smartphone, 
  Globe, 
  TrendingUp, 
  Settings, 
  Bell,
  Download,
  Eye
} from "lucide-react";
import { Link } from "react-router-dom";

const Admin = () => {
  const stats = [
    { title: "Usuários Ativos", value: "1,247", change: "+12%", icon: Users },
    { title: "Downloads Mobile", value: "3,456", change: "+24%", icon: Download },
    { title: "Acessos Web", value: "8,123", change: "+8%", icon: Globe },
    { title: "Engajamento", value: "94%", change: "+5%", icon: TrendingUp },
  ];

  const platforms = [
    { name: "Android", status: "Ativo", users: 892, color: "green" },
    { name: "iOS", status: "Ativo", users: 654, color: "blue" },
    { name: "Web", status: "Ativo", users: 1543, color: "purple" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Painel Administrativo</h1>
            <p className="text-gray-600 mt-2">Gerencie seu aplicativo multi-plataforma</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <Link to="/">← Voltar ao App</Link>
            </Button>
            <Button variant="outline">
              <Bell className="w-4 h-4 mr-2" />
              Notificações
            </Button>
            <Button>
              <Settings className="w-4 h-4 mr-2" />
              Configurações
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">{stat.change}</span> em relação ao mês passado
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Platform Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                Status das Plataformas
              </CardTitle>
              <CardDescription>
                Monitoramento em tempo real de todas as plataformas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {platforms.map((platform) => (
                <div key={platform.name} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full bg-${platform.color}-500`}></div>
                    <div>
                      <div className="font-medium">{platform.name}</div>
                      <div className="text-sm text-gray-600">{platform.users} usuários ativos</div>
                    </div>
                  </div>
                  <Badge variant={platform.color === "green" ? "default" : "secondary"}>
                    {platform.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Ações Rápidas
              </CardTitle>
              <CardDescription>
                Funcionalidades principais do painel
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <Users className="w-4 h-4 mr-2" />
                Gerenciar Usuários
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Eye className="w-4 h-4 mr-2" />
                Visualizar Analytics
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Bell className="w-4 h-4 mr-2" />
                Enviar Notificações
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Exportar Dados
              </Button>
              <Button className="w-full justify-start" variant="outline" asChild>
                <Link to="/dashboard">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Ver Dashboard Completo
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Mobile Instructions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Instruções para Mobile</CardTitle>
            <CardDescription>
              Como testar o aplicativo em dispositivos móveis
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-medium mb-2">Para testar em dispositivo físico:</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>Exporte o projeto para o GitHub clicando no botão "Export to Github"</li>
                <li>Faça git pull do projeto em sua máquina</li>
                <li>Execute: <code className="bg-white px-2 py-1 rounded">npm install</code></li>
                <li>Adicione as plataformas: <code className="bg-white px-2 py-1 rounded">npx cap add ios</code> e/ou <code className="bg-white px-2 py-1 rounded">npx cap add android</code></li>
                <li>Atualize: <code className="bg-white px-2 py-1 rounded">npx cap update</code></li>
                <li>Execute o build: <code className="bg-white px-2 py-1 rounded">npm run build</code></li>
                <li>Sincronize: <code className="bg-white px-2 py-1 rounded">npx cap sync</code></li>
                <li>Execute: <code className="bg-white px-2 py-1 rounded">npx cap run android</code> ou <code className="bg-white px-2 py-1 rounded">npx cap run ios</code></li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
