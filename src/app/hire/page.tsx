import Hero from "@/components/Homepage/HeroSection";
import TwoColumnLayout from "@/components/Hirepage/TwoColumnLayout";
import ProfileSidebar from "@/components/shared/ProfileSidebar";
import RightSearchBarSection from "@/components/shared/RightSearchBarSection";
import PostJobSection from "@/components/Hirepage/PostJobSection";
import StorySection from "@/components/shared/StorySection";
import ManageJobPostSection from "@/components/Hirepage/ManageJobPostSection";
import ResumeDownloadSection from "@/components/shared/ResumeDownloadSection";

export default function Page() {
    return(
        <>
            <TwoColumnLayout
              left={<ProfileSidebar/>}
              right={
              <>
              <StorySection/>
              <RightSearchBarSection/>
                <PostJobSection/>
                <ManageJobPostSection/>
                <div className="text-[2rem] mb-3 font-Montserrat font-semibold text-[#18192B]">Ready To Join Candidates</div>
                  <ResumeDownloadSection/>
                  <div className="text-[2rem] mt-6 font-Montserrat font-semibold text-[#18192B]">Candidates according to your requirements</div>
                  <ResumeDownloadSection/>
                </>
              }
            />
        </>
    );
}