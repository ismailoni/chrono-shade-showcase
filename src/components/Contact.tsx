import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export const Contact = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your next project 
            and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass border-glass-border card-3d stagger-1">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-2 block">
                    First Name
                  </label>
                  <Input 
                    placeholder="John"
                    className="glass border-glass-border focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Doe"
                    className="glass border-glass-border focus:ring-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-card-foreground mb-2 block">
                  Email
                </label>
                <Input 
                  type="email"
                  placeholder="john@example.com"
                  className="glass border-glass-border focus:ring-primary"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-card-foreground mb-2 block">
                  Subject
                </label>
                <Input 
                  placeholder="Project Discussion"
                  className="glass border-glass-border focus:ring-primary"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-card-foreground mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="glass border-glass-border focus:ring-primary resize-none"
                />
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'hello@developer.com',
                  description: 'Send me an email anytime!'
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  content: '+1 (555) 123-4567',
                  description: 'Mon-Fri from 8am to 6pm'
                },
                {
                  icon: MapPin,
                  title: 'Location',
                  content: 'San Francisco, CA',
                  description: 'Available for remote work'
                }
              ].map((contact, index) => {
                const Icon = contact.icon
                return (
                  <Card 
                    key={contact.title}
                    className={`glass border-glass-border card-3d hover:bg-card/80 transition-all duration-300 stagger-${index + 2}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg bg-gradient-primary">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-card-foreground">
                            {contact.title}
                          </h3>
                          <p className="text-primary font-medium">
                            {contact.content}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {contact.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* CTA Card */}
            <Card className="glass border-glass-border bg-gradient-primary text-white overflow-hidden relative stagger-4">
              <CardContent className="p-8 relative z-10">
                <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
                <p className="mb-6 opacity-90">
                  Let's discuss your project and turn your vision into reality. 
                  I'm excited to hear about your ideas!
                </p>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/20 border-white/30 text-white hover:bg-white/30 transition-all duration-300"
                >
                  Schedule a Call
                </Button>
              </CardContent>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full"></div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}