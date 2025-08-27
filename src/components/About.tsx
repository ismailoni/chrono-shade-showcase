import { Code, Database, Globe, Smartphone, Server, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const skills = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'React, TypeScript, Next.js, Tailwind CSS',
    color: 'text-primary'
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Node.js, Python, PostgreSQL, MongoDB',
    color: 'text-secondary'
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'SQL, NoSQL, Redis, Database Optimization',
    color: 'text-accent'
  },
  {
    icon: Globe,
    title: 'Web Technologies',
    description: 'GraphQL, REST APIs, WebSockets, PWAs',
    color: 'text-primary'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'React Native, Flutter, Cross-platform',
    color: 'text-secondary'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimization, Caching, CDN, Monitoring',
    color: 'text-accent'
  }
]

export const About = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate full-stack developer with 5+ years of experience building scalable, 
            user-centric applications. I love turning complex problems into simple, 
            beautiful, and intuitive solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <Card 
                key={skill.title}
                className={`glass border-glass-border card-3d hover:bg-card/80 transition-all duration-500 stagger-${(index % 4) + 1}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-primary ${skill.color}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2 text-card-foreground">
                        {skill.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Personal Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '5+', label: 'Years Experience' },
            { number: '20+', label: 'Happy Clients' },
            { number: '10+', label: 'Technologies' }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className={`glass border-glass-border rounded-lg p-6 text-center card-3d stagger-${index + 1}`}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}