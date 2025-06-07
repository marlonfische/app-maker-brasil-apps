
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

const DeliveryOrigin = () => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          Origem da Coleta
        </CardTitle>
        <CardDescription>
          A origem será automaticamente sua localização atual (GPS)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
          <MapPin className="w-4 h-4 text-green-600" />
          <span className="text-sm">📍 Sua localização atual será usada</span>
          <Badge variant="outline" className="ml-auto">GPS</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeliveryOrigin;
