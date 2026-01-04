import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Eye, Code, Download, Sparkles, Link2, FileText, 
  Wrench, User, ListChecks, Package, Rocket, Map, Users, Scale,
  BarChart3, Flame, Trophy, GitGraph, Activity, Timer, CreditCard
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TechStackPicker } from '@/components/TechStackPicker';
import { SectionToggle } from '@/components/SectionToggle';
import { MarkdownPreview } from '@/components/MarkdownPreview';
import { ExportModal } from '@/components/ExportModal';
import { generateMarkdown, ReadmeData } from '@/lib/generateMarkdown';
import { TechItem } from '@/lib/techStack';

const Builder = () => {
  const [showExport, setShowExport] = useState(false);
  const [activeTab, setActiveTab] = useState('preview');

  // Form state
  const [formData, setFormData] = useState<ReadmeData>({
    name: '',
    tagline: '',
    profileImage: '',
    bannerUrl: '',
    github: '',
    linkedin: '',
    twitter: '',
    website: '',
    email: '',
    aboutMe: '',
    features: ['', '', ''],
    installation: '',
    usage: '',
    roadmap: ['', '', ''],
    contributing: 'Contributions are welcome! Please feel free to submit a Pull Request.',
    license: 'MIT',
    selectedTech: [],
    enabledSections: ['about', 'tech', 'features'],
    showTypingAnimation: true,
    showGithubStats: true,
    showVisitorBadge: true,
    showStreakStats: true,
    showTrophies: false,
    showContributionGraph: false,
    showActivityGraph: false,
    showTopLanguages: true,
    showProfileCard: false,
    showCommitStats: false,
    statsTheme: 'tokyonight',
    animationSpeed: 'normal',
  });

  const updateField = <K extends keyof ReadmeData>(key: K, value: ReadmeData[K]) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const updateArrayField = (key: 'features' | 'roadmap', index: number, value: string) => {
    const arr = [...formData[key]];
    arr[index] = value;
    setFormData(prev => ({ ...prev, [key]: arr }));
  };

  const addArrayItem = (key: 'features' | 'roadmap') => {
    setFormData(prev => ({ ...prev, [key]: [...prev[key], ''] }));
  };

  const markdown = useMemo(() => generateMarkdown(formData), [formData]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-mono text-sm">Back to Home</span>
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={() => setShowExport(true)}>
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Panel - Form */}
          <div className="space-y-6 max-h-[calc(100vh-120px)] overflow-y-auto pr-2">
            {/* Basic Info */}
            <div className="section-card">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Basic Info
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Project / Profile Name</label>
                  <Input
                    value={formData.name}
                    onChange={e => updateField('name', e.target.value)}
                    placeholder="John Doe or My Awesome Project"
                    className="input-dark"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Tagline</label>
                  <Input
                    value={formData.tagline}
                    onChange={e => updateField('tagline', e.target.value)}
                    placeholder="Full-stack developer passionate about..."
                    className="input-dark"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Profile Image URL</label>
                    <Input
                      value={formData.profileImage}
                      onChange={e => updateField('profileImage', e.target.value)}
                      placeholder="https://..."
                      className="input-dark"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Banner URL</label>
                    <Input
                      value={formData.bannerUrl}
                      onChange={e => updateField('bannerUrl', e.target.value)}
                      placeholder="https://..."
                      className="input-dark"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Animation & Display Options */}
            <div className="section-card">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                Animation & Display Options
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Stats Theme</label>
                  <Select value={formData.statsTheme} onValueChange={v => updateField('statsTheme', v)}>
                    <SelectTrigger className="input-dark">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tokyonight">Tokyo Night</SelectItem>
                      <SelectItem value="radical">Radical</SelectItem>
                      <SelectItem value="merko">Merko</SelectItem>
                      <SelectItem value="gruvbox">Gruvbox</SelectItem>
                      <SelectItem value="dracula">Dracula</SelectItem>
                      <SelectItem value="onedark">One Dark</SelectItem>
                      <SelectItem value="nord">Nord</SelectItem>
                      <SelectItem value="github_dark">GitHub Dark</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Animation Speed</label>
                  <Select value={formData.animationSpeed} onValueChange={v => updateField('animationSpeed', v)}>
                    <SelectTrigger className="input-dark">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="slow">Slow</SelectItem>
                      <SelectItem value="normal">Normal</SelectItem>
                      <SelectItem value="fast">Fast</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <ToggleOption
                  icon={<Timer className="w-4 h-4" />}
                  label="Typing Animation"
                  checked={formData.showTypingAnimation}
                  onChange={v => updateField('showTypingAnimation', v)}
                />
                <ToggleOption
                  icon={<Eye className="w-4 h-4" />}
                  label="Visitor Badge"
                  checked={formData.showVisitorBadge}
                  onChange={v => updateField('showVisitorBadge', v)}
                />
                <ToggleOption
                  icon={<BarChart3 className="w-4 h-4" />}
                  label="GitHub Stats"
                  checked={formData.showGithubStats}
                  onChange={v => updateField('showGithubStats', v)}
                />
                <ToggleOption
                  icon={<Flame className="w-4 h-4" />}
                  label="Streak Stats"
                  checked={formData.showStreakStats}
                  onChange={v => updateField('showStreakStats', v)}
                />
                <ToggleOption
                  icon={<Code className="w-4 h-4" />}
                  label="Top Languages"
                  checked={formData.showTopLanguages}
                  onChange={v => updateField('showTopLanguages', v)}
                />
                <ToggleOption
                  icon={<Trophy className="w-4 h-4" />}
                  label="Trophies"
                  checked={formData.showTrophies}
                  onChange={v => updateField('showTrophies', v)}
                />
                <ToggleOption
                  icon={<GitGraph className="w-4 h-4" />}
                  label="Contribution Graph"
                  checked={formData.showContributionGraph}
                  onChange={v => updateField('showContributionGraph', v)}
                />
                <ToggleOption
                  icon={<Activity className="w-4 h-4" />}
                  label="Snake Animation"
                  checked={formData.showActivityGraph}
                  onChange={v => updateField('showActivityGraph', v)}
                />
                <ToggleOption
                  icon={<CreditCard className="w-4 h-4" />}
                  label="Profile Card"
                  checked={formData.showProfileCard}
                  onChange={v => updateField('showProfileCard', v)}
                />
                <ToggleOption
                  icon={<GitGraph className="w-4 h-4" />}
                  label="Commit Stats"
                  checked={formData.showCommitStats}
                  onChange={v => updateField('showCommitStats', v)}
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="section-card">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Link2 className="w-5 h-5 text-primary" />
                Social Links
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">GitHub Username</label>
                  <Input
                    value={formData.github}
                    onChange={e => updateField('github', e.target.value)}
                    placeholder="username"
                    className="input-dark"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">LinkedIn</label>
                  <Input
                    value={formData.linkedin}
                    onChange={e => updateField('linkedin', e.target.value)}
                    placeholder="username"
                    className="input-dark"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Twitter/X</label>
                  <Input
                    value={formData.twitter}
                    onChange={e => updateField('twitter', e.target.value)}
                    placeholder="username"
                    className="input-dark"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Website</label>
                  <Input
                    value={formData.website}
                    onChange={e => updateField('website', e.target.value)}
                    placeholder="https://yoursite.com"
                    className="input-dark"
                  />
                </div>
                <div className="col-span-2">
                  <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
                  <Input
                    value={formData.email}
                    onChange={e => updateField('email', e.target.value)}
                    placeholder="you@example.com"
                    className="input-dark"
                  />
                </div>
              </div>
            </div>

            {/* Sections Toggle */}
            <div className="section-card">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                README Sections
              </h3>
              <SectionToggle
                enabled={formData.enabledSections}
                onToggle={sections => updateField('enabledSections', sections)}
              />
            </div>

            {/* Tech Stack */}
            {formData.enabledSections.includes('tech') && (
              <div className="section-card">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-primary" />
                  Tech Stack
                </h3>
                <TechStackPicker
                  selected={formData.selectedTech}
                  onSelect={(items: TechItem[]) => updateField('selectedTech', items)}
                />
              </div>
            )}

            {/* About Me */}
            {formData.enabledSections.includes('about') && (
              <div className="section-card">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  About Me
                </h3>
                <Textarea
                  value={formData.aboutMe}
                  onChange={e => updateField('aboutMe', e.target.value)}
                  placeholder="Tell us about yourself or your project..."
                  className="input-dark min-h-[120px]"
                />
              </div>
            )}

            {/* Features */}
            {formData.enabledSections.includes('features') && (
              <div className="section-card">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <ListChecks className="w-5 h-5 text-primary" />
                  Features
                </h3>
                <div className="space-y-2">
                  {formData.features.map((feature, i) => (
                    <Input
                      key={i}
                      value={feature}
                      onChange={e => updateArrayField('features', i, e.target.value)}
                      placeholder={`Feature ${i + 1}`}
                      className="input-dark"
                    />
                  ))}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => addArrayItem('features')}
                    className="text-muted-foreground"
                  >
                    + Add Feature
                  </Button>
                </div>
              </div>
            )}

            {/* Installation */}
            {formData.enabledSections.includes('installation') && (
              <div className="section-card">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary" />
                  Installation
                </h3>
                <Textarea
                  value={formData.installation}
                  onChange={e => updateField('installation', e.target.value)}
                  placeholder="npm install my-package&#10;# or&#10;yarn add my-package"
                  className="input-dark font-mono text-sm min-h-[100px]"
                />
              </div>
            )}

            {/* Usage */}
            {formData.enabledSections.includes('usage') && (
              <div className="section-card">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-primary" />
                  Usage
                </h3>
                <Textarea
                  value={formData.usage}
                  onChange={e => updateField('usage', e.target.value)}
                  placeholder="npm start&#10;# or&#10;yarn dev"
                  className="input-dark font-mono text-sm min-h-[100px]"
                />
              </div>
            )}

            {/* Roadmap */}
            {formData.enabledSections.includes('roadmap') && (
              <div className="section-card">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Map className="w-5 h-5 text-primary" />
                  Roadmap
                </h3>
                <div className="space-y-2">
                  {formData.roadmap.map((item, i) => (
                    <Input
                      key={i}
                      value={item}
                      onChange={e => updateArrayField('roadmap', i, e.target.value)}
                      placeholder={`Roadmap item ${i + 1}`}
                      className="input-dark"
                    />
                  ))}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => addArrayItem('roadmap')}
                    className="text-muted-foreground"
                  >
                    + Add Item
                  </Button>
                </div>
              </div>
            )}

            {/* Contributing */}
            {formData.enabledSections.includes('contributing') && (
              <div className="section-card">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Contributing
                </h3>
                <Textarea
                  value={formData.contributing}
                  onChange={e => updateField('contributing', e.target.value)}
                  placeholder="Contribution guidelines..."
                  className="input-dark min-h-[100px]"
                />
              </div>
            )}

            {/* License */}
            {formData.enabledSections.includes('license') && (
              <div className="section-card">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-primary" />
                  License
                </h3>
                <Input
                  value={formData.license}
                  onChange={e => updateField('license', e.target.value)}
                  placeholder="MIT"
                  className="input-dark"
                />
              </div>
            )}
          </div>

          {/* Right Panel - Preview */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="section-card">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Preview</h3>
                  <TabsList className="bg-secondary">
                    <TabsTrigger value="preview" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                      <Eye className="w-4 h-4" />
                      Preview
                    </TabsTrigger>
                    <TabsTrigger value="code" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                      <Code className="w-4 h-4" />
                      Code
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="preview" className="mt-0">
                  <MarkdownPreview markdown={markdown} />
                </TabsContent>

                <TabsContent value="code" className="mt-0">
                  <pre className="preview-container max-h-[600px] overflow-auto text-xs">
                    {markdown}
                  </pre>
                </TabsContent>
              </Tabs>

              <div className="mt-4 pt-4 border-t border-border">
                <Button onClick={() => setShowExport(true)} variant="hero" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Export README.md
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ExportModal
        open={showExport}
        onClose={() => setShowExport(false)}
        markdown={markdown}
      />
    </div>
  );
};

// Toggle Option Component
interface ToggleOptionProps {
  icon: React.ReactNode;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const ToggleOption = ({ icon, label, checked, onChange }: ToggleOptionProps) => (
  <label className="flex items-center gap-2 p-2 rounded-lg bg-secondary/50 hover:bg-secondary cursor-pointer transition-colors">
    <Switch checked={checked} onCheckedChange={onChange} />
    <span className="text-muted-foreground">{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </label>
);

export default Builder;
