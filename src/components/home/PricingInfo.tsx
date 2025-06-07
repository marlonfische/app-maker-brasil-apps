
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PricingInfo = () => {
  return (
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
            <p className="text-2xl font-bold">R$ 5,00</p>
            <p className="text-sm text-gray-600">Por km percorrido</p>
          </div>
          <div className="p-4 bg-white rounded-lg border">
            <h3 className="font-semibold text-orange-600">Taxa Admin</h3>
            <p className="text-2xl font-bold">20%</p>
            <p className="text-sm text-gray-600">Descontada do total</p>
          </div>
        </div>
        <div className="text-center text-sm text-gray-600">
          <Badge variant="outline" className="mb-2">Máximo 3 destinos por entrega</Badge>
          <br />
          Comerciantes podem aumentar o valor, mas não diminuir
        </div>
      </CardContent>
    </Card>
  );
};

export default PricingInfo;
