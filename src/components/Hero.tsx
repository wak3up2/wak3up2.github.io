import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          3D Artist & Designer
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          Specializing in realistic character modeling and stylized environments
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Creating compelling 3D art with focus on detail, workflow optimization, and visual storytelling through ZBrush, Blender, and Substance Painter.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
          >
            Contact Me
            <ArrowDown className="ml-2 w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary/50 hover:border-primary hover:bg-primary/10"
            asChild
          >
            <a href="#portfolio">View Portfolio</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
