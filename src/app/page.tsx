import Navbar from "@/components/Navbar";
import Image from "next/image";
import Hero from "./Homepage/HeroSection";
import CategoriesWithNews from "./Homepage/merge2and3";
import ExpertsSection from "./Homepage/connection";
import ResumeSection from "./Homepage/resume";
import CompanyLogoSection from "./Homepage/company-logo";
import CombinedChatJobSection from "./Homepage/liveAndchatSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <CategoriesWithNews/>
    <ExpertsSection/>
    <ResumeSection/>
    <CompanyLogoSection/>
    <CombinedChatJobSection/>
    <Footer/>
    </>
  );
}
