import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Sparkles, Zap, Download, Eye, Code2, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TypingText } from '@/components/TypingText';

const features = [
  {
    icon: Sparkles,
    title: 'Smart Badges',
    description: 'Auto-generate beautiful badges for languages, frameworks, and tools with Shields.io integration.',
  },
  {
    icon: Zap,
    title: 'Animated Headers',
    description: 'Add typing animations and SVG effects to make your README stand out.',
  },
  {
    icon: Eye,
    title: 'Live Preview',
    description: 'See your README render in real-time as you build it. No surprises when you push to GitHub.',
  },
  {
    icon: Code2,
    title: 'Clean Markdown',
    description: 'Export GitHub-compatible markdown that looks perfect. Copy or download with one click.',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-primary" />
            <span className="font-semibold text-lg">README<span className="text-primary">.gen</span></span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <Link to="/builder">
              <Button variant="hero" size="sm">
                Get Started
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        {/* Background glow effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-slide-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Free & Open Source</span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up delay-100">
              Create stunning{' '}
              <span className="text-gradient">GitHub READMEs</span>
              <br />in minutes
            </h1>

            {/* Typing effect tagline */}
            <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-8 animate-slide-up delay-200">
              <TypingText
                texts={[
                  "No markdown knowledge required",
                  "Beautiful badges & animations",
                  "Live preview as you build",
                  "Export with one click"
                ]}
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-300">
              <Link to="/builder">
                <Button variant="hero" size="xl" className="group">
                  Start Building
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href="#features">
                <Button variant="outline" size="xl">
                  Learn More
                </Button>
              </a>
            </div>

            {/* Preview mockup */}
            <div className="mt-16 animate-slide-up delay-400">
              <div className="glass-card glow-border p-1 max-w-3xl mx-auto">
                <div className="bg-[hsl(220,20%,4%)] rounded-lg p-6">
                  {/* Mock terminal header */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-4 text-xs text-muted-foreground font-mono">README.md</span>
                  </div>
                  {/* Mock content */}
                  <div className="space-y-3 font-mono text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-primary">#</span>
                      <span className="text-foreground">John Doe</span>
                      <span className="typing-cursor text-primary">|</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" className="h-6" />
                      <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" className="h-6" />
                      <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" className="h-6" />
                    </div>
                    <p className="text-muted-foreground text-xs">Full-stack developer passionate about building great products...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gradient-to-b from-transparent to-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need for a{' '}
              <span className="text-gradient">perfect README</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional-grade README files that impress recruiters, contributors, and fellow developers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="section-card group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="glass-card glow-border p-12 text-center max-w-3xl mx-auto">
            <Download className="w-12 h-12 text-primary mx-auto mb-6 animate-float" />
            <h2 className="text-3xl font-bold mb-4">Ready to level up your GitHub profile?</h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of developers creating beautiful READMEs. It's free, fast, and fun.
            </p>
            <Link to="/builder">
              <Button variant="hero" size="xl" className="animate-pulse-glow">
                Create Your README Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <FileText className="w-5 h-5" />
            <span className="font-medium">README.gen</span>
            <span className="text-sm">• Built for developers</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              GitHub
            </a>
            <span>Made with ❤️ and TypeScript</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
