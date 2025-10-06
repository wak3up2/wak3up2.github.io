import { NavLink } from 'react-router-dom';
import { Layers, Sparkles, ImageIcon, Menu, X } from 'lucide-react';
import { useState } from 'react';

const categories = [
  { name: 'Realistic', path: '/category/realistic', icon: Layers },
  { name: 'Stylized', path: '/category/stylized', icon: Sparkles },
  { name: 'Texture', path: '/category/texture', icon: ImageIcon },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 lg:hidden p-3 bg-card rounded-lg border border-border hover:bg-secondary transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 right-0 h-screen w-64 bg-sidebar border-l border-sidebar-border z-40
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          lg:translate-x-0
        `}
      >
        <div className="flex flex-col h-full p-8">
          <nav className="flex-1 flex flex-col gap-6 mt-20 lg:mt-8">
            <NavLink
              to="/"
              className="text-lg font-semibold text-sidebar-foreground hover:text-sidebar-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Portfolio
              </h3>
              {categories.map((category) => (
                <NavLink
                  key={category.path}
                  to={category.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 text-sidebar-foreground hover:text-sidebar-primary transition-colors ${
                      isActive ? 'text-sidebar-primary font-semibold' : ''
                    }`
                  }
                >
                  <category.icon className="w-5 h-5" />
                  {category.name}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
