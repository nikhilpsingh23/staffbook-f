import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CreativesSection from "../../components/Postloginpage/CreativeSection";
import MapFilterSection from "@/components/shared/MapFilterSection";
import FeaturedJobsSection from "@/components/shared/FeatureSection";
import JobSearchBar from "@/components/Postloginpage/SubMenu";
import ATSResumeSection from "@/components/Postloginpage/ATSResumeSection";
import CompanyLogoSection from "../../components/shared/company-logo";
import ChatShowcaseSection from "@/components/Postloginpage/ChatShowcaseSection";
import ConnectWithRecruiterSection from "@/components/Postloginpage/ConnectWithRecruiterSection";

export default function Page() {
    return(
        <>
        <Navbar/>
        <JobSearchBar/>
        <FeaturedJobsSection/>
        <CreativesSection/>
        <CompanyLogoSection/>
        <MapFilterSection/>
        <ConnectWithRecruiterSection/>
        <ChatShowcaseSection/>
        <ATSResumeSection/>
        <Footer/>
        </>
    );
};
 