import { Link, useParams } from 'react-router';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Twitter, 
  Globe, 
  MapPin, 
  ArrowRight, 
  Briefcase, 
  ExternalLink,
  Download
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const portfolio = {
  name: 'John Doe',
  role: 'Product Designer',
  bio: 'I craft digital experiences that blend aesthetics with functionality. Currently building accessible interfaces at TechCorp.',
  location: 'San Francisco, CA',
  email: 'john.doe@example.com',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200', // Placeholder avatar
  social: {
    website: 'https://johndoe.com',
    github: 'https://github.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe',
    twitter: 'https://twitter.com/johndoe',
  },
  skills: ['UI/UX Design', 'Figma', 'React', 'TypeScript', 'Tailwind CSS', 'Design Systems', 'Prototyping'],
  projects: [
    {
      id: 1,
      title: 'E-Commerce Mobile App',
      category: 'UI/UX Design',
      description: 'A comprehensive redesign focused on improving checkout conversion by 25%.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY1NDUxOTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Mobile', 'Strategy', 'UX Research'],
    },
    {
      id: 2,
      title: 'Finance Dashboard',
      category: 'Web Application',
      description: 'Real-time data visualization dashboard for financial analysts.',
      image: 'https://images.unsplash.com/photo-1699040309386-11c615ed64d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjU0NDExNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'D3.js', 'Dashboard'],
    },
    {
      id: 3,
      title: 'Travel Agency Brand',
      category: 'Branding',
      description: 'Complete brand identity overhaul including logo, typography, and marketing assets.',
      image: 'https://images.unsplash.com/photo-1710799885122-428e63eff691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwb3J0Zm9saW98ZW58MXx8fHwxNzY1NDUxOTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Branding', 'Illustrator', 'Identity'],
    },
  ],
};

export function PublicPortfolio() {
  const { username } = useParams();

  return (
    <div className="min-h-screen bg-slate-50/30 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link to="/" className="text-xl font-bold tracking-tight text-slate-900">
                {portfolio.name}
            </Link>
            
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
                <a href="#projects" className="hover:text-slate-900 transition-colors">Work</a>
                <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
            </nav>

            <Button size="sm" className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-5">
                Hire Me
            </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-8">
                <div className="space-y-4">
                    <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ring-1 ring-blue-100">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Open to Work
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                        Hi, I'm {portfolio.name.split(' ')[0]}. <br/>
                        I design <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">digital products.</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                        {portfolio.bio}
                    </p>
                </div>

                <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="rounded-full bg-slate-900 text-white hover:bg-slate-800 px-8 h-12">
                        View My Work <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full border-slate-300 text-slate-700 hover:bg-slate-50 px-8 h-12">
                        Download CV <Download className="ml-2 w-4 h-4" />
                    </Button>
                </div>

                <div className="pt-8 border-t border-slate-200">
                    <p className="text-sm font-medium text-slate-500 mb-4 uppercase tracking-wider">Connect with me</p>
                    <div className="flex gap-4">
                        {Object.entries(portfolio.social).map(([platform, link]) => (
                            link && (
                                <a 
                                    key={platform} 
                                    href={link} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                >
                                    {platform === 'github' && <Github className="w-5 h-5" />}
                                    {platform === 'linkedin' && <Linkedin className="w-5 h-5" />}
                                    {platform === 'twitter' && <Twitter className="w-5 h-5" />}
                                    {platform === 'website' && <Globe className="w-5 h-5" />}
                                </a>
                            )
                        ))}
                    </div>
                </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center md:justify-end">
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                    <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-y-4 translate-x-4"></div>
                    <div className="relative rounded-full overflow-hidden border-8 border-white shadow-2xl w-full h-full">
                        <img 
                            src={portfolio.avatar} 
                            alt={portfolio.name} 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    
                    {/* Floating Badge */}
                    <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-bounce-slow">
                        <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">
                            <Briefcase className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 font-medium uppercase">Experience</p>
                            <p className="text-sm font-bold text-slate-900">5+ Years</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Skills Marquee (Simplified as Tags) */}
      <section className="border-y border-slate-200 bg-white py-10 overflow-hidden">
         <div className="max-w-6xl mx-auto px-6">
            <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">Expertise & Tools</p>
            <div className="flex flex-wrap justify-center gap-3">
                {portfolio.skills.map((skill) => (
                    <span 
                        key={skill} 
                        className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-600 font-medium text-sm hover:border-blue-200 hover:text-blue-600 transition-colors cursor-default"
                    >
                        {skill}
                    </span>
                ))}
            </div>
         </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-6xl mx-auto space-y-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Selected Works</h2>
                    <p className="text-slate-500 text-lg">A showcase of my latest projects and experiments.</p>
                </div>
                <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 -mr-4">
                    View All Projects <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolio.projects.map((project) => (
                    <Link key={project.id} to={`#project-${project.id}`} className="group block">
                        <Card className="h-full border-0 bg-white ring-1 ring-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:ring-blue-100 transition-all duration-300 rounded-2xl overflow-hidden flex flex-col">
                            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                                <ImageWithFallback
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <Badge className="bg-white/90 text-slate-900 backdrop-blur-sm shadow-sm border-0 hover:bg-white">
                                        {project.category}
                                    </Badge>
                                </div>
                                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors" />
                            </div>
                            
                            <CardContent className="p-6 flex-1 flex flex-col">
                                <div className="flex-1 space-y-3">
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                                        {project.title}
                                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>
                                
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.tags.slice(0, 3).map(tag => (
                                        <span key={tag} className="text-[10px] font-medium uppercase tracking-wide text-slate-400 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                {/* Abstract shapes */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative z-10 space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Ready to start a project?</h2>
                    <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
                        I'm currently available for freelance projects and open to full-time opportunities. Let's create something amazing together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="rounded-full bg-white text-slate-900 hover:bg-slate-100 px-8 h-14 text-lg shadow-lg">
                            <Mail className="w-5 h-5 mr-2" />
                            Email Me
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full border-slate-700 text-white hover:bg-slate-800 hover:text-white px-8 h-14 text-lg">
                            Schedule Call
                        </Button>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-12 border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-sm">
                © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm font-medium text-slate-600">
                <Link to="#" className="hover:text-slate-900">Twitter</Link>
                <Link to="#" className="hover:text-slate-900">LinkedIn</Link>
                <Link to="#" className="hover:text-slate-900">GitHub</Link>
            </div>
        </div>
      </footer>

    </div>
  );
}