import { Box, Brush, Layers, Zap } from 'lucide-react';

const skills = [
  {
    category: 'Modeling',
    icon: Box,
    tools: ['ZBrush', 'Blender', 'Maya', 'Marmoset Toolbag'],
  },
  {
    category: 'Texturing',
    icon: Brush,
    tools: ['Substance Painter', 'Substance Designer', 'Photoshop'],
  },
  {
    category: 'Rendering',
    icon: Layers,
    tools: ['Unreal Engine', 'Unity', 'V-Ray', 'Cycles'],
  },
  {
    category: 'Workflow',
    icon: Zap,
    tools: ['Retopology', 'UV Mapping', 'PBR Materials', 'Game-Ready Assets'],
  },
];

export const Skills = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills & Tools</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="bg-gradient-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              
              <ul className="space-y-2">
                {skill.tools.map((tool) => (
                  <li key={tool} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
