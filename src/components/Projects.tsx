import { ExternalLink, Github, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard. Built with modern web technologies for optimal performance.',
    image: '/api/placeholder/400/300',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker'],
    github: '#',
    live: '#',
    featured: true
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, file sharing, and team communication features.',
    image: '/api/placeholder/400/300',
    technologies: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS'],
    github: '#',
    live: '#',
    featured: false
  },
  {
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with interactive charts, data visualization, and automated reporting features.',
    image: '/api/placeholder/400/300',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'Redis'],
    github: '#',
    live: '#',
    featured: true
  },
  {
    title: 'Social Media App',
    description: 'Mobile-first social platform with messaging, content sharing, and community features built for scale.',
    image: '/api/placeholder/400/300',
    technologies: ['React Native', 'GraphQL', 'MongoDB', 'AWS'],
    github: '#',
    live: '#',
    featured: false
  }
]

export const Projects = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work spanning full-stack web applications, 
            mobile apps, and innovative digital solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`glass border-glass-border card-3d hover:bg-card/80 transition-all duration-500 overflow-hidden group stagger-${(index % 4) + 1}`}
            >
              <CardHeader className="p-0 relative">
                {/* Project Image */}
                <div className="aspect-video bg-gradient-primary rounded-t-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="text-white text-6xl opacity-50">
                      <Zap />
                    </div>
                  </div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <Badge 
                      className="absolute top-4 left-4 bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      Featured
                    </Badge>
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="bg-muted/50 text-muted-foreground hover:bg-primary/10"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 flex gap-3">
                <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
                <Button size="sm" variant="outline" className="flex-1 border-glass-border">
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="glass border-glass-border hover:bg-primary/10 transition-all duration-300"
          >
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}