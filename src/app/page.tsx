import Header from "@/components/header/Header";
import ContactUsSection from "@/sections/contact-us/contact-us-section";
import ServiceAreaSection from "@/sections/service-area/service-area-section";

export default function Home() {
  return (
    <div>
      <Header />
      <ContactUsSection />
      <ServiceAreaSection />
    </div>
  );
}
