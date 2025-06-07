
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const UserTypes = () => {
  return (
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
  );
};

export default UserTypes;
