import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Check, Copy, Download, FileText } from 'lucide-react';

interface ExportModalProps {
  open: boolean;
  onClose: () => void;
  markdown: string;
}

export const ExportModal = ({ open, onClose, markdown }: ExportModalProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'README.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <FileText className="w-5 h-5 text-primary" />
            Export README.md
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button onClick={handleCopy} variant="outline" className="flex-1">
              {copied ? (
                <>
                  <Check className="w-4 h-4 mr-2 text-green-500" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2" />
                  Copy to Clipboard
                </>
              )}
            </Button>
            <Button onClick={handleDownload} variant="hero" className="flex-1">
              <Download className="w-4 h-4 mr-2" />
              Download README.md
            </Button>
          </div>

          {/* Raw Markdown Preview */}
          <div className="relative">
            <div className="absolute top-2 right-2 text-xs text-muted-foreground bg-background px-2 py-1 rounded">
              README.md
            </div>
            <pre className="bg-[hsl(220,20%,4%)] rounded-xl p-4 overflow-auto max-h-[400px] text-sm font-mono text-muted-foreground border border-border">
              {markdown}
            </pre>
          </div>

          {/* Instructions */}
          <div className="bg-secondary/30 rounded-lg p-4 border border-border">
            <h4 className="font-semibold text-sm mb-2">📝 How to use:</h4>
            <ol className="text-sm text-muted-foreground space-y-1">
              <li>1. Copy the markdown or download the file</li>
              <li>2. Create a new file called <code className="text-primary">README.md</code> in your repository</li>
              <li>3. Paste the content and commit!</li>
            </ol>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
