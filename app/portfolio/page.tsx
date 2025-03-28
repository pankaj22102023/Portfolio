
import Contact from "@/components/Connect";
import Navigation from "@/components/Navigation";
import Portfolio from "@/components/Portfolio";

export default function PortfolioPage() {
  return (
    <div className="space-y-6 lg:flex lg:space-x-8 lg:space-y-0 xl:space-x-12">
      {/* Nav */}
      <Navigation />

      {/* Sections */}
      <div className="space-y-6 pb-12 lg:w-3/4">
        {/* Portfolio */}
        <Portfolio />

        {/* Contact */}
        <Contact />
      </div>
    </div>
  );
}
