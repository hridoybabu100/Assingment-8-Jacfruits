import Animation from "@/components/Animation/Animation";
import BannedCard from "@/components/Bannedcard/BannedCard";
import Banner from "@/components/Banner/Banner";
import BreakingFruits from "@/components/BreakingFruits/BreakingFruits";
import Jackfruits from "@/components/Jackfruits/Jackfruits";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <BreakingFruits></BreakingFruits>
      <Jackfruits></Jackfruits>
      <BannedCard></BannedCard>
      <Animation></Animation>
    </div>
  );
}
