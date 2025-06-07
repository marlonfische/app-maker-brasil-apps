
import HomeHeader from "@/components/home/HomeHeader";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import PricingInfo from "@/components/home/PricingInfo";
import UserTypes from "@/components/home/UserTypes";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 p-4">
      <div className="max-w-6xl mx-auto">
        <HomeHeader />
        <FeaturesGrid />
        <PricingInfo />
        <UserTypes />
      </div>
    </div>
  );
};

export default Home;
