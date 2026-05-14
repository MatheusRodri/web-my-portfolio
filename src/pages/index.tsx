import { useEffect } from 'react';
import { AboutSection } from "@/sections/aboutSection";
import AcademicSection from "@/sections/academySection";
import { ContactSection } from "@/sections/contactSection";
import ExperienceSection from "@/sections/experienceSection";
import InitialSection from "@/sections/InitialSection";
import ProjectsSection from "@/sections/projectsSection";
import SkillSection from "@/sections/skillSection";
import styles from '@/styles/Home.module.css';
import FooterSection from '@/sections/footerSection';

/**
 * Main Portfolio Home Page
 * Assembles all sections and initializes scroll animations
 */
export default function Home() {

  useEffect(() => {
    /**
     * Dynamically imports and initializes ScrollReveal.
     * ScrollReveal is only initialized on the client side.
     */
    const initializeScrollReveal = async () => {
      const ScrollRevealModule = (await import('scrollreveal')).default;
      if (typeof window !== 'undefined') {
        if (!window.sr) {
          window.sr = ScrollRevealModule();
        }
        
        // Configuration for sections revealed while scrolling
        window.sr.reveal('.reveal-on-scroll', {
          delay: 200,
          distance: '50px',
          origin: 'bottom',
          easing: 'ease-in-out',
          duration: 500,
          interval: 100,
          reset: true
        });

        // Configuration for text elements that scroll in from the left
        window.sr.reveal('.scroll-to-text', {
          delay: 500,
          distance: '50px',
          origin: 'left',
          easing: 'ease-in-out',
          duration: 500,
          interval: 0,
          reset: true
        });
      }
    };

    initializeScrollReveal();

  }, []); 

  return (
    <main className={styles.main}>
      {/* Introduction and Hero Section */}
      <InitialSection />
      
      {/* Professional and Personal Background */}
      <AboutSection />
      
      {/* Technical Proficiencies */}
      <SkillSection />
      
      {/* Professional Career Timeline */}
      <ExperienceSection />
      
      {/* Educational Background */}
      <AcademicSection/>
      
      {/* Showcased Projects */}
      <ProjectsSection />
      
      {/* Contact and Footer Information */}
      <FooterSection/>
    </main>
  );
}