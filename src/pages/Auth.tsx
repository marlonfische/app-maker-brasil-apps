
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Upload, User, Briefcase, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const Auth = () => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [userType, setUserType] = useState<'comerciante' | 'entregador'>('comerciante');
  const [step, setStep] = useState(1);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('Arquivo selecionado:', file.name);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 p-4 flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Link>
          </Button>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold">RápidX</h1>
          </div>
        </div>

        <Card className="border-orange-200">
          <CardHeader className="text-center">
            <CardTitle>
              {mode === 'login' ? 'Entrar na sua conta' : 'Criar conta'}
            </CardTitle>
            <CardDescription>
              {mode === 'login' 
                ? 'Entre com suas credenciais para acessar o app' 
                : 'Cadastre-se para começar a usar o RápidX'
              }
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {mode === 'register' && step === 1 && (
              <div className="space-y-4">
                <div>
                  <Label>Tipo de Usuário</Label>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <Button 
                      variant={userType === 'comerciante' ? 'default' : 'outline'}
                      onClick={() => setUserType('comerciante')}
                      className="flex flex-col h-auto py-4"
                    >
                      <Briefcase className="w-6 h-6 mb-2" />
                      Comerciante
                    </Button>
                    <Button 
                      variant={userType === 'entregador' ? 'default' : 'outline'}
                      onClick={() => setUserType('entregador')}
                      className="flex flex-col h-auto py-4"
                    >
                      <Truck className="w-6 h-6 mb-2" />
                      Entregador
                    </Button>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" placeholder="Seu nome completo" />
                </div>
                
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
                
                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" placeholder="(11) 99999-9999" />
                </div>
                
                <div>
                  <Label htmlFor="cpf">CPF</Label>
                  <Input id="cpf" placeholder="000.000.000-00" />
                </div>
                
                <Button 
                  className="w-full bg-orange-500 hover:bg-orange-600"
                  onClick={() => setStep(2)}
                >
                  Continuar
                </Button>
              </div>
            )}

            {mode === 'register' && step === 2 && (
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Upload de Documentos</h3>
                  <p className="text-sm text-gray-600">
                    Envie uma foto do seu RG ou CNH para verificação
                  </p>
                </div>
                
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                  <Label htmlFor="document" className="cursor-pointer">
                    <span className="text-sm text-gray-600">
                      Clique para selecionar ou arraste o arquivo
                    </span>
                    <Input 
                      id="document" 
                      type="file" 
                      accept="image/*,.pdf"
                      className="hidden" 
                      onChange={handleFileUpload}
                    />
                  </Label>
                </div>
                
                {userType === 'comerciante' && (
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="business-name">Nome do Estabelecimento</Label>
                      <Input id="business-name" placeholder="Nome da sua empresa" />
                    </div>
                    <div>
                      <Label htmlFor="cnpj">CNPJ (opcional)</Label>
                      <Input id="cnpj" placeholder="00.000.000/0000-00" />
                    </div>
                    <div>
                      <Label htmlFor="address">Endereço Completo</Label>
                      <Input id="address" placeholder="Rua, número, bairro, cidade" />
                    </div>
                  </div>
                )}
                
                {userType === 'entregador' && (
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="vehicle">Tipo de Veículo</Label>
                      <select id="vehicle" className="w-full px-3 py-2 border rounded-md">
                        <option value="">Selecione seu veículo</option>
                        <option value="moto">Moto</option>
                        <option value="bicicleta">Bicicleta</option>
                        <option value="carro">Carro</option>
                        <option value="pe">A pé</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="pix-key">Chave PIX (para recebimentos)</Label>
                      <Input id="pix-key" placeholder="Sua chave PIX" />
                    </div>
                  </div>
                )}
                
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="text-sm text-yellow-800">
                    <strong>Atenção:</strong> Seu cadastro passará por análise manual. 
                    Você receberá um e-mail quando for aprovado.
                  </p>
                </div>
                
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  Finalizar Cadastro
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setStep(1)}
                >
                  Voltar
                </Button>
              </div>
            )}

            {mode === 'login' && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="login-email">E-mail</Label>
                  <Input id="login-email" type="email" placeholder="seu@email.com" />
                </div>
                
                <div>
                  <Label htmlFor="password">Senha</Label>
                  <Input id="password" type="password" placeholder="Sua senha" />
                </div>
                
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  Entrar
                </Button>
                
                <div className="text-center">
                  <Button variant="link" className="text-sm">
                    Esqueci minha senha
                  </Button>
                </div>
              </div>
            )}
            
            <div className="text-center pt-4 border-t">
              <Button 
                variant="link" 
                onClick={() => {
                  setMode(mode === 'login' ? 'register' : 'login');
                  setStep(1);
                }}
              >
                {mode === 'login' 
                  ? 'Não tem conta? Cadastre-se' 
                  : 'Já tem conta? Entre aqui'
                }
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center mt-6">
          <Badge variant="outline" className="text-xs">
            Todos os cadastros passam por aprovação manual
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Auth;
