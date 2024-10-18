import BackedBySection from "@/components/BackedBySection";
import ChangingThingsSection from "@/components/ChangingThingsSection";
import CompanyTimeline from "@/components/CompanyTimeline";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MissionSection from "@/components/MissionSection";
import StatusSection from "@/components/StatusSection";


export default function AboutUs() {
  return (
    <div>
      <Header/>
      <MissionSection/>
      <StatusSection/>
      <ChangingThingsSection/>
      <BackedBySection/>
      <CompanyTimeline/>
      <Footer/>
    </div>
  );
}
