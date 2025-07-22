import Navbar from "@/components/Navbar";
import Image from "next/image";
import Hero from "../components/Homepage/HeroSection";
import CategoriesWithNews from "../components/Homepage/merge2and3";
import ExpertsSection from "../components/Homepage/connection";
import ResumeSection from "../components/Homepage/resume";
import CompanyLogoSection from "../components/Homepage/company-logo";
import CombinedChatJobSection from "../components/Homepage/liveAndchatSection";
import Footer from "@/components/Footer";
import PremiumSection from "../components/Homepage/PremiumSection";
import JobPostSection from "@/components/Homepage/jobpost";

export default function Home() {
  return (
    <>
    {/* <Navbar/> */}
    <Hero/>
    <CategoriesWithNews/>
    <ExpertsSection/>
    <ResumeSection/>
    <CompanyLogoSection/>
    <CombinedChatJobSection/>
    {/* <JobPostSection /> */}
    <PremiumSection/>
    {/* <Footer/> */}
    </>
  );
}
