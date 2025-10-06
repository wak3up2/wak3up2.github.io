import { Link } from 'react-router-dom';
import { Project } from '@/data/portfolio';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link
      to={`/project/${project.id}`}
      className="group relative overflow-hidden rounded-lg bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.software.map((soft) => (
            <span
              key={soft}
              className="text-xs px-2 py-1 bg-secondary rounded-full text-muted-foreground"
            >
              {soft}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
