import Articles from "@/components/articles";
import Community from "@/components/community";
import Events from "@/components/events";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Resources from "@/components/resources";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Articles />
      <Community />
      <Resources />
      <Events />
      <Footer />
    </>
  );
}
