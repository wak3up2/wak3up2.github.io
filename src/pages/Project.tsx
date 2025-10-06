import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProjectById, getNextProject, getPreviousProject } from '@/data/portfolio';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Project = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = getProjectById(id || '');
  const [selectedImage, setSelectedImage] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const nextProject = getNextProject(project.id, project.category);
  const previousProject = getPreviousProject(project.id, project.category);

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Link to={`/category/${project.category}`}>
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </Button>
        </Link>

        <div className="mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-4 items-center text-muted-foreground">
            {project.role && (
              <span className="px-3 py-1 bg-primary/20 rounded-full text-primary text-sm">
                {project.role}
              </span>
            )}
            {project.software.map((soft) => (
              <span key={soft} className="text-sm">
                {soft}
              </span>
            ))}
          </div>
        </div>

        {/* Main Image Viewer */}
        <div className="mb-8 animate-scale-in">
          <div className="relative aspect-video bg-card rounded-lg overflow-hidden border border-border">
            <img
              src={project.images[selectedImage]}
              alt={`${project.title} - Image ${selectedImage + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Thumbnail Gallery */}
          {project.images.length > 1 && (
            <div className="flex gap-4 mt-4 overflow-x-auto pb-2">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-primary shadow-glow'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Description */}
        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-lg text-muted-foreground">{project.description}</p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center py-8 border-t border-border">
          <Button
            variant="outline"
            onClick={() => navigate(`/project/${previousProject.id}`)}
            className="group"
          >
            <ChevronLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Previous
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate(`/project/${nextProject.id}`)}
            className="group"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Project;
