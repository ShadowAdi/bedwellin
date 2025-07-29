import Banner from "@/components/Banner";
import ExploreDestination from "@/components/ExploreDestination";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { HostsSection } from "@/components/HostsSection";
import PerfectStay from "@/components/PerfectStay";
import ReviewSection from "@/components/ReviewSection";

export default function Home() {
  return (
    <main className="w-screen py-4 pb-0 min-h-screen flex flex-col items-center bg-[#F7F7F7] text-black">
      <Header />
      <Hero />
      <GetStarted />
      <HostsSection />
      <PerfectStay />
      <ExploreDestination />
      <ReviewSection />
      <Banner />
      <Footer/>
    </main>
  );
}
