
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
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
  );
};

export default HomeHeader;
