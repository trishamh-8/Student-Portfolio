import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  FolderKanban, 
  FileText, 
  Award, 
  Image, 
  Settings, 
  Upload,
  Edit,
  Trash2,
  Clock,
  CalendarDays,
  Filter,
  Download
} from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'project',
    action: 'published',
    title: 'E-Commerce Mobile App',
    description: 'Published new project to portfolio',
    timestamp: '2 hours ago',
    date: 'Jan 20, 2024',
  },
  {
    id: 2,
    type: 'achievement',
    action: 'earned',
    title: 'First 10 Projects',
    description: 'Earned achievement badge',
    timestamp: '1 day ago',
    date: 'Jan 19, 2024',
  },
  {
    id: 3,
    type: 'article',
    action: 'updated',
    title: 'Getting Started with Figma',
    description: 'Updated article content',
    timestamp: '2 days ago',
    date: 'Jan 18, 2024',
  },
  {
    id: 4,
    type: 'media',
    action: 'uploaded',
    title: '5 images to gallery',
    description: 'Added new media files to "Abstract" collection',
    timestamp: '3 days ago',
    date: 'Jan 17, 2024',
  },
  {
    id: 5,
    type: 'project',
    action: 'edited',
    title: 'Portfolio Website Redesign',
    description: 'Updated project details and cover image',
    timestamp: '4 days ago',
    date: 'Jan 16, 2024',
  },
  {
    id: 6,
    type: 'settings',
    action: 'updated',
    title: 'Profile Settings',
    description: 'Updated bio and social links',
    timestamp: '5 days ago',
    date: 'Jan 15, 2024',
  },
  {
    id: 7,
    type: 'article',
    action: 'published',
    title: 'UI/UX Design Trends in 2024',
    description: 'Published new article',
    timestamp: '6 days ago',
    date: 'Jan 14, 2024',
  },
  {
    id: 8,
    type: 'project',
    action: 'deleted',
    title: 'Old Project Draft',
    description: 'Moved to trash',
    timestamp: '1 week ago',
    date: 'Jan 13, 2024',
  },
];

// Helper to determine styles based on type
const getTypeStyles = (type: string) => {
  switch (type) {
    case 'project':
      return { icon: FolderKanban, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' };
    case 'article':
      return { icon: FileText, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100' };
    case 'achievement':
      return { icon: Award, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100' };
    case 'media':
      return { icon: Image, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100' };
    case 'settings':
      return { icon: Settings, color: 'text-slate-600', bg: 'bg-slate-50', border: 'border-slate-100' };
    default:
      return { icon: FolderKanban, color: 'text-slate-600', bg: 'bg-slate-50', border: 'border-slate-100' };
  }
};

const getActionBadge = (action: string) => {
  const styles: Record<string, string> = {
    published: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
    updated: 'bg-blue-50 text-blue-700 ring-blue-600/20',
    edited: 'bg-indigo-50 text-indigo-700 ring-indigo-600/20',
    uploaded: 'bg-cyan-50 text-cyan-700 ring-cyan-600/20',
    earned: 'bg-amber-50 text-amber-700 ring-amber-600/20',
    deleted: 'bg-red-50 text-red-700 ring-red-600/20',
  };
  
  return styles[action] || 'bg-slate-50 text-slate-700 ring-slate-600/20';
};

export function Activities() {
  return (
    <div className="min-h-screen bg-slate-50/50 font-sans p-6 md:p-8">
      <div className="space-y-8 max-w-5xl mx-auto">
        
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Activity Log
            </h1>
            <p className="text-slate-500 mt-1">Track changes and updates across your portfolio.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="bg-white hover:bg-slate-50 text-slate-700 border-slate-200">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="bg-white hover:bg-slate-50 text-slate-700 border-slate-200">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Activity Statistics Cards */}
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { label: 'Project Updates', count: 24, icon: FolderKanban, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Article Edits', count: 12, icon: FileText, color: 'text-purple-600', bg: 'bg-purple-50' },
            { label: 'Media Uploads', count: 48, icon: Image, color: 'text-emerald-600', bg: 'bg-emerald-50' },
            { label: 'Achievements', count: 6, icon: Award, color: 'text-amber-600', bg: 'bg-amber-50' },
          ].map((stat, idx) => (
            <Card key={idx} className="border-0 shadow-sm ring-1 ring-slate-200 bg-white">
              <CardContent className="p-4 flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${stat.bg}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">{stat.count}</div>
                  <div className="text-xs font-medium text-slate-500">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline Section */}
        <Card className="border-0 shadow-sm ring-1 ring-slate-200 bg-white overflow-hidden">
          <CardHeader className="border-b border-slate-100 bg-slate-50/30 py-4">
            <CardTitle className="text-sm font-semibold text-slate-900 uppercase tracking-wider flex items-center">
              <Clock className="w-4 h-4 mr-2 text-slate-400" />
              Timeline History
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 md:left-8 top-2 bottom-2 w-px bg-slate-200" />
              
              <div className="space-y-8">
                {activities.map((activity) => {
                  const style = getTypeStyles(activity.type);
                  const badgeClass = getActionBadge(activity.action);
                  
                  return (
                    <div key={activity.id} className="relative flex items-start group">
                      {/* Timeline Dot/Icon */}
                      <div className={`relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl border-4 border-white ${style.bg} flex items-center justify-center shadow-sm`}>
                        <style.icon className={`w-5 h-5 md:w-6 md:h-6 ${style.color}`} />
                      </div>
                      
                      {/* Content Card */}
                      <div className="ml-4 md:ml-6 flex-1 min-w-0">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bold text-slate-900 text-sm md:text-base hover:text-blue-600 transition-colors cursor-pointer">
                                {activity.title}
                            </span>
                            <Badge className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide border-0 ring-1 ring-inset ${badgeClass}`}>
                              {activity.action}
                            </Badge>
                          </div>
                          <div className="flex items-center text-xs text-slate-400 whitespace-nowrap">
                            <CalendarDays className="w-3 h-3 mr-1" />
                            {activity.date}
                          </div>
                        </div>
                        
                        <p className="text-sm text-slate-500 leading-relaxed mb-2">
                            {activity.description}
                        </p>
                        
                        <div className="flex items-center">
                            <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded-md">
                                {activity.timestamp}
                            </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Load More */}
            <div className="mt-12 text-center border-t border-slate-100 pt-6">
                <Button variant="ghost" className="text-sm text-slate-500 hover:text-slate-900">
                    Load Older Activities
                </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}