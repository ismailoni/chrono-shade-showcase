import { Navigation } from '@/components/Navigation'
import { Projects } from '@/components/Projects'
import { FloatingElements } from '@/components/FloatingElements'

const ProjectsPage = () => {
  return (
    <div className="relative min-h-screen">
      <FloatingElements />
      <Navigation />
      
      <main className="pt-16">
        <Projects />
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

export default ProjectsPage;