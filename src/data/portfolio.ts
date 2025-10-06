export interface Project {
  id: string;
  title: string;
  category: 'realistic' | 'stylized' | 'texture';
  thumbnail: string;
  images: string[];
  description: string;
  software: string[];
  role?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'cyberpunk-character',
    title: 'Cyberpunk Character',
    category: 'realistic',
    thumbnail: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'High-detail cyberpunk character with advanced skin shaders and realistic clothing simulation.',
    software: ['ZBrush', 'Blender', 'Substance Painter'],
    role: '3D Artist',
    featured: true,
  },
  {
    id: 'fantasy-creature',
    title: 'Fantasy Creature',
    category: 'stylized',
    thumbnail: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg'],
    description: 'Stylized creature design for a fantasy game with hand-painted textures.',
    software: ['Blender', 'Substance Painter'],
    featured: true,
  },
  {
    id: 'pbr-materials',
    title: 'PBR Material Pack',
    category: 'texture',
    thumbnail: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Complete PBR material pack with multiple variations and LODs.',
    software: ['Substance Designer', 'Substance Painter'],
    featured: true,
  },
  {
    id: 'sci-fi-environment',
    title: 'Sci-Fi Environment',
    category: 'realistic',
    thumbnail: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg'],
    description: 'Realistic sci-fi environment with detailed props and materials.',
    software: ['Blender', 'Unreal Engine', 'Substance Painter'],
    featured: true,
  },
  {
    id: 'cartoon-character',
    title: 'Cartoon Character',
    category: 'stylized',
    thumbnail: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg'],
    description: 'Fun cartoon character with exaggerated features and vibrant colors.',
    software: ['Blender', 'ZBrush'],
  },
  {
    id: 'medieval-armor',
    title: 'Medieval Armor',
    category: 'realistic',
    thumbnail: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    description: 'Historically accurate medieval armor with detailed metal work.',
    software: ['ZBrush', 'Substance Painter', 'Marmoset Toolbag'],
  },
];

export const getCategoryProjects = (category: string) => {
  return projects.filter(p => p.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter(p => p.featured);
};

export const getProjectById = (id: string) => {
  return projects.find(p => p.id === id);
};

export const getNextProject = (currentId: string, category?: string) => {
  const filtered = category ? getCategoryProjects(category) : projects;
  const currentIndex = filtered.findIndex(p => p.id === currentId);
  return filtered[(currentIndex + 1) % filtered.length];
};

export const getPreviousProject = (currentId: string, category?: string) => {
  const filtered = category ? getCategoryProjects(category) : projects;
  const currentIndex = filtered.findIndex(p => p.id === currentId);
  return filtered[(currentIndex - 1 + filtered.length) % filtered.length];
};
