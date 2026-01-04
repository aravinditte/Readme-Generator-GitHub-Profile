import { techStack, TechItem, getSkillIconUrl } from '@/lib/techStack';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Code, Layout, Server, Database, Cloud, Wrench, X } from 'lucide-react';

interface TechStackPickerProps {
  selected: TechItem[];
  onSelect: (items: TechItem[]) => void;
}

const categories = [
  { key: 'language', label: 'Languages', icon: Code },
  { key: 'frontend', label: 'Frontend', icon: Layout },
  { key: 'backend', label: 'Backend', icon: Server },
  { key: 'database', label: 'Database', icon: Database },
  { key: 'devops', label: 'DevOps', icon: Cloud },
  { key: 'tool', label: 'Tools', icon: Wrench },
] as const;

export const TechStackPicker = ({ selected, onSelect }: TechStackPickerProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('language');

  const toggleTech = (tech: TechItem) => {
    const isSelected = selected.some(t => t.name === tech.name);
    if (isSelected) {
      onSelect(selected.filter(t => t.name !== tech.name));
    } else {
      onSelect([...selected, tech]);
    }
  };

  const filteredTech = techStack.filter(t => t.category === activeCategory);

  return (
    <div className="space-y-4">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map(cat => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200",
                activeCategory === cat.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              <Icon className="w-4 h-4" />
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Tech Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {filteredTech.map(tech => {
          const isSelected = selected.some(t => t.name === tech.name);
          return (
            <button
              key={tech.name}
              onClick={() => toggleTech(tech)}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 group",
                isSelected
                  ? "bg-primary/20 border border-primary/50 text-primary"
                  : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
              )}
            >
              <img
                src={getSkillIconUrl(tech.skillIcon)}
                alt={tech.name}
                className="w-6 h-6 transition-transform group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className="text-sm font-medium truncate">{tech.name}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Tech */}
      {selected.length > 0 && (
        <div className="pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground mb-2">Selected ({selected.length}):</p>
          <div className="flex flex-wrap gap-2">
            {selected.map(tech => (
              <span
                key={tech.name}
                onClick={() => toggleTech(tech)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/20 border border-primary/50 text-primary text-sm font-medium cursor-pointer hover:bg-primary/30 transition-colors"
              >
                <img
                  src={getSkillIconUrl(tech.skillIcon)}
                  alt={tech.name}
                  className="w-4 h-4"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                {tech.name}
                <X className="w-3.5 h-3.5 text-muted-foreground" />
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
