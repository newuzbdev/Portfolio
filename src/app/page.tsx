import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Footer from "@/components/footer";
import TechStackShowcase from "@/components/tech-stack";
// import AnimatedSkills from "@/components/animated-skills";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <About />
      <Projects />
      {/* <AnimatedSkills /> */}
      <TechStackShowcase />
      <Footer />
    </main>
  );
}
