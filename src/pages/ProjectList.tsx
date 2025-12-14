import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
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
  Plus, 
  Search, 
  Eye, 
  MoreHorizontal, 
  ArrowUpRight,
  Filter,
  LayoutGrid,
  XCircle
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const initialProjects = [
  {
    id: 1,
    title: 'E-Commerce Mobile App',
    category: 'UI/UX Design',
    year: 2024,
    status: 'Published',
    skills: ['Figma', 'Prototyping', 'User Research'],
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY1NDE2MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    views: 245,
  },
  {
    id: 2,
    title: 'Portfolio Website Redesign',
    category: 'Web Development',
    year: 2024,
    status: 'Published',
    skills: ['React', 'Tailwind CSS', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1710799885122-428e63eff691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwb3J0Zm9saW98ZW58MXx8fHwxNzY1NDUxOTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    views: 189,
  },
  {
    id: 3,
    title: 'Dashboard UI Kit',
    category: 'UI Design',
    year: 2024,
    status: 'Draft',
    skills: ['Figma', 'Design System', 'Components'],
    image: 'https://images.unsplash.com/photo-1699040309386-11c615ed64d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjU0NDExNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    views: 156,
  },
  {
    id: 4,
    title: 'Social Media App Concept',
    category: 'UI/UX Design',
    year: 2023,
    status: 'Published',
    skills: ['Figma', 'UI Design', 'Animation'],
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY1NDE2MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    views: 312,
  },
  {
    id: 5,
    title: 'Landing Page Collection',
    category: 'Web Design',
    year: 2023,
    status: 'Published',
    skills: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1710799885122-428e63eff691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwb3J0Zm9saW98ZW58MXx8fHwxNzY1NDUxOTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    views: 278,
  },
  {
    id: 6,
    title: 'Brand Identity Design',
    category: 'Graphic Design',
    year: 2023,
    status: 'Published',
    skills: ['Illustrator', 'Photoshop', 'Branding'],
    image: 'https://images.unsplash.com/photo-1693159682660-c125e71844d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzY1NDMwNjkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    views: 198,
  },
];

export function ProjectList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  // Filter Logic
  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            project.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = categoryFilter === 'all' || project.category === categoryFilter;
      const matchesStatus = statusFilter === 'all' || project.status === statusFilter;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchQuery, categoryFilter, statusFilter]);

  const clearFilters = () => {
      setSearchQuery('');
      setCategoryFilter('all');
      setStatusFilter('all');
  };

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Projects
            </h1>
            <p className="text-slate-500 mt-1">Showcase your best work to the world.</p>
          </div>
          <Button asChild size="lg" className="rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20">
            <Link to="/app/projects/new">
              <Plus className="w-4 h-4 mr-2" />
              Create Project
            </Link>
          </Button>
        </div>

        {/* Toolbar (Search & Filter) */}
        <div className="bg-white p-2 rounded-2xl ring-1 ring-slate-200 shadow-sm flex flex-col md:flex-row gap-4 items-center transition-all duration-300">
           {/* Search */}
           <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              type="search"
              placeholder="Search projects by title or skill..."
              className="pl-10 border-0 bg-transparent focus-visible:ring-0 placeholder:text-slate-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
                <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                    <XCircle className="w-4 h-4" />
                </button>
            )}
           </div>

           <div className="w-full md:w-px h-px md:h-8 bg-slate-100" />

           {/* Filters */}
           <div className="flex flex-wrap items-center gap-2 w-full md:w-auto px-2">
             <div className="w-full md:w-40">
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className={`border-0 h-9 rounded-lg transition-colors ${categoryFilter !== 'all' ? 'bg-blue-50 text-blue-700 font-medium' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}>
                    <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="UI Design">UI Design</SelectItem>
                    <SelectItem value="Web Design">Web Design</SelectItem>
                    <SelectItem value="Graphic Design">Graphic Design</SelectItem>
                </SelectContent>
                </Select>
             </div>

             <div className="w-full md:w-32">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className={`border-0 h-9 rounded-lg transition-colors ${statusFilter !== 'all' ? 'bg-blue-50 text-blue-700 font-medium' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}>
                    <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="Published">Published</SelectItem>
                    <SelectItem value="Draft">Draft</SelectItem>
                </SelectContent>
                </Select>
             </div>
             
             <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-900 hidden md:flex">
                <LayoutGrid className="w-4 h-4" />
             </Button>
           </div>
        </div>

        {/* Active Filters Display */}
        {(categoryFilter !== 'all' || statusFilter !== 'all') && (
            <div className="flex items-center gap-2 text-sm text-slate-500 animate-in fade-in slide-in-from-top-1 duration-300">
                <span>Active filters:</span>
                {categoryFilter !== 'all' && (
                    <Badge variant="secondary" className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50">
                        {categoryFilter}
                        <button onClick={() => setCategoryFilter('all')} className="ml-1 hover:text-red-500"><XCircle className="w-3 h-3" /></button>
                    </Badge>
                )}
                {statusFilter !== 'all' && (
                    <Badge variant="secondary" className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50">
                        {statusFilter}
                        <button onClick={() => setStatusFilter('all')} className="ml-1 hover:text-red-500"><XCircle className="w-3 h-3" /></button>
                    </Badge>
                )}
                <button onClick={clearFilters} className="text-blue-600 hover:underline text-xs ml-2">Clear all</button>
            </div>
        )}

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
                <Card 
                key={project.id}
                className="group border-0 bg-white ring-1 ring-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:ring-blue-100 transition-all duration-300 overflow-hidden rounded-2xl flex flex-col h-full animate-in fade-in zoom-in-95 duration-500"
                >
                {/* Image Area */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 left-3">
                        <Badge className={`backdrop-blur-md border-0 shadow-sm ${
                            project.status === 'Published' ? 'bg-white/90 text-emerald-700' : 'bg-white/90 text-slate-600'
                        }`}>
                            {project.status === 'Published' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5" />}
                            {project.status === 'Draft' && <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-1.5" />}
                            {project.status}
                        </Badge>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300" />
                    
                    <Link to={`/app/projects/${project.id}`} className="absolute inset-0 z-10" />
                </div>
                
                {/* Content Area */}
                <CardContent className="p-6 flex flex-col flex-1 relative">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1.5">{project.category}</p>
                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                                <Link to={`/app/projects/${project.id}`}>
                                    {project.title}
                                </Link>
                            </h3>
                        </div>
                        
                        {/* Action Menu */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8 -mr-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full relative z-20 shrink-0">
                                    <MoreHorizontal className="w-4 h-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-40">
                                <DropdownMenuItem asChild>
                                    <Link to={`/app/projects/${project.id}`}>View Details</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link to={`/app/projects/${project.id}/edit`}>Edit Project</Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-600 focus:text-red-600 focus:bg-red-50">Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    
                    {/* Skills/Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.skills.slice(0, 3).map((skill, idx) => (
                            <span key={idx} className="text-[10px] font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                                {skill}
                            </span>
                        ))}
                        {project.skills.length > 3 && (
                            <span className="text-[10px] font-medium text-slate-400 px-1 py-1">+{project.skills.length - 3}</span>
                        )}
                    </div>

                    {/* Footer Stats */}
                    <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400 font-medium">
                        <div className="flex items-center">
                            <Eye className="w-3.5 h-3.5 mr-1.5" />
                            {project.views} Views
                        </div>
                        <div className="flex items-center group/link">
                            <span className="group-hover/link:text-blue-600 transition-colors">Open Project</span>
                            <ArrowUpRight className="w-3.5 h-3.5 ml-1 group-hover/link:text-blue-600 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                        </div>
                    </div>
                </CardContent>
                </Card>
            ))}
            </div>
        ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in-95 duration-500">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                    <Search className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">No projects found</h3>
                <p className="text-slate-500 max-w-sm mb-6">
                    We couldn't find any projects matching your current filters. Try adjusting your search or category.
                </p>
                <Button variant="outline" onClick={clearFilters}>
                    Clear Filters
                </Button>
            </div>
        )}

        {/* Pagination (Only show if there are projects) */}
        {filteredProjects.length > 0 && (
            <div className="flex items-center justify-center pt-8 pb-4">
                <Button variant="outline" className="rounded-full border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:bg-white px-6">
                    Load More Projects
                </Button>
            </div>
        )}
      </div>
    </div>
  );
}