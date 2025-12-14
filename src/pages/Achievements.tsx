import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { 
  Award, 
  Trophy, 
  Star, 
  Target, 
  Zap, 
  Crown, 
  Medal, 
  Upload, 
  CheckCircle2, 
  Plus, 
  Lock,
  Share2,
  Download,
  CalendarDays
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const achievements = [
  {
    id: 1,
    title: 'First Project',
    description: 'Published your first project to the community.',
    icon: Award,
    color: 'text-blue-600 bg-blue-50',
    earned: true,
    date: 'Dec 15, 2023',
  },
  {
    id: 2,
    title: '10 Projects Milestone',
    description: 'Reached 10 published projects in your portfolio.',
    icon: Trophy,
    color: 'text-purple-600 bg-purple-50',
    earned: true,
    date: 'Jan 10, 2024',
  },
  {
    id: 3,
    title: 'Rising Star',
    description: 'Received 100 unique profile views.',
    icon: Star,
    color: 'text-amber-500 bg-amber-50',
    earned: true,
    date: 'Jan 15, 2024',
  },
  {
    id: 4,
    title: 'Thought Leader',
    description: 'Published 5 articles on the blog.',
    icon: Target,
    color: 'text-emerald-600 bg-emerald-50',
    earned: true,
    date: 'Jan 18, 2024',
  },
  {
    id: 5,
    title: 'Speed Demon',
    description: 'Complete and publish a project in under 24 hours.',
    icon: Zap,
    color: 'text-orange-500 bg-orange-50',
    earned: false,
    progress: 0,
  },
  {
    id: 6,
    title: 'Portfolio Pro',
    description: 'Reach 25 published projects.',
    icon: Crown,
    color: 'text-indigo-600 bg-indigo-50',
    earned: false,
    progress: 48,
  },
  {
    id: 7,
    title: 'Community Favorite',
    description: 'Get 50 likes across all your projects.',
    icon: Medal,
    color: 'text-pink-600 bg-pink-50',
    earned: false,
    progress: 64,
  },
  {
    id: 8,
    title: 'Media Master',
    description: 'Upload 100 media files to the gallery.',
    icon: Upload,
    color: 'text-cyan-600 bg-cyan-50',
    earned: false,
    progress: 32,
  },
];

const certificates = [
  {
    id: 1,
    title: 'Google UX Design Professional Certificate',
    issuer: 'Coursera',
    date: 'Dec 2023',
    image: 'https://images.unsplash.com/photo-1699040309386-11c615ed64d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjU0NDExNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    verified: true,
  },
  {
    id: 2,
    title: 'Advanced React & Redux',
    issuer: 'Udemy',
    date: 'Nov 2023',
    image: 'https://images.unsplash.com/photo-1710799885122-428e63eff691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwb3J0Zm9saW98ZW58MXx8fHwxNzY1NDUxOTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    verified: true,
  },
];

export function Achievements() {
  const [selectedCertificate, setSelectedCertificate] = useState<typeof certificates[0] | null>(null);

  const earnedCount = achievements.filter(a => a.earned).length;
  const totalCount = achievements.length;
  const progressPercentage = Math.round((earnedCount / totalCount) * 100);

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans p-6 md:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Achievements
            </h1>
            <p className="text-slate-500 mt-1">Track your growth and celebrate your milestones.</p>
          </div>
          <Button size="lg" className="rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20">
            <Plus className="w-4 h-4 mr-2" />
            Add Certificate
          </Button>
        </div>

        {/* Progress Overview Card */}
        <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm p-8 md:p-10">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50" />
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                {/* Circular Progress (Visual) */}
                <div className="relative w-32 h-32 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                        <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-100" />
                        <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="12" fill="transparent" 
                            strokeDasharray={351.86} 
                            strokeDashoffset={351.86 - (351.86 * progressPercentage) / 100} 
                            className="text-blue-600 transition-all duration-1000 ease-out" 
                            strokeLinecap="round"
                        />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-3xl font-bold text-slate-900">{earnedCount}</span>
                        <span className="text-xs text-slate-500 uppercase font-semibold">of {totalCount}</span>
                    </div>
                </div>

                <div className="text-center md:text-left flex-1">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Level 4 Scholar</h2>
                    <p className="text-slate-500 max-w-lg mb-6">
                        You're doing amazing! You've completed {progressPercentage}% of all available achievements. 
                        Complete 2 more to unlock the "Master Creator" badge.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                        <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200 border-0 px-3 py-1">
                            <Trophy className="w-3 h-3 mr-1.5" /> Top 10%
                        </Badge>
                        <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-200 border-0 px-3 py-1">
                            Current Streak: 5 Days
                        </Badge>
                    </div>
                </div>
            </div>
        </div>

        {/* Achievements Grid */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
            Badges <span className="ml-2 text-sm font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">{totalCount}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <Card 
                  key={achievement.id}
                  className={`group border-0 ring-1 ring-slate-200 shadow-sm transition-all duration-300 rounded-2xl ${
                    achievement.earned ? 'bg-white hover:shadow-md hover:ring-blue-200' : 'bg-slate-50/50 opacity-80 hover:opacity-100'
                  }`}
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${achievement.earned ? achievement.color : 'bg-slate-200 text-slate-400'}`}>
                            <Icon className="w-6 h-6" />
                        </div>
                        {achievement.earned ? (
                            <div className="bg-green-100 text-green-700 rounded-full p-1">
                                <CheckCircle2 className="w-4 h-4" />
                            </div>
                        ) : (
                            <Lock className="w-4 h-4 text-slate-300" />
                        )}
                    </div>
                    
                    <div className="mb-4 flex-1">
                        <h3 className={`font-bold mb-1 ${achievement.earned ? 'text-slate-900' : 'text-slate-500'}`}>
                            {achievement.title}
                        </h3>
                        <p className="text-xs text-slate-500 leading-relaxed">
                            {achievement.description}
                        </p>
                    </div>
                    
                    <div className="pt-4 border-t border-slate-100/50 mt-auto">
                        {achievement.earned ? (
                            <span className="text-xs font-medium text-slate-400 flex items-center">
                                <CalendarDays className="w-3 h-3 mr-1.5" />
                                {achievement.date}
                            </span>
                        ) : (
                            <div className="space-y-1.5">
                                <div className="flex justify-between text-[10px] font-semibold text-slate-400 uppercase">
                                    <span>Progress</span>
                                    <span>{achievement.progress}%</span>
                                </div>
                                <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 rounded-full transition-all duration-500" style={{ width: `${achievement.progress}%` }} />
                                </div>
                            </div>
                        )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Certificates Section */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-6">Certificates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate) => (
              <Card 
                key={certificate.id}
                className="group border-0 ring-1 ring-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:ring-blue-100 transition-all duration-300 cursor-pointer rounded-2xl overflow-hidden"
                onClick={() => setSelectedCertificate(certificate)}
              >
                {/* Certificate Preview */}
                <div className="aspect-[1.4] bg-slate-100 relative p-6 flex flex-col items-center justify-center text-center overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
                    
                    <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mb-4 z-10 group-hover:scale-110 transition-transform">
                        <Trophy className="w-8 h-8 text-amber-500" />
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg z-10 max-w-full">
                        <h3 className="font-serif text-slate-900 font-bold text-lg leading-tight truncate">{certificate.title}</h3>
                        <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">{certificate.issuer}</p>
                    </div>

                    {/* Verified Badge */}
                    {certificate.verified && (
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-emerald-600 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide shadow-sm border border-emerald-100 flex items-center">
                            <CheckCircle2 className="w-3 h-3 mr-1" /> Verified
                        </div>
                    )}
                </div>

                <CardContent className="p-5 flex items-center justify-between bg-white">
                    <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Issued Date</p>
                        <p className="text-sm font-bold text-slate-900">{certificate.date}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
                        View Details
                    </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certificate Preview Modal */}
        <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
          <DialogContent className="max-w-2xl p-0 overflow-hidden bg-white rounded-2xl border-0 shadow-2xl">
            <div className="relative aspect-[1.4] bg-slate-50 flex items-center justify-center p-8 md:p-12 border-b border-slate-100">
                {/* Decorative border */}
                <div className="absolute inset-4 md:inset-6 border-4 border-double border-slate-200 pointer-events-none" />
                
                <div className="text-center relative z-10 max-w-lg">
                    <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-white shadow-lg">
                        <Trophy className="w-10 h-10 text-amber-500" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">{selectedCertificate?.title}</h2>
                    <p className="text-slate-500 mb-6">Certified by <span className="font-semibold text-slate-900">{selectedCertificate?.issuer}</span></p>
                    
                    {selectedCertificate?.verified && (
                        <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-0 px-4 py-1.5 text-sm">
                            <CheckCircle2 className="w-4 h-4 mr-1.5" /> Officially Verified
                        </Badge>
                    )}
                </div>
            </div>
            
            <div className="p-6 bg-white flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="text-sm text-slate-500">
                    Issued on <span className="font-medium text-slate-900">{selectedCertificate?.date}</span>
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                    <Button variant="outline" className="flex-1 sm:flex-none border-slate-200">
                        <Download className="w-4 h-4 mr-2" /> PDF
                    </Button>
                    <Button className="flex-1 sm:flex-none bg-slate-900 text-white hover:bg-slate-800">
                        <Share2 className="w-4 h-4 mr-2" /> Share
                    </Button>
                </div>
            </div>
          </DialogContent>
        </Dialog>

      </div>
    </div>
  );
}