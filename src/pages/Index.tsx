import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { ProjectCard } from '@/components/ProjectCard';
import { Footer } from '@/components/Footer';
import { getFeaturedProjects } from '@/data/portfolio';

const Index = () => {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="min-h-screen">
      <Hero />
      
      <Skills />
      
      <section id="portfolio" className="py-20 px-6 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Featured Work</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A selection of recent projects showcasing various styles and techniques
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
