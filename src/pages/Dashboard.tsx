import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { FolderKanban, FileText, Award, TrendingUp, Plus, ArrowRight, Clock, MoreHorizontal, ExternalLink, ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const metrics = [
  {
    title: 'Total Projects',
    value: '12',
    change: '+2 this month',
    trend: 'up',
    icon: FolderKanban,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    title: 'Articles Published',
    value: '8',
    change: '+1 this week',
    trend: 'up',
    icon: FileText,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    title: 'Achievements',
    value: '15',
    change: '+3 new badges',
    trend: 'up',
    icon: Award,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    title: 'Profile Views',
    value: '1.2K',
    change: '+15% vs last week',
    trend: 'up',
    icon: TrendingUp,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
];

const featuredProjects = [
  {
    id: 1,
    title: 'E-Commerce Mobile App',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY1NDE2MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'Published',
    updated: '2h ago'
  },
  {
    id: 2,
    title: 'Portfolio Website Redesign',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1710799885122-428e63eff691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwb3J0Zm9saW98ZW58MXx8fHwxNzY1NDUxOTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'Published',
    updated: '1d ago'
  },
  {
    id: 3,
    title: 'Dashboard UI Kit',
    category: 'UI Design',
    image: 'https://images.unsplash.com/photo-1699040309386-11c615ed64d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjU0NDExNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'Draft',
    updated: '3d ago'
  },
];

const recentActivities = [
  {
    id: 1,
    action: 'Published new project',
    target: 'E-Commerce Mobile App',
    time: '2 hours ago',
    type: 'project',
  },
  {
    id: 2,
    action: 'Earned achievement',
    target: 'First 10 Projects Milestone',
    time: '1 day ago',
    type: 'achievement',
  },
  {
    id: 3,
    action: 'Updated article',
    target: 'Getting Started with Figma',
    time: '2 days ago',
    type: 'article',
  },
  {
    id: 4,
    action: 'Uploaded media',
    target: '5 images to "Abstract" gallery',
    time: '3 days ago',
    type: 'media',
  },
];

export function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50/50 font-sans p-6 md:p-8">
      <div className="max-w-[1440px] mx-auto space-y-10">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">John!</span> 👋
            </h1>
            <p className="text-slate-500 mt-2 text-lg">Here's what's happening with your portfolio today.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="rounded-full bg-white hover:bg-slate-50 border-slate-200" asChild>
              <Link to="/app/settings">
                Edit Profile
              </Link>
            </Button>
            <Button className="rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-lg shadow-slate-900/20" asChild>
              <Link to="/app/projects/new">
                <Plus className="w-4 h-4 mr-2" />
                Add Project
              </Link>
            </Button>
          </div>
        </div>

        {/* Metrics Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white ring-1 ring-slate-200/60 rounded-xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${metric.bg}`}>
                      <Icon className={`w-5 h-5 ${metric.color}`} />
                    </div>
                    {metric.trend === 'up' && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                           <ArrowUpRight className="w-3 h-3 mr-1" />
                           {metric.change.split(' ')[0]}
                        </span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-1">{metric.value}</h3>
                    <p className="text-sm font-medium text-slate-500">{metric.title}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Projects Slider */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">Featured Projects</h2>
            <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 -mr-4" asChild>
              <Link to="/app/projects">
                View All Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card 
                key={project.id} 
                className="group border-0 bg-white shadow-sm hover:shadow-xl hover:shadow-blue-900/5 ring-1 ring-slate-200 transition-all duration-300 overflow-hidden rounded-2xl cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md shadow-sm border border-white/20 ${
                      project.status === 'Published' 
                        ? 'bg-emerald-500/90 text-white' 
                        : 'bg-amber-400/90 text-amber-950'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="secondary" size="sm" className="rounded-full bg-white/90 text-slate-900 hover:bg-white" asChild>
                        <Link to={`/app/projects/${project.id}`}>Edit Project</Link>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">{project.title}</h3>
                      <p className="text-sm text-slate-500 font-medium">{project.category}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-xs text-slate-400 border-t border-slate-50 pt-3">
                    <Clock className="w-3.5 h-3.5 mr-1.5" />
                    Updated {project.updated}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activities & Quick Actions Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Recent Activities Feed */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-sm ring-1 ring-slate-200 rounded-xl bg-white h-full">
              <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-slate-50">
                <CardTitle className="text-lg font-bold text-slate-900">Recent Activity</CardTitle>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
                    <MoreHorizontal className="w-4 h-4" />
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-slate-50">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start p-5 hover:bg-slate-50/50 transition-colors group">
                      <div className={`mt-1 w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${
                         activity.type === 'project' ? 'bg-blue-50 border-blue-100 text-blue-600' :
                         activity.type === 'achievement' ? 'bg-amber-50 border-amber-100 text-amber-600' :
                         activity.type === 'article' ? 'bg-purple-50 border-purple-100 text-purple-600' :
                         'bg-slate-50 border-slate-200 text-slate-500'
                      }`}>
                         {activity.type === 'project' && <FolderKanban className="w-4 h-4" />}
                         {activity.type === 'achievement' && <Award className="w-4 h-4" />}
                         {activity.type === 'article' && <FileText className="w-4 h-4" />}
                         {activity.type === 'media' && <Plus className="w-4 h-4" />}
                      </div>
                      <div className="ml-4 flex-1">
                        <p className="text-sm font-medium text-slate-900">
                            {activity.action} <span className="text-slate-500 font-normal">on</span> <span className="font-semibold text-slate-800 hover:text-blue-600 cursor-pointer transition-colors">{activity.target}</span>
                        </p>
                        <p className="text-xs text-slate-400 mt-1 flex items-center">
                            {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t border-slate-50 text-center">
                    <Button variant="ghost" size="sm" className="text-xs text-slate-500 w-full hover:text-blue-600">View All Activity</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions & Stats */}
          <div className="space-y-6">
            
            {/* Quick Actions */}
            <Card className="border-0 shadow-sm ring-1 ring-slate-200 rounded-xl bg-slate-900 text-white overflow-hidden relative">
               <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
               <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
               
              <CardHeader>
                <CardTitle className="text-lg font-bold">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 relative z-10">
                <Link to="/app/projects/new" className="flex items-center p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer group">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-3 shadow-lg">
                        <Plus className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-sm">Create New Project</span>
                </Link>
                <Link to="/app/articles" className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                    <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center mr-3 shadow-lg">
                        <FileText className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-sm">Write Article</span>
                </Link>
                <Link to="/portfolio/johndoe" className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center mr-3 shadow-lg">
                        <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-sm">View Public Site</span>
                </Link>
              </CardContent>
            </Card>

            {/* Portfolio Completeness */}
            <Card className="border-0 shadow-sm ring-1 ring-slate-200 rounded-xl bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold text-slate-900 flex justify-between items-center">
                    Completeness
                    <span className="text-xs font-normal text-slate-500 bg-slate-100 px-2 py-1 rounded-full">Good Standing</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {[
                    { label: 'Profile Info', val: 100, color: 'bg-green-500' },
                    { label: 'Projects Showcase', val: 80, color: 'bg-blue-600' },
                    { label: 'Media Gallery', val: 60, color: 'bg-purple-500' }
                ].map((item, idx) => (
                    <div key={idx}>
                        <div className="flex justify-between mb-1.5">
                            <span className="text-xs font-medium text-slate-600">{item.label}</span>
                            <span className="text-xs font-bold text-slate-900">{item.val}%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div 
                                className={`h-full rounded-full transition-all duration-1000 ${item.color}`} 
                                style={{ width: `${item.val}%` }} 
                            />
                        </div>
                    </div>
                ))}
                
                <div className="pt-2">
                    <Button variant="outline" size="sm" className="w-full text-xs h-8 border-dashed border-slate-300 text-slate-500 hover:text-blue-600 hover:border-blue-300">
                        Complete Checklist
                    </Button>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}