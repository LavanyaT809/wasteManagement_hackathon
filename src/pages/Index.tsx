import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ComplaintForm from "@/components/ComplaintForm";
import ReusableWaste from "@/components/ReusableWaste";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <ComplaintForm />
      <div id="reusable">
        <ReusableWaste />
      </div>
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
