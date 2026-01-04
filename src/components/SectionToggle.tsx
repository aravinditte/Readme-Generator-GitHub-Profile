import { cn } from '@/lib/utils';
import { 
  User, Wrench, ListChecks, Package, Rocket, Map, 
  Users, Scale, Mail 
} from 'lucide-react';

interface SectionToggleProps {
  enabled: string[];
  onToggle: (sections: string[]) => void;
}

const sections = [
  { key: 'about', label: 'About Me', icon: User },
  { key: 'tech', label: 'Tech Stack', icon: Wrench },
  { key: 'features', label: 'Features', icon: ListChecks },
  { key: 'installation', label: 'Installation', icon: Package },
  { key: 'usage', label: 'Usage', icon: Rocket },
  { key: 'roadmap', label: 'Roadmap', icon: Map },
  { key: 'contributing', label: 'Contributing', icon: Users },
  { key: 'license', label: 'License', icon: Scale },
  { key: 'contact', label: 'Contact', icon: Mail },
];

export const SectionToggle = ({ enabled, onToggle }: SectionToggleProps) => {
  const toggle = (key: string) => {
    if (enabled.includes(key)) {
      onToggle(enabled.filter(k => k !== key));
    } else {
      onToggle([...enabled, key]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {sections.map(section => {
        const isEnabled = enabled.includes(section.key);
        const Icon = section.icon;
        return (
          <button
            key={section.key}
            onClick={() => toggle(section.key)}
            className={cn(
              "flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200",
              isEnabled
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            <Icon className="w-4 h-4" />
            {section.label}
          </button>
        );
      })}
    </div>
  );
};
