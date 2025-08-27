import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main content */}
        <div className="slide-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Full Stack</span>
            <br />
            <span className="text-foreground">Developer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting beautiful, scalable web applications with modern technologies and innovative solutions
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 stagger-1">
            <Button 
              size="lg" 
              className="glass border-glass-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
            >
              View My Work
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass border-glass-border hover:bg-accent/10 transition-all duration-300"
            >
              Get In Touch
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-16 stagger-2">
            <Button 
              variant="ghost" 
              size="icon"
              className="glass border-glass-border hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="glass border-glass-border hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="glass border-glass-border hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 stagger-3">
          <div className="flex flex-col items-center text-muted-foreground">
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}