import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { 
  Plus, 
  Image as ImageIcon, 
  Video, 
  FileText, 
  Search, 
  Download, 
  Trash2, 
  Share2, 
  MoreHorizontal, 
  Expand,
  HardDrive
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const mediaFiles = [
  {
    id: 1,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1699040309386-11c615ed64d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjU0NDExNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'UI Design Mockup v2',
    description: 'Final mockup for the landing page hero section.',
    size: '2.4 MB',
    dimensions: '1920x1080',
    date: 'Jan 20, 2024',
    height: 300,
  },
  {
    id: 2,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1710799885122-428e63eff691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwb3J0Zm9saW98ZW58MXx8fHwxNzY1NDUxOTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Web Design Assets',
    description: 'Collection of icons and shapes for the project.',
    size: '1.8 MB',
    dimensions: '1080x1080',
    date: 'Jan 18, 2024',
    height: 400,
  },
  {
    id: 3,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBwb3J0Zm9saW98ZW58MXx8fHwxNzY1NDE2MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Mobile App Screenshots',
    description: 'User flow screenshots for the login process.',
    size: '3.2 MB',
    dimensions: '390x844',
    date: 'Jan 15, 2024',
    height: 350,
  },
  {
    id: 4,
    type: 'video',
    url: 'https://images.unsplash.com/photo-1693159682660-c125e71844d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzY1NDMwNjkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Design Process Video',
    description: 'Timelapse of the logo design process.',
    size: '15.6 MB',
    dimensions: '1920x1080',
    date: 'Jan 12, 2024',
    height: 250,
  },
  {
    id: 5,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1699040309386-11c615ed64d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjU0NDExNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Dashboard Dark Mode',
    description: 'Alternative color scheme for admin panel.',
    size: '2.1 MB',
    dimensions: '1440x900',
    date: 'Jan 10, 2024',
    height: 320,
  },
  {
    id: 6,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1604177091072-b7b677a077f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwd29ya2luZyUyMGxhcHRvcHxlbnwxfHx8fDE3NjUzNjM2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Workspace Setup',
    description: 'Photo for the "About Me" section.',
    size: '1.9 MB',
    dimensions: '4000x3000',
    date: 'Jan 8, 2024',
    height: 380,
  },
];

export function Gallery() {
  const [filter, setFilter] = useState<'all' | 'image' | 'video' | 'document'>('all');
  const [selectedMedia, setSelectedMedia] = useState<typeof mediaFiles[0] | null>(null);

  const filteredMedia = filter === 'all' 
    ? mediaFiles 
    : mediaFiles.filter(item => item.type === filter);

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans p-6 md:p-8">
      <div className="max-w-[1600px] mx-auto space-y-8">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Media Gallery
            </h1>
            <p className="text-slate-500 mt-1 text-lg">Manage your creative assets and uploads.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center px-4 py-2 bg-white rounded-full ring-1 ring-slate-200 shadow-sm">
                <HardDrive className="w-4 h-4 text-slate-400 mr-2" />
                <div className="flex flex-col">
                    <span className="text-xs font-semibold text-slate-700">Storage Used</span>
                    <div className="w-32 h-1.5 bg-slate-100 rounded-full mt-1 overflow-hidden">
                        <div className="h-full bg-blue-600 w-[65%]" />
                    </div>
                </div>
                <span className="text-xs text-slate-500 ml-3">6.5GB / 10GB</span>
            </div>
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white rounded-full shadow-lg shadow-slate-900/20">
              <Plus className="w-4 h-4 mr-2" />
              Upload Media
            </Button>
          </div>
        </div>

        {/* Toolbar: Search & Filters */}
        {/* NOTE: Class 'sticky top-20 z-30' telah dihapus agar tidak floating */}
        <div className="flex flex-col lg:flex-row gap-4 items-center bg-white p-2 rounded-2xl ring-1 ring-slate-200 shadow-sm">
           {/* Search */}
           <div className="relative w-full lg:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              type="text"
              placeholder="Search assets..."
              className="pl-10 border-0 bg-slate-50 focus-visible:ring-0 placeholder:text-slate-400 rounded-xl"
            />
           </div>

           <div className="w-px h-8 bg-slate-200 hidden lg:block" />

           {/* Filter Tabs */}
           <div className="flex items-center gap-1 w-full overflow-x-auto no-scrollbar">
              {[
                  { id: 'all', label: 'All Files', icon: null },
                  { id: 'image', label: 'Images', icon: ImageIcon },
                  { id: 'video', label: 'Videos', icon: Video },
                  { id: 'document', label: 'Documents', icon: FileText },
              ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setFilter(tab.id as any)}
                    className={`flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                        filter === tab.id 
                            ? 'bg-slate-900 text-white shadow-md' 
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {tab.icon && <tab.icon className="w-4 h-4 mr-2" />}
                    {tab.label}
                  </button>
              ))}
           </div>
        </div>

        {/* Masonry Gallery */}
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1200: 4}}>
            <Masonry gutter="24px">
                {filteredMedia.map((item) => (
                <div 
                    key={item.id}
                    className="group relative bg-white rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 hover:ring-blue-200 transition-all duration-300 cursor-zoom-in break-inside-avoid"
                    onClick={() => setSelectedMedia(item)}
                >
                    {/* Media Thumbnail */}
                    <div className="relative bg-slate-100 overflow-hidden">
                        <ImageWithFallback
                            src={item.url}
                            alt={item.title}
                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                            style={{ minHeight: '200px' }} // Fallback height
                        />
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                            <div className="flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="text-white">
                                    <p className="font-semibold text-sm truncate">{item.title}</p>
                                    <p className="text-xs text-slate-300">{item.size}</p>
                                </div>
                                <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-slate-900 backdrop-blur-md border-0">
                                    <Expand className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Type Badge */}
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Badge className="bg-black/50 hover:bg-black/60 backdrop-blur-md border-0 text-white">
                                {item.type === 'image' && <ImageIcon className="w-3 h-3 mr-1" />}
                                {item.type === 'video' && <Video className="w-3 h-3 mr-1" />}
                                <span className="capitalize">{item.type}</span>
                            </Badge>
                        </div>
                    </div>
                </div>
                ))}
            </Masonry>
        </ResponsiveMasonry>

        {/* Media Details Modal (Split View) */}
        <Dialog open={!!selectedMedia} onOpenChange={() => setSelectedMedia(null)}>
            <DialogContent className="max-w-5xl p-0 overflow-hidden bg-white rounded-2xl gap-0 border-0 shadow-2xl">
                {selectedMedia && (
                <div className="flex flex-col lg:flex-row h-[85vh] lg:h-[600px]">
                    
                    {/* Left: Media Viewer */}
                    <div className="flex-1 bg-slate-900 flex items-center justify-center p-8 relative overflow-hidden group">
                        {/* Checkerboard pattern for transparency */}
                        <div className="absolute inset-0 opacity-[0.03]" 
                             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                        </div>
                        
                        <ImageWithFallback
                            src={selectedMedia.url}
                            alt={selectedMedia.title}
                            className="max-w-full max-h-full object-contain shadow-2xl rounded-lg relative z-10"
                        />
                    </div>

                    {/* Right: Sidebar Details */}
                    <div className="w-full lg:w-96 bg-white border-l border-slate-100 flex flex-col">
                        <DialogHeader className="p-6 border-b border-slate-100">
                            <DialogTitle className="text-xl font-bold text-slate-900 pr-8 leading-snug">
                                {selectedMedia.title}
                            </DialogTitle>
                            <p className="text-sm text-slate-500 mt-1">
                                {selectedMedia.description}
                            </p>
                        </DialogHeader>

                        <div className="p-6 flex-1 overflow-y-auto">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Metadata</h4>
                            <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                                <div>
                                    <p className="text-xs text-slate-500">File Type</p>
                                    <p className="text-sm font-medium text-slate-900 capitalize">{selectedMedia.type}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500">File Size</p>
                                    <p className="text-sm font-medium text-slate-900">{selectedMedia.size}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500">Dimensions</p>
                                    <p className="text-sm font-medium text-slate-900">{selectedMedia.dimensions}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500">Upload Date</p>
                                    <p className="text-sm font-medium text-slate-900">{selectedMedia.date}</p>
                                </div>
                            </div>

                            <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <h4 className="text-xs font-bold text-slate-900 mb-2">Public Link</h4>
                                <div className="flex items-center gap-2">
                                    <Input 
                                        readOnly 
                                        value="cdn.portfolio.com/a8s7d..." 
                                        className="h-8 text-xs bg-white border-slate-200"
                                    />
                                    <Button size="sm" variant="outline" className="h-8 w-8 p-0 shrink-0 bg-white">
                                        <Share2 className="w-3.5 h-3.5" />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex gap-3">
                            <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20">
                                <Download className="w-4 h-4 mr-2" />
                                Download
                            </Button>
                            <Button variant="outline" size="icon" className="border-slate-200 bg-white hover:text-red-600 hover:bg-red-50 hover:border-red-100">
                                <Trash2 className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="icon" className="border-slate-200 bg-white">
                                <MoreHorizontal className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
                )}
            </DialogContent>
        </Dialog>

      </div>
    </div>
  );
}