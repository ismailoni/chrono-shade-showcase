import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'
import { FloatingElements } from '@/components/FloatingElements'

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Floating Background Elements */}
      <FloatingElements />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="glass border-t border-glass-border py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Full Stack Developer. Built with passion and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
