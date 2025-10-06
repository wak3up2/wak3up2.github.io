import { useParams, Link } from 'react-router-dom';
import { ProjectCard } from '@/components/ProjectCard';
import { Footer } from '@/components/Footer';
import { getCategoryProjects } from '@/data/portfolio';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Category = () => {
  const { category } = useParams<{ category: string }>();
  const projects = getCategoryProjects(category || '');

  const categoryTitle = category?.charAt(0).toUpperCase() + category?.slice(1);

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">
            {categoryTitle} Projects
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Explore my {category} artwork and 3D designs
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              No projects found in this category yet.
            </p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Category;
