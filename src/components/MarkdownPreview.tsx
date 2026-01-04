import { useMemo } from 'react';

interface MarkdownPreviewProps {
  markdown: string;
}

export const MarkdownPreview = ({ markdown }: MarkdownPreviewProps) => {
  const htmlContent = useMemo(() => {
    // Simple markdown to HTML conversion for preview
    let html = markdown
      // Headers
      .replace(/^### (.*$)/gm, '<h3 class="text-lg font-semibold mt-4 mb-2">$1</h3>')
      .replace(/^## (.*$)/gm, '<h2 class="text-xl font-bold mt-6 mb-3 text-primary">$1</h2>')
      .replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold mt-6 mb-4 text-gradient">$1</h1>')
      // Bold and italic
      .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Inline code
      .replace(/`([^`]+)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-primary font-mono text-sm">$1</code>')
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline" target="_blank" rel="noopener">$1</a>')
      // Images - centered
      .replace(/<img src="([^"]+)"([^>]*)\/>/g, '<img src="$1"$2 class="max-w-full h-auto rounded-lg my-2" />')
      // Blockquotes
      .replace(/^> (.*$)/gm, '<blockquote class="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">$1</blockquote>')
      // Unordered lists
      .replace(/^- \[ \] (.*$)/gm, '<li class="flex items-center gap-2 ml-4"><span class="w-4 h-4 border border-muted-foreground rounded"></span>$1</li>')
      .replace(/^- \[x\] (.*$)/gm, '<li class="flex items-center gap-2 ml-4"><span class="w-4 h-4 bg-primary rounded flex items-center justify-center text-xs">✓</span>$1</li>')
      .replace(/^- (.*$)/gm, '<li class="ml-4 list-disc list-inside">$1</li>')
      // Horizontal rules
      .replace(/^---$/gm, '<hr class="my-6 border-border" />')
      // Code blocks
      .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-[hsl(220,20%,8%)] rounded-lg p-4 overflow-x-auto my-4"><code class="text-sm font-mono text-foreground">$2</code></pre>')
      // Paragraphs
      .replace(/^(?!<[hl]|<blockquote|<pre|<li|<hr|<p|<img)(.+)$/gm, '<p class="my-2">$1</p>')
      // Center aligned content
      .replace(/<p align="center">/g, '<div class="text-center my-4">')
      .replace(/<\/p>/g, '</div>')
      // Line breaks
      .replace(/\n/g, '');

    return html;
  }, [markdown]);

  return (
    <div className="preview-container min-h-[400px] max-h-[600px] overflow-y-auto">
      <div 
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};
