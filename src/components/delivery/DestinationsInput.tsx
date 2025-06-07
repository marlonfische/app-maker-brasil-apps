
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash2 } from "lucide-react";

interface DestinationsInputProps {
  destinations: string[];
  onDestinationsChange: (destinations: string[]) => void;
}

const DestinationsInput = ({ destinations, onDestinationsChange }: DestinationsInputProps) => {
  const addDestination = () => {
    if (destinations.length < 3) {
      onDestinationsChange([...destinations, '']);
    }
  };

  const removeDestination = (index: number) => {
    const newDestinations = destinations.filter((_, i) => i !== index);
    onDestinationsChange(newDestinations);
  };

  const updateDestination = (index: number, value: string) => {
    const newDestinations = [...destinations];
    newDestinations[index] = value;
    onDestinationsChange(newDestinations);
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Destinos da Entrega</CardTitle>
        <CardDescription>
          Adicione até 3 destinos para esta entrega
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {destinations.map((destination, index) => (
          <div key={index} className="flex gap-2">
            <div className="flex-1">
              <Label>Destino {index + 1}</Label>
              <Input
                placeholder="Digite o endereço de entrega"
                value={destination}
                onChange={(e) => updateDestination(index, e.target.value)}
              />
            </div>
            {destinations.length > 1 && (
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-6"
                onClick={() => removeDestination(index)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            )}
          </div>
        ))}
        
        {destinations.length < 3 && (
          <Button 
            variant="outline" 
            onClick={addDestination}
            className="w-full"
          >
            <Plus className="w-4 h-4 mr-2" />
            Adicionar Destino ({destinations.length}/3)
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default DestinationsInput;
