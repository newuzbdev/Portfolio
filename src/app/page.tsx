import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
// import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Skills from "@/components/skill";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <About />
      <Projects />
      <Skills />
      {/* <Contact /> */}
      <Footer />
    </main>
  );
}
