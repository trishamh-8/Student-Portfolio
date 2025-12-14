import { useState, useRef, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '../components/ui/dialog';
import { 
  Bot, 
  Sparkles, 
  X, 
  Send, 
  Loader2, 
  FileText, 
  Lightbulb, 
  Wand2,
  CornerDownLeft,
  User,
  CheckCircle2, 
  TrendingUp    
} from 'lucide-react';
import { toast } from 'sonner';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: 'chat' | 'project-description' | 'cv-improver' | 'article-enhancer' | 'skill-suggest';
  initialPrompt?: string;
  onApplySuggestion?: (suggestion: string) => void;
}

export function AIAssistant({ 
  isOpen, 
  onClose, 
  mode = 'chat', 
  initialPrompt = '', 
  onApplySuggestion 
}: AIAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState(initialPrompt);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom functionality
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse = generateAIResponse(mode, userMessage.content);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: aiResponse,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const generateAIResponse = (mode: string, userInput: string): string => {
    switch (mode) {
      case 'project-description':
        return `Here's an enhanced description based on "${userInput.slice(0, 20)}...":\n\nThis project demonstrates a robust solution focusing on user experience and scalability. By leveraging modern technologies, we achieved a 40% improvement in performance.`;
      case 'cv-improver':
        return `CV Tip:\n\nUse action verbs like "Spearheaded", "Developed", or "Optimized".\n\nExample rewrite:\n"Optimized frontend architecture, reducing load times by 2s."`;
      default:
        return `I can help with that! Based on "${userInput}", I suggest focusing on clarity and impact.`;
    }
  };

  const getModeConfig = () => {
    switch (mode) {
      case 'project-description': return { title: 'Description Generator', icon: FileText, placeholder: 'Describe your project...' };
      case 'cv-improver': return { title: 'CV Improver', icon: Wand2, placeholder: 'Paste a bullet point...' };
      case 'article-enhancer': return { title: 'Article Enhancer', icon: Lightbulb, placeholder: 'Paste your draft text...' };
      case 'skill-suggest': return { title: 'Skill Advisor', icon: Sparkles, placeholder: 'What is your career goal?' };
      default: return { title: 'AI Assistant', icon: Bot, placeholder: 'Ask me anything...' };
    }
  };

  const config = getModeConfig();
  const Icon = config.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* PERUBAHAN DI SINI: Ukuran dialog diperpendek dan dipersempit */}
      <DialogContent className="sm:max-w-[450px] h-[500px] flex flex-col p-0 gap-0 overflow-hidden rounded-2xl border-0 shadow-2xl bg-white">
        
        {/* Header */}
        <div className="px-5 py-3 border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600 shadow-sm">
                <Icon className="w-4 h-4" />
            </div>
            <div>
                <DialogTitle className="text-sm font-bold text-slate-900">{config.title}</DialogTitle>
                <div className="flex items-center gap-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">Online</span>
                </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600">
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 scroll-smooth">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-4 opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-1">Hi, I'm your AI Assistant</h3>
              <p className="text-slate-500 text-xs max-w-[200px] mx-auto leading-relaxed">
                Ask me to improve your CV, write descriptions, or brainstorm ideas.
              </p>
              
              {mode === 'chat' && (
                <div className="grid grid-cols-1 gap-2 mt-6 w-full max-w-[240px]">
                  {[
                    { label: 'Improve my bio', icon: User },
                    { label: 'Fix grammar', icon: CheckCircle2 },
                  ].map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setInput(item.label)}
                      className="flex items-center gap-3 p-2.5 text-left bg-white border border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-sm transition-all text-xs text-slate-600 group"
                    >
                      <div className="w-6 h-6 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                        <item.icon className="w-3.5 h-3.5" />
                      </div>
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                    >
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border ${
                            message.role === 'user' 
                                ? 'bg-white border-slate-200' 
                                : 'bg-gradient-to-br from-blue-600 to-indigo-600 border-transparent text-white'
                        }`}>
                            {message.role === 'user' ? <User className="w-3.5 h-3.5 text-slate-600" /> : <Bot className="w-3.5 h-3.5" />}
                        </div>

                        <div className={`flex flex-col max-w-[85%] ${message.role === 'user' ? 'items-end' : 'items-start'}`}>
                            <div className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                                message.role === 'user'
                                    ? 'bg-slate-900 text-white rounded-tr-sm'
                                    : 'bg-white text-slate-700 border border-slate-200 rounded-tl-sm'
                            }`}>
                                {message.content}
                            </div>
                            
                            {message.role === 'assistant' && onApplySuggestion && (
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="mt-2 h-7 rounded-full text-[10px] border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 bg-white px-3"
                                    onClick={() => {
                                        onApplySuggestion(message.content);
                                        toast.success('Applied!');
                                    }}
                                >
                                    <Wand2 className="w-3 h-3 mr-1" />
                                    Apply
                                </Button>
                            )}
                        </div>
                    </div>
                ))}
                
                {isLoading && (
                    <div className="flex gap-3">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shrink-0 text-white">
                            <Bot className="w-3.5 h-3.5" />
                        </div>
                        <div className="bg-white border border-slate-200 px-3 py-2.5 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1">
                            <span className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                            <span className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                            <span className="w-1 h-1 bg-slate-400 rounded-full animate-bounce"></span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white border-t border-slate-100">
          <div className="relative flex items-end gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200 focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-400 transition-all">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              placeholder={config.placeholder}
              rows={1}
              className="min-h-[40px] max-h-24 w-full resize-none border-0 bg-transparent focus-visible:ring-0 py-2.5 px-3 text-sm text-slate-900 placeholder:text-slate-400"
              style={{ height: 'auto' }}
              onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = 'auto';
                  target.style.height = `${target.scrollHeight}px`;
              }}
            />
            <Button
              onClick={handleSendMessage}
              disabled={!input.trim() || isLoading}
              size="icon"
              className={`mb-0.5 h-8 w-8 shrink-0 rounded-lg transition-all ${
                  input.trim() 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md' 
                    : 'bg-slate-200 text-slate-400'
              }`}
            >
              <Send className="w-3.5 h-3.5" />
            </Button>
          </div>
          <div className="flex justify-center mt-2">
             <p className="text-[10px] text-slate-400 flex items-center">
                Press Enter to send
             </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Floating AI Assistant Button
export function AIAssistantButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full shadow-lg bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 z-50 p-0"
        size="icon"
      >
        <Bot className="w-6 h-6 text-white" />
      </Button>

      <AIAssistant isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}