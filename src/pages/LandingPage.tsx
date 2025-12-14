import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowRight, Sparkles, Layout, Share2, TrendingUp, Award, Palette, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const features = [
  {
    icon: Layout,
    title: 'Professional Templates',
    description: 'Curated designs that let your work shine without the clutter.',
  },
  {
    icon: Palette,
    title: 'Customizable Design',
    description: 'Fine-tune colors, fonts, and layouts to match your personal brand.',
  },
  {
    icon: Share2,
    title: 'Easy Sharing',
    description: 'Get a unique URL instantly. SEO-optimized for maximum visibility.',
  },
  {
    icon: TrendingUp,
    title: 'Track Performance',
    description: 'Real-time analytics to see who is viewing your projects.',
  },
];

const portfolioExamples = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1710799885122-428e63eff691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwb3J0Zm9saW98ZW58MXx8fHwxNzY1NDUxOTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Figma', 'React']
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Frontend Developer',
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY1NDE2MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Vue', 'Node.js']
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Product Designer',
    image: 'https://images.unsplash.com/photo-1699040309386-11c615ed64d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjU0NDExNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Product', 'Strategy']
  },
];

export function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 selection:bg-blue-100 selection:text-blue-900 font-sans">
      
      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <span className="font-bold text-sm tracking-tighter">SP</span>
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-800">
              Student<span className="text-blue-600">Portfolio</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Templates', 'Features', 'Examples'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" className="text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full px-5">
              <Link to="/app">Log in</Link>
            </Button>
            <Button className="rounded-full bg-slate-900 hover:bg-slate-800 text-white px-6 shadow-md hover:shadow-lg transition-all" asChild>
              <Link to="/app">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-[100px] mix-blend-multiply animate-pulse" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400/20 rounded-full blur-[100px] mix-blend-multiply animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-8 max-w-2xl">
              <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 shadow-sm hover:border-blue-300 transition-colors cursor-default">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase">New Version 2.0</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Showcase Work. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Get Hired Faster.
                </span>
              </h1>

              <p className="text-xl text-slate-500 max-w-lg leading-relaxed">
                Build a stunning, professional portfolio in minutes. No coding required. Just drag, drop, and get discovered.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button size="lg" className="rounded-full h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1" asChild>
                  <Link to="/app">
                    Build Your Portfolio
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8 border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900" asChild>
                  <Link to="/templates">
                    View Templates
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-6 border-t border-slate-100">
                 {[
                   { label: 'Active Students', value: '10K+' },
                   { label: 'Projects Hosted', value: '50K+' },
                 ].map((stat, i) => (
                   <div key={i} className="flex flex-col">
                     <span className="text-2xl font-bold text-slate-900">{stat.value}</span>
                     <span className="text-sm font-medium text-slate-500">{stat.label}</span>
                   </div>
                 ))}
                 <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                           <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                        </div>
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-50 text-slate-500 text-[10px] flex items-center justify-center font-bold">+2k</div>
                 </div>
              </div>
            </div>

            {/* Right: Mockup with Glassmorphism */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50 bg-white">
                <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-50 border-b border-slate-100">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  <div className="ml-2 px-3 py-1 bg-white rounded-md text-[10px] text-slate-400 border border-slate-100 font-mono flex-1 text-center">
                    studentportfolio.com/alex
                  </div>
                </div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1604177091072-b7b677a077f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwd29ya2luZyUyMGxhcHRvcHxlbnwxfHx8fDE3NjUzNjM2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Student working on portfolio"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              
              {/* Floating Notification */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 flex items-center gap-4 animate-bounce-slow max-w-xs">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Portfolio Published!</p>
                  <p className="text-xs text-slate-500">Your link is live and ready.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-slate-500">
              Powerful features packaged in a simple interface. Focus on your work, we handle the presentation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-100 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-white border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300">
                    <Icon className="w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Examples Gallery */}
      <section id="examples" className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                Built by Students
              </h2>
              <p className="text-lg text-slate-500">
                Join thousands of students launching their careers with our platform.
              </p>
            </div>
            <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 group">
              View All Examples <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioExamples.map((portfolio) => (
              <Card 
                key={portfolio.id} 
                className="group border-0 bg-white shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 overflow-hidden rounded-2xl ring-1 ring-slate-200 hover:ring-blue-100"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors z-10" />
                  <ImageWithFallback
                    src={portfolio.image}
                    alt={portfolio.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                    <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                      <ArrowRight className="w-4 h-4 text-slate-900" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900">{portfolio.name}</h3>
                        <p className="text-slate-500 text-sm font-medium">{portfolio.role}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {portfolio.tags?.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded bg-slate-100 text-slate-600">
                            {tag}
                        </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Modern Card Style */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden bg-slate-900 px-6 py-20 text-center">
                {/* Abstract shapes */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-indigo-500/30 rounded-full blur-3xl" />
                
                <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                    Ready to launch your career?
                    </h2>
                    <p className="text-xl text-slate-300">
                    Create a portfolio that stands out. It's free to get started and takes less than 5 minutes.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="rounded-full h-14 px-8 text-lg bg-white text-slate-900 hover:bg-slate-100 hover:scale-105 transition-all w-full sm:w-auto">
                        <Link to="/app">
                            Get Started for Free
                        </Link>
                        </Button>
                        <span className="text-slate-400 text-sm">No credit card required</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Modern Minimal Footer */}
      <footer className="bg-white border-t border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white font-bold text-xs">
                  SP
                </div>
                <span className="font-bold text-lg text-slate-900">Student Portfolio</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                The standard for student portfolios. Showcasing the next generation of talent to the world's best companies.
              </p>
            </div>
            
            {['Product', 'Resources', 'Company'].map((title, i) => (
                <div key={i}>
                    <h4 className="font-bold text-slate-900 mb-4">{title}</h4>
                    <ul className="space-y-3 text-sm text-slate-500">
                        {['Features', 'Pricing', 'Templates', 'Guides'].slice(0, 3 + i).map(link => (
                            <li key={link}><a href="#" className="hover:text-blue-600 transition-colors">{link}</a></li>
                        ))}
                    </ul>
                </div>
            ))}
          </div>
          
          <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>© 2024 Student Portfolio. All rights reserved.</p>
            <div className="flex space-x-6">
                <a href="#" className="hover:text-slate-600">Privacy Policy</a>
                <a href="#" className="hover:text-slate-600">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}