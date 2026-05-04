import Animation from "@/components/Animation/Animation";
import BannedCard from "@/components/Bannedcard/BannedCard";
import Banner from "@/components/Banner/Banner";
import BreakingFruits from "@/components/BreakingFruits/BreakingFruits";
import HotOffer from "@/components/HotOffer/HotOffer";
import Jackfruits from "@/components/Jackfruits/Jackfruits";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <BreakingFruits></BreakingFruits>
      <HotOffer></HotOffer>
      <Jackfruits></Jackfruits>
      <BannedCard></BannedCard>
      <Animation></Animation>
    </div>
  );
}
