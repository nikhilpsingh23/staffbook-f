import Hero from "@/components/Homepage/HeroSection";
import TwoColumnLayout from "@/components/Hirepage/TwoColumnLayout";
import ProfileSidebar from "@/components/shared/ProfileSidebar";
import RightSearchBarSection from "@/components/shared/RightSearchBarSection";

export default function Page() {
    return(
        <>
            <TwoColumnLayout
              left={<ProfileSidebar/>}
              right={<RightSearchBarSection/>}
            />
        </>
    );
}