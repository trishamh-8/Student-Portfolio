import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Card, CardContent } from '../components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { 
    ArrowLeft, 
    ArrowRight, 
    Check, 
    Upload, 
    X, 
    Image as ImageIcon, 
    Type, 
    LayoutTemplate, 
    Eye,
    Save,
    Sparkles,
    MousePointer2,
    Bot
} from 'lucide-react';
import { toast } from 'sonner';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { AIAssistant } from '../components/AIAssistant';

const steps = [
  { number: 1, title: 'Details', icon: Type },
  { number: 2, title: 'Story', icon: LayoutTemplate },
  { number: 3, title: 'Visuals', icon: ImageIcon },
  { number: 4, title: 'Review', icon: Eye },
];

export function CreateProject() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [aiMode, setAIMode] = useState<'project-description' | 'article-enhancer'>('project-description');
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    problem: '',
    process: '',
    result: '',
    tags: [] as string[],
    images: [] as string[],
  });

  const [newTag, setNewTag] = useState('');

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
    window.scrollTo(0, 0); // Scroll to top on step change
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };

  const handlePublish = () => {
    toast.success('Project published successfully!');
    navigate('/app/projects');
  };

  const handleSaveDraft = () => {
    toast.success('Project saved as draft');
    navigate('/app/projects');
  };

  const addTag = () => {
    if (newTag && !formData.tags.includes(newTag)) {
      setFormData({ ...formData, tags: [...formData.tags, newTag] });
      setNewTag('');
    }
  };

  const removeTag = (tag: string) => {
    setFormData({ ...formData, tags: formData.tags.filter(t => t !== tag) });
  };

  const handleImageUpload = () => {
    toast.promise(
        new Promise((resolve) => setTimeout(resolve, 1000)),
        {
            loading: 'Uploading images...',
            success: () => {
                const mockImages = [
                    'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY1NDE2MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
                    'https://images.unsplash.com/photo-1699040309386-11c615ed64d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjU0NDExNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
                  ];
                setFormData({ ...formData, images: [...formData.images, ...mockImages] });
                return 'Images uploaded successfully';
            },
            error: 'Error uploading'
        }
    );
  };

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans pb-20">
      
      {/* Top Navigation (Static) */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" onClick={() => navigate('/app/projects')} className="hover:bg-slate-100 rounded-full">
                    <ArrowLeft className="w-5 h-5 text-slate-600" />
                </Button>
                <div>
                    <h1 className="text-lg font-bold text-slate-900">New Project</h1>
                </div>
            </div>

            {/* Stepper */}
            <div className="hidden md:flex items-center space-x-2">
                {steps.map((step, idx) => (
                    <div key={step.number} className="flex items-center">
                        <div 
                            className={`flex items-center space-x-2 px-3 py-1.5 rounded-full transition-all ${
                                currentStep === step.number 
                                    ? 'bg-slate-900 text-white shadow-md' 
                                    : currentStep > step.number 
                                    ? 'bg-green-50 text-green-700'
                                    : 'text-slate-400'
                            }`}
                        >
                            {currentStep > step.number ? (
                                <Check className="w-4 h-4" />
                            ) : (
                                <step.icon className="w-4 h-4" />
                            )}
                            <span className="text-sm font-medium">{step.title}</span>
                        </div>
                        {idx < steps.length - 1 && (
                            <div className="w-8 h-px bg-slate-200 mx-2" />
                        )}
                    </div>
                ))}
            </div>

            <div className="flex items-center space-x-2">
                <Button variant="ghost" onClick={handleSaveDraft} className="hidden sm:flex text-slate-500 hover:text-slate-900">
                    <Save className="w-4 h-4 mr-2" />
                    Save Draft
                </Button>
            </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-10">
        <Card className="border-0 shadow-sm ring-1 ring-slate-200 bg-white min-h-[600px]">
          <CardContent className="p-8 md:p-12">
            
            {/* Step 1: Basic Info */}
            {currentStep === 1 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center max-w-lg mx-auto mb-10">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Type className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Project Details</h2>
                    <p className="text-slate-500 mt-2">Start by giving your project a title and category.</p>
                </div>

                <div className="space-y-6 max-w-2xl mx-auto">
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-slate-900 font-semibold">Title</Label>
                    <Input
                      id="title"
                      placeholder="e.g. Fintech Mobile App Redesign"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="h-12 text-lg border-slate-200 focus-visible:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="category" className="text-slate-900 font-semibold">Category</Label>
                        <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                        <SelectTrigger className="h-12 border-slate-200 bg-white">
                            <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                            <SelectItem value="web-dev">Web Development</SelectItem>
                            <SelectItem value="mobile">Mobile Development</SelectItem>
                            <SelectItem value="branding">Branding</SelectItem>
                        </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="tags" className="text-slate-900 font-semibold">Tags</Label>
                        <Input
                            id="tags"
                            placeholder="Type & press Enter"
                            value={newTag}
                            onChange={(e) => setNewTag(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                            className="h-12 border-slate-200"
                        />
                    </div>
                  </div>

                  {formData.tags.length > 0 && (
                     <div className="flex flex-wrap gap-2 pt-1">
                        {formData.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="px-3 py-1 bg-slate-100 text-slate-700 hover:bg-slate-200 border-0">
                                {tag}
                                <X className="w-3 h-3 ml-2 cursor-pointer hover:text-red-500" onClick={() => removeTag(tag)} />
                            </Badge>
                        ))}
                     </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-slate-900 font-semibold">Short Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Briefly describe your project..."
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="resize-none border-slate-200 focus-visible:ring-blue-500 bg-white"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Content Structure */}
            {currentStep === 2 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center max-w-lg mx-auto mb-10">
                    <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <LayoutTemplate className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">The Story</h2>
                    <p className="text-slate-500 mt-2">Explain the 'Why' and 'How' behind your project.</p>
                </div>

                <div className="space-y-8 max-w-2xl mx-auto">
                  {[
                      { id: 'problem', label: 'The Problem', color: 'bg-red-100 text-red-600', placeholder: 'What challenge were you trying to solve?' },
                      { id: 'process', label: 'The Process', color: 'bg-blue-100 text-blue-600', placeholder: 'How did you approach the solution?' },
                      { id: 'result', label: 'The Result', color: 'bg-green-100 text-green-600', placeholder: 'What was the outcome?' }
                  ].map((field, idx) => (
                      <div key={field.id} className="space-y-2 group">
                        <Label htmlFor={field.id} className="text-slate-900 font-semibold flex items-center">
                            <span className={`w-6 h-6 rounded-full ${field.color} text-xs flex items-center justify-center mr-2 font-bold`}>
                                {idx + 1}
                            </span>
                            {field.label}
                        </Label>
                        <Textarea
                          id={field.id}
                          placeholder={field.placeholder}
                          rows={field.id === 'process' ? 6 : 4}
                          value={formData[field.id as keyof typeof formData] as string}
                          onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                          className="bg-slate-50/50 border-slate-200 focus:bg-white transition-colors"
                        />
                      </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Media Upload */}
            {currentStep === 3 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center max-w-lg mx-auto mb-6">
                    <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <ImageIcon className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Visuals</h2>
                    <p className="text-slate-500 mt-2">Upload high-quality images to showcase your work.</p>
                </div>

                <div 
                  className="border-2 border-dashed border-slate-300 rounded-2xl p-12 text-center hover:border-blue-500 hover:bg-blue-50/30 transition-all cursor-pointer group bg-slate-50/30"
                  onClick={handleImageUpload}
                >
                  <div className="w-16 h-16 bg-white rounded-full shadow-sm ring-1 ring-slate-200 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Upload className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">Click to upload or drag and drop</h3>
                  <p className="text-slate-500 text-sm">SVG, PNG, JPG or GIF (max. 10MB)</p>
                </div>

                {formData.images.length > 0 && (
                  <div className="space-y-4 pt-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <h3 className="font-semibold text-slate-900">Uploaded Gallery</h3>
                        <span className="text-xs text-slate-500 font-medium bg-slate-100 px-2 py-1 rounded-full">{formData.images.length} items</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {formData.images.map((image, idx) => (
                        <div key={idx} className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 ring-1 ring-slate-200 shadow-sm">
                          <ImageWithFallback
                            src={image}
                            alt={`Upload ${idx + 1}`}
                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                             {idx !== 0 && (
                                <Button size="sm" variant="secondary" className="h-8 px-2 text-xs">
                                    Set Cover
                                </Button>
                             )}
                             <Button size="icon" variant="destructive" className="h-8 w-8 rounded-full">
                                <X className="w-4 h-4" />
                             </Button>
                          </div>
                          {idx === 0 && (
                            <div className="absolute top-2 left-2">
                                <Badge className="bg-white/90 text-slate-900 backdrop-blur-sm shadow-sm hover:bg-white border-0">Cover</Badge>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 4: Preview */}
            {currentStep === 4 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                 <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-lg font-bold text-slate-900 flex items-center">
                            <Sparkles className="w-5 h-5 mr-2 text-amber-500" />
                            Ready to publish?
                        </h2>
                        <p className="text-sm text-slate-500">Here is a preview of your project page.</p>
                    </div>
                    <Button variant="outline" onClick={() => setCurrentStep(1)} className="bg-white">
                        <MousePointer2 className="w-4 h-4 mr-2" /> Edit Details
                    </Button>
                 </div>

                 {/* Mock Project Page */}
                 <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white">
                    <div className="aspect-[21/9] bg-slate-100 relative group">
                        {formData.images[0] ? (
                            <img src={formData.images[0]} className="w-full h-full object-cover" alt="Cover" />
                        ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 bg-slate-50">
                                <ImageIcon className="w-12 h-12 mb-2 opacity-20" />
                                <span className="text-sm">No Cover Image</span>
                            </div>
                        )}
                    </div>
                    
                    <div className="p-8 md:p-12 max-w-3xl mx-auto">
                        <div className="mb-8">
                            <Badge className="mb-4 bg-slate-100 text-slate-700 hover:bg-slate-200 border-0">{formData.category || 'Uncategorized'}</Badge>
                            <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">{formData.title || 'Untitled Project'}</h1>
                            <p className="text-xl text-slate-500 leading-relaxed">{formData.description || 'No description provided.'}</p>
                        </div>

                        <div className="space-y-12">
                            {['Problem', 'Process', 'Result'].map((section) => (
                                formData[section.toLowerCase() as keyof typeof formData] && (
                                    <div key={section}>
                                        <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-wide opacity-80">{section}</h3>
                                        <p className="text-slate-600 leading-relaxed whitespace-pre-line text-lg">
                                            {formData[section.toLowerCase() as keyof typeof formData]}
                                        </p>
                                    </div>
                                )
                            ))}
                        </div>

                        {formData.images.length > 1 && (
                            <div className="mt-12 pt-12 border-t border-slate-100">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Gallery</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {formData.images.slice(1).map((img, i) => (
                                        <img key={i} src={img} className="rounded-xl w-full h-auto shadow-sm" alt="Gallery" />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                 </div>
              </div>
            )}

          </CardContent>
        </Card>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between py-8">
          <Button 
            variant="ghost" 
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={`text-slate-500 hover:text-slate-900 ${currentStep === 1 ? 'invisible' : ''}`}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          {currentStep < 4 ? (
            <Button onClick={handleNext} size="lg" className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 shadow-lg shadow-slate-900/20">
              Continue
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button onClick={handlePublish} size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 shadow-lg shadow-emerald-600/20">
              <Check className="w-4 h-4 mr-2" />
              Publish Project
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}