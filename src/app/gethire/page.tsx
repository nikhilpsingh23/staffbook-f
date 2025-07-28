import AdBannerSection from "@/components/shared/AdBannerSection";
import FeaturedJobsSection from "@/components/shared/FeatureSection";
import MapFilterSection from "@/components/shared/MapFilterSection";
import MiniFeaturedJobCards from "@/components/shared/MiniFeatureJobCard";
import ProfileLayout from "@/components/shared/ProfileLayout";
import RecruiterConnectSection from "@/components/shared/RecruiterConnectSection";
import SearchButton from "@/components/shared/SearchbButton";
import TwoBannerSection from "@/components/shared/TwoRowBannerSection";


export default function Page() {
  return (
    <>
      <ProfileLayout >
        <SearchButton />
        {/* <FeaturedJobsSection /> */}
        {/* <MiniFeaturedJobCards /> */}
        <AdBannerSection />
        <MapFilterSection />
        <div className="text-[1.25rem] sm:text-[1.5rem] md:text-[2rem] mb-3 font-Montserrat font-semibold text-[#18192B] text-center sm:text-left">Recruiters Online</div>
        <RecruiterConnectSection />
        <div className="text-[1.25rem] sm:text-[1.5rem] md:text-[2rem] mb-3 font-Montserrat font-semibold text-[#18192B] text-center sm:text-left">Recruiters according to your requirements</div>
        <RecruiterConnectSection />
        {/* <FeaturedJobsSection /> */}
        {/* <MiniFeaturedJobCards /> */}
        <TwoBannerSection />
      </ProfileLayout>
    </>

  );
}