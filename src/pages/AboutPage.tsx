import { Navigation } from '@/components/Navigation'
import { About } from '@/components/About'
import { FloatingElements } from '@/components/FloatingElements'

const AboutPage = () => {
  return (
    <div className="relative min-h-screen">
      <FloatingElements />
      <Navigation />
      
      <main className="pt-16">
        <About />
      </main>
      
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

export default AboutPage;