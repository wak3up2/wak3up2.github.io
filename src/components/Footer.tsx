import { Mail, Send, Briefcase, Linkedin, Github } from 'lucide-react';

const contactLinks = [
  { icon: Mail, label: 'Email', href: 'mailto:your.email@example.com', text: 'your.email@example.com' },
  { icon: Send, label: 'Telegram', href: 'https://t.me/yourusername', text: '@yourusername' },
  { icon: Briefcase, label: 'ArtStation', href: 'https://artstation.com/yourusername', text: 'ArtStation' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', text: 'LinkedIn' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/yourusername', text: 'GitHub' },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              {contactLinks.slice(0, 2).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <link.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                  <span>{link.text}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Portfolio</h3>
            <div className="space-y-3">
              {contactLinks.slice(2).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <link.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                  <span>{link.text}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-muted-foreground text-sm">
              3D Artist specializing in character modeling, environment design, and PBR texturing.
              Available for freelance and full-time opportunities.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
