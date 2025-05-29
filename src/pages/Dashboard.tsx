
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Smartphone,
  ArrowLeft,
  Download,
  Eye,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const recentActivity = [
    { action: "Novo usuário registrado", time: "2 min atrás", platform: "Android" },
    { action: "Download do app", time: "5 min atrás", platform: "iOS" },
    { action: "Acesso via web", time: "8 min atrás", platform: "Web" },
    { action: "Atualização de perfil", time: "12 min atrás", platform: "Android" },
    { action: "Compartilhamento de conteúdo", time: "15 min atrás", platform: "iOS" },
  ];

  const performanceMetrics = [
    { metric: "Tempo de carregamento", value: "1.2s", target: "< 2s", progress: 85 },
    { metric: "Taxa de retenção", value: "78%", target: "> 70%", progress: 78 },
    { metric: "Satisfação do usuário", value: "4.6/5", target: "> 4.0", progress: 92 },
    { metric: "Uptime da aplicação", value: "99.8%", target: "> 99%", progress: 99.8 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard Analytics</h1>
            <p className="text-gray-600 mt-2">Visão completa do desempenho da aplicação</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <Link to="/admin">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Admin
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/">
                Voltar ao App
              </Link>
            </Button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Usuários</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,847</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+18%</span> este mês
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Downloads</CardTitle>
              <Download className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5,432</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+24%</span> este mês
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sessões Ativas</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+8%</span> agora
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Receita</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 12.450</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+31%</span> este mês
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Performance Metrics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Métricas de Performance
              </CardTitle>
              <CardDescription>
                Indicadores chave de performance da aplicação
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {performanceMetrics.map((metric, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{metric.metric}</span>
                    <span className="text-sm text-gray-600">{metric.value}</span>
                  </div>
                  <Progress value={metric.progress} className="h-2" />
                  <div className="text-xs text-gray-500">Meta: {metric.target}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Atividade Recente
              </CardTitle>
              <CardDescription>
                Últimas ações dos usuários em tempo real
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg bg-white">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div>
                        <div className="font-medium text-sm">{activity.action}</div>
                        <div className="text-xs text-gray-500">{activity.time}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4 text-gray-400" />
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {activity.platform}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Platform Breakdown */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Distribuição por Plataforma</CardTitle>
            <CardDescription>
              Análise detalhada do uso por plataforma
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 border rounded-lg bg-gradient-to-br from-green-50 to-green-100">
                <Smartphone className="w-12 h-12 mx-auto text-green-600 mb-3" />
                <h3 className="font-semibold text-lg">Android</h3>
                <p className="text-2xl font-bold text-green-600">1,547</p>
                <p className="text-sm text-gray-600">54% do total</p>
              </div>
              
              <div className="text-center p-6 border rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
                <Smartphone className="w-12 h-12 mx-auto text-blue-600 mb-3" />
                <h3 className="font-semibold text-lg">iOS</h3>
                <p className="text-2xl font-bold text-blue-600">892</p>
                <p className="text-sm text-gray-600">31% do total</p>
              </div>
              
              <div className="text-center p-6 border rounded-lg bg-gradient-to-br from-purple-50 to-purple-100">
                <Eye className="w-12 h-12 mx-auto text-purple-600 mb-3" />
                <h3 className="font-semibold text-lg">Web</h3>
                <p className="text-2xl font-bold text-purple-600">408</p>
                <p className="text-sm text-gray-600">15% do total</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
