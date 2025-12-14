import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ArrowLeft, Eye, CheckCircle2, Sparkles, Zap, ArrowRight, LayoutTemplate } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const templates = [
  {
    id: 1,
    name: 'Minimal',
    category: 'Clean & Simple',
    description: 'A distraction-free design that puts your typography and content front and center.',
    features: ['Vertical scrolling', 'Monospace typography', 'Dark mode support', 'Fast loading'],
    image: 'https://images.unsplash.com/photo-1710799885122-428e63eff691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwb3J0Zm9saW98ZW58MXx8fHwxNzY1NDUxOTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    popular: true,
  },
  {
    id: 2,
    name: 'Visual Grid',
    category: 'Photography & Design',
    description: 'Perfect for designers who want to showcase a large volume of work in a beautiful grid.',
    features: ['Masonry layout', 'Lightbox gallery', 'Filterable tags', 'Hover animations'],
    image: 'https://images.unsplash.com/photo-1699040309386-11c615ed64d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjU0NDExNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    popular: false,
  },
  {
    id: 3,
    name: 'Storytelling',
    category: 'Case Studies',
    description: 'Engage visitors with a narrative-driven experience. Ideal for detailed case studies.',
    features: ['Scroll-telling', 'Parallax effects', 'Chapter navigation', 'Rich media support'],
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY1NDE2MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    popular: true,
  },
];

export function Templates() {
  return (
    <div className="min-h-screen bg-slate-50/50 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Navbar (Consistent with Landing) */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <span className="font-bold text-sm tracking-tighter">SP</span>
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-800">
              Student<span className="text-blue-600">Portfolio</span>
            </span>
          </Link>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full px-4" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Link>
            </Button>
            <Button size="sm" className="rounded-full bg-slate-900 hover:bg-slate-800 text-white px-5 shadow-md" asChild>
              <Link to="/app">
                <LayoutTemplate className="w-4 h-4 mr-2" />
                Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 shadow-sm mb-8">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase">Premium Collection</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Find your perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">look.</span>
          </h1>
          
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Choose a professionally designed template to start your portfolio. 
            Customize layouts, fonts, and colors in seconds.
          </p>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <Card 
                key={template.id}
                className="group border-0 bg-white ring-1 ring-slate-200 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 hover:ring-blue-100 transition-all duration-300 overflow-hidden rounded-2xl flex flex-col h-full"
              >
                {/* Template Preview */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 group-hover:bg-slate-200 transition-colors">
                  <ImageWithFallback
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <Badge variant="secondary" className="bg-white/90 backdrop-blur-md text-slate-700 shadow-sm border-0 font-medium">
                      {template.category}
                    </Badge>
                    {template.popular && (
                      <Badge className="bg-amber-400 text-amber-950 hover:bg-amber-500 border-0 shadow-sm font-bold flex items-center gap-1">
                        <Zap className="w-3 h-3 fill-current" /> Popular
                      </Badge>
                    )}
                  </div>

                  {/* Hover Action */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px] bg-slate-900/20">
                    <Button size="lg" className="rounded-full bg-white text-slate-900 hover:bg-blue-50 hover:text-blue-600 shadow-xl scale-90 group-hover:scale-100 transition-all duration-300" asChild>
                      <Link to={`/portfolio/demo-${template.id}`}>
                        <Eye className="w-4 h-4 mr-2" />
                        Live Preview
                      </Link>
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6 flex-grow">
                  <div className="mb-4">
                    <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {template.name}
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                        {template.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-slate-100">
                    {template.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 mr-2.5 mt-0.5 text-blue-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 mt-auto">
                  <Button className="w-full rounded-full bg-slate-900 hover:bg-blue-600 text-white transition-colors h-11" asChild>
                    <Link to="/app">
                      Use This Template
                      <ArrowRight className="w-4 h-4 ml-2 opacity-60 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden bg-slate-900 px-6 py-16 text-center shadow-2xl shadow-slate-900/20">
                {/* Decorative blobs */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl" />
                
                <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
                        Can't decide? No problem.
                    </h2>
                    <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                        You can switch templates instantly at any time. Your content automatically adapts to the new design without breaking anything.
                    </p>
                    <Button size="lg" className="rounded-full bg-white text-slate-900 hover:bg-blue-50 h-12 px-8 font-medium" asChild>
                        <Link to="/app">
                        Get Started for Free
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-white border-t border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded bg-slate-900 flex items-center justify-center text-white text-[10px] font-bold">SP</div>
            <span className="text-sm font-semibold text-slate-900">Student Portfolio</span>
          </div>
          <p className="text-sm text-slate-500">© 2024 Student Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}