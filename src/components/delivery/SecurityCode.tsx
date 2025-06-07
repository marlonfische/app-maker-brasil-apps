
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SecurityCodeProps {
  useCustomCode: boolean;
  customCode: string;
  onUseCustomCodeChange: (useCustom: boolean) => void;
  onCustomCodeChange: (code: string) => void;
  generateSecurityCode: () => string;
}

const SecurityCode = ({ 
  useCustomCode, 
  customCode, 
  onUseCustomCodeChange, 
  onCustomCodeChange,
  generateSecurityCode
}: SecurityCodeProps) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Código de Segurança</CardTitle>
        <CardDescription>
          Código para liberação do pedido pelo entregador
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="useCustomCode"
            checked={useCustomCode}
            onChange={(e) => onUseCustomCodeChange(e.target.checked)}
            className="rounded"
          />
          <Label htmlFor="useCustomCode">Usar código personalizado</Label>
        </div>

        {useCustomCode ? (
          <Input
            placeholder="Digite seu código personalizado"
            value={customCode}
            onChange={(e) => onCustomCodeChange(e.target.value)}
            maxLength={8}
          />
        ) : (
          <div className="p-3 bg-gray-50 border rounded-lg text-center">
            <span className="font-mono text-lg font-bold">
              {generateSecurityCode()}
            </span>
            <p className="text-xs text-gray-500 mt-1">Código gerado automaticamente</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SecurityCode;
