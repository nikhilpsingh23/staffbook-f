import CreativesSection from "../../components/Postloginpage/CreativeSection";
import MapFilterSection from "@/components/shared/MapFilterSection";
import FeaturedJobsSection from "@/components/shared/FeatureSection";
import JobSearchBar from "@/components/Postloginpage/SubMenu";
import ATSResumeSection from "@/components/Postloginpage/ATSResumeSection";
import CompanyLogoSection from "../../components/shared/company-logo";
import ChatShowcaseSection from "@/components/Postloginpage/ChatShowcaseSection";
import ConnectWithRecruiterSection from "@/components/Postloginpage/ConnectWithRecruiterSection";
import PopularRolesSection from '../../components/Postloginpage/PopularRolesSection';

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-[#f7f7fa]">
      {/* <Navbar/> */}
      <JobSearchBar/>
      <FeaturedJobsSection/>
      <PopularRolesSection />
      <CreativesSection/>
      <CompanyLogoSection/>
      <MapFilterSection/>
      <ConnectWithRecruiterSection/>
      <ChatShowcaseSection/>
      <ATSResumeSection/>
      {/* <Footer/> */}
    </main>
  );
}
 