import Navbar from "@/components/Navbar";
import Image from "next/image";
import Hero from "./Homepage/HeroSection";
import PopularRoles from "./Homepage/section2";
import Professional from "./Homepage/professional-media";
import Categories from "./Homepage/section2";
import CategoriesWithNews from "./Homepage/merge2and3";
import LiveChatSection from "./Homepage/livechat";
import JobPostSection from "./Homepage/jobpost";
import ExpertsSection from "./Homepage/connection";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    {/*<PopularRoles/>
    <Professional/> */}
    <CategoriesWithNews/>
    <ExpertsSection/>
    <LiveChatSection/>
    <JobPostSection/>
    </>
  );
}
