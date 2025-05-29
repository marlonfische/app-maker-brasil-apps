
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Monitor, Users, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            App Maker Brasil
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Sua plataforma completa para Android, iOS e Web
          </p>
          
          {/* Navigation */}
          <div className="flex justify-center gap-4 mb-8">
            <Button asChild>
              <Link to="/admin">Painel Admin</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/dashboard">Dashboard</Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Smartphone className="w-12 h-12 mx-auto text-blue-600 mb-2" />
              <CardTitle className="text-lg">Mobile App</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Aplicativo nativo para Android e iOS com todas as funcionalidades
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Monitor className="w-12 h-12 mx-auto text-green-600 mb-2" />
              <CardTitle className="text-lg">Web App</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Versão web responsiva acessível de qualquer navegador
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <BarChart3 className="w-12 h-12 mx-auto text-purple-600 mb-2" />
              <CardTitle className="text-lg">Painel Admin</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Dashboard completo para gerenciar usuários e conteúdo
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="w-12 h-12 mx-auto text-orange-600 mb-2" />
              <CardTitle className="text-lg">Multi-plataforma</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Um código, múltiplas plataformas com sincronização em tempo real
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="inline-block p-8 bg-white/50 backdrop-blur-sm">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-semibold">Pronto para começar?</h2>
              <p className="text-gray-600">
                Acesse o painel administrativo para configurar seu aplicativo
              </p>
              <Button size="lg" asChild>
                <Link to="/admin">Acessar Painel Admin</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
