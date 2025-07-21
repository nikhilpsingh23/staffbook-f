import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import JobSearchBar from "./sub-menu";
import FeaturedJobsSection from "./featureJob";

export default function Page() {
    return(
        <>
        <Navbar/>
        <JobSearchBar/>
        <FeaturedJobsSection/>
        <Footer/>
        </>
    );
};
 