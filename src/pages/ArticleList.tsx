import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Plus, 
  Search, 
  Calendar, 
  Clock, 
  Eye, 
  Filter, 
  MoreHorizontal, 
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const articles = [
  {
    id: 1,
    title: 'Getting Started with Figma: A Complete Guide',
    excerpt: 'Learn the fundamentals of Figma including frames, constraints, and auto-layout to create your first scalable design project from scratch.',
    category: 'Tutorial',
    date: 'Jan 20, 2024',
    readTime: '8 min read',
    views: 432,
    status: 'Published',
    image: 'https://images.unsplash.com/photo-1699040309386-11c615ed64d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjU0NDExNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: 'UI/UX Design Trends in 2024',
    excerpt: 'Explore the latest design trends that are shaping the industry this year, from Bento grids to spatial design interfaces.',
    category: 'Design',
    date: 'Jan 15, 2024',
    readTime: '6 min read',
    views: 567,
    status: 'Published',
    image: 'https://images.unsplash.com/photo-1710799885122-428e63eff691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwb3J0Zm9saW98ZW58MXx8fHwxNzY1NDUxOTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Building Responsive Layouts with CSS Grid',
    excerpt: 'Master CSS Grid architecture. A deep dive into grid-template-areas, minmax(), and creating complex responsive layouts with ease.',
    category: 'Development',
    date: 'Jan 10, 2024',
    readTime: '10 min read',
    views: 389,
    status: 'Draft',
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY1NDE2MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const getCategoryStyles = (category: string) => {
  switch (category) {
    case 'Tutorial': return 'bg-blue-50 text-blue-700 ring-blue-600/20';
    case 'Design': return 'bg-purple-50 text-purple-700 ring-purple-600/20';
    case 'Development': return 'bg-emerald-50 text-emerald-700 ring-emerald-600/20';
    default: return 'bg-slate-50 text-slate-700 ring-slate-600/20';
  }
};

export function ArticleList() {
  return (
    <div className="min-h-screen bg-slate-50/50 font-sans p-6 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Articles
            </h1>
            <p className="text-slate-500 mt-1">Manage and publish your thoughts to the world.</p>
          </div>
          <Button asChild size="lg" className="rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20">
            <Link to="/app/articles/new">
              <Plus className="w-4 h-4 mr-2" />
              Write New Article
            </Link>
          </Button>
        </div>

        {/* Toolbar (Search & Filter) */}
        <div className="flex flex-col md:flex-row gap-4 items-center bg-white p-2 rounded-xl ring-1 ring-slate-200 shadow-sm">
           <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-10 border-0 bg-transparent focus-visible:ring-0 placeholder:text-slate-400"
            />
           </div>
           <div className="flex items-center gap-2 w-full md:w-auto px-2">
             <div className="h-6 w-px bg-slate-200 hidden md:block" />
             <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900 w-full md:w-auto justify-between">
                <span className="flex items-center"><Filter className="w-4 h-4 mr-2" /> Filter</span>
                <ChevronDown className="w-3 h-3 ml-2 opacity-50" />
             </Button>
             <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900 w-full md:w-auto justify-between">
                Sort by: Newest
                <ChevronDown className="w-3 h-3 ml-2 opacity-50" />
             </Button>
           </div>
        </div>

        {/* Articles List */}
        <div className="space-y-4">
          {articles.map((article) => (
            <Card 
                key={article.id} 
                className="group border-0 bg-white ring-1 ring-slate-200 shadow-sm hover:shadow-lg hover:shadow-blue-900/5 hover:ring-blue-100 transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Image Section */}
                  <div className="md:w-72 md:shrink-0 h-48 md:h-auto relative overflow-hidden bg-slate-100">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                         <Badge className={`backdrop-blur-md border-0 shadow-sm ${
                             article.status === 'Published' ? 'bg-emerald-500/90 hover:bg-emerald-600/90' : 'bg-amber-400/90 hover:bg-amber-500/90 text-amber-950'
                         }`}>
                             {article.status}
                         </Badge>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <Badge 
                            variant="outline" 
                            className={`rounded-full border-0 ring-1 ring-inset font-semibold ${getCategoryStyles(article.category)}`}
                        >
                            {article.category}
                        </Badge>
                        
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                            <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      <Link to={`/app/articles/${article.id}`} className="block group-hover:text-blue-600 transition-colors">
                        <h2 className="text-xl font-bold text-slate-900 mb-2 line-clamp-1">
                            {article.title}
                        </h2>
                      </Link>
                      
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-4">
                        {article.excerpt}
                      </p>
                    </div>
                    
                    {/* Footer Meta */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-50 mt-2">
                        <div className="flex items-center space-x-4 text-xs font-medium text-slate-400">
                            <div className="flex items-center">
                                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                                {article.date}
                            </div>
                            <div className="flex items-center">
                                <Clock className="w-3.5 h-3.5 mr-1.5" />
                                {article.readTime}
                            </div>
                            <div className="flex items-center">
                                <Eye className="w-3.5 h-3.5 mr-1.5" />
                                {article.views}
                            </div>
                        </div>

                        <Link 
                            to={`/app/articles/${article.id}`} 
                            className="text-sm font-semibold text-blue-600 flex items-center hover:underline"
                        >
                            Read Article
                            <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Pagination / Load More */}
        <div className="text-center pt-4">
            <Button variant="ghost" className="text-slate-500 hover:text-slate-900">
                Load More Articles
            </Button>
        </div>

      </div>
    </div>
  );
}