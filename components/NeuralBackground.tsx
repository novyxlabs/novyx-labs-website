'use client'

export function NeuralBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Neural network pattern */}
      <div className="absolute inset-0 neural-connections opacity-30" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-blue/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-electric-blue-400/10 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Subtle dot grid */}
      <div 
        className="absolute inset-0 opacity-10 dark:opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(49, 130, 206, 0.3) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />
    </div>
  )
}
