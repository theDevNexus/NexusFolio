import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import StarBackground from "../components/StartBackground";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle/>
      {/* Background Effect */}
      <StarBackground/>

      {/* NavBar */}
      <NavBar/>
      {/* Main Content */}
      <main>
        <HeroSection/>
        <AboutSection/>
        <SkillsSection/>
        <ProjectsSection/>
        <ContactSection/>
      </main>
      {/* Footer */}
      <Footer/>
    </div>
  );
}
