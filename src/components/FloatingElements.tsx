export const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-accent rounded-lg opacity-30 float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary/20 rounded-full float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute bottom-20 right-40 w-24 h-24 bg-secondary/20 rounded-lg rotate-45 float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-60 left-1/3 w-8 h-8 bg-accent/30 rounded-full float" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-80 right-1/3 w-14 h-14 bg-gradient-primary rounded-lg opacity-25 float" style={{ animationDelay: '5s' }}></div>
    </div>
  )
}