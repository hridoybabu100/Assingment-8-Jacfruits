import BannedCard from "@/components/Bannedcard/BannedCard";
import Banner from "@/components/Banner/Banner";
import BreakingFruits from "@/components/BreakingFruits/BreakingFruits";
import Jackfruits from "@/components/Jackfruits/Jackfruits";


export default function Home() {
  return (
    <div>
      <BreakingFruits></BreakingFruits>
      <Banner></Banner>
      <Jackfruits></Jackfruits>
      <BannedCard></BannedCard>
    </div>
  );
}
