import Navbar from "@/app/components/navbar";
import HeroSection from "../Hero";
import SecondSection from "../SecondSection";
import ThirdSection from "../ThirdSection";
import FourthSection from "../FourthSection";
import Footer from "../Footer";


export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
    </div>
  )
}
