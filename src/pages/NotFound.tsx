import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Home, ArrowLeft, FileQuestion, SearchX } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50/50 flex items-center justify-center p-6 relative overflow-hidden font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Background Decor (Abstract Blobs) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl max-h-3xl pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="relative w-full max-w-lg text-center">
        
        {/* Main Content Card */}
        <div className="bg-white/60 backdrop-blur-xl border border-white/50 ring-1 ring-slate-200/50 rounded-3xl p-10 shadow-xl shadow-slate-200/40">
            
            {/* Icon Visual */}
            <div className="mx-auto w-24 h-24 bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-full flex items-center justify-center mb-6 ring-1 ring-blue-100 shadow-inner">
                <SearchX className="w-10 h-10 text-blue-500" />
            </div>

            <div className="space-y-2 mb-8">
                {/* Large 404 Text */}
                <h1 className="text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 select-none">
                    404
                </h1>
                
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                    Page not found
                </h2>
                
                <p className="text-slate-500 text-base leading-relaxed max-w-sm mx-auto">
                    Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
                </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={() => window.history.back()}
                    className="w-full sm:w-auto rounded-full border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-white hover:border-slate-300 transition-all"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Go Back
                </Button>
                
                <Button 
                    size="lg" 
                    asChild 
                    className="w-full sm:w-auto rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-lg shadow-slate-900/20 transition-all hover:scale-105"
                >
                    <Link to="/">
                        <Home className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>
                </Button>
            </div>
        </div>

        {/* Footer Link */}
        <div className="mt-8 text-sm text-slate-400">
            Need help? <Link to="/contact" className="text-blue-600 hover:underline font-medium">Contact Support</Link>
        </div>
      </div>
    </div>
  );
}