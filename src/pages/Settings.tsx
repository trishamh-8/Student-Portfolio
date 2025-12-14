import { useNavigate } from 'react-router'; // Import useNavigate
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Badge } from '../components/ui/badge';
import { 
  Mail, 
  Link as LinkIcon, 
  Github, 
  Linkedin, 
  Twitter, 
  Globe, 
  Save, 
  X,
  Upload,
  User,
  Briefcase,
  MapPin,
  Plus,
  LogOut,
  Sparkles
} from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';
import { AIAssistant } from '../components/AIAssistant';

export function Settings() {
  const navigate = useNavigate(); // Hook navigasi
  const [skills, setSkills] = useState(['UI Design', 'Figma', 'React', 'TypeScript']);
  const [newSkill, setNewSkill] = useState('');
  const [isAISkillOpen, setIsAISkillOpen] = useState(false);

  const handleSave = () => {
    toast.success('Settings saved successfully!');
  };

  const handleLogout = () => {
    // Di sini Anda bisa menambahkan logika hapus token/session
    toast.success('Logged out successfully');
    navigate('/'); // Redirect ke Landing Page
  };

  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill));
  };

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans p-6 md:p-8 pb-24">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Settings</h1>
            <p className="text-slate-500 mt-1">Manage your profile information and account preferences.</p>
          </div>
          <div className="flex gap-3">
             <Button variant="outline" className="bg-white border-slate-200 text-slate-700">Cancel</Button>
             <Button onClick={handleSave} className="bg-slate-900 hover:bg-slate-800 text-white">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
             </Button>
          </div>
        </div>

        {/* 1. Profile Identity Card */}
        <Card className="border-0 ring-1 ring-slate-200 shadow-sm bg-white overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-slate-100" />
            <CardContent className="p-8 pt-0 -mt-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    
                    {/* Profile Picture */}
                    <div className="flex flex-col items-center">
                        <div className="relative group">
                            <Avatar className="w-32 h-32 border-4 border-white shadow-lg cursor-pointer">
                                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=student" />
                                <AvatarFallback className="bg-slate-100 text-slate-400 text-2xl font-bold">JD</AvatarFallback>
                            </Avatar>
                            <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                                <Upload className="w-8 h-8 text-white" />
                            </div>
                        </div>
                        <div className="mt-4 flex gap-2">
                            <Button variant="outline" size="sm" className="h-8 text-xs">Change</Button>
                            <Button variant="ghost" size="sm" className="h-8 text-xs text-red-600 hover:bg-red-50 hover:text-red-700">Remove</Button>
                        </div>
                    </div>

                    {/* Basic Info Inputs */}
                    <div className="flex-1 space-y-6 w-full pt-12">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First Name</Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <Input id="firstName" defaultValue="John" className="pl-10" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName">Last Name</Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <Input id="lastName" defaultValue="Doe" className="pl-10" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <Input id="email" type="email" defaultValue="john.doe@example.com" className="pl-10 bg-slate-50 text-slate-500 border-slate-200" readOnly />
                            </div>
                            <p className="text-xs text-slate-400">Email cannot be changed directly. Contact support.</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>

        {/* 2. Professional Details & Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Col: Details */}
            <div className="lg:col-span-2 space-y-8">
                <Card className="border-0 ring-1 ring-slate-200 shadow-sm bg-white">
                    <CardHeader className="pb-4 border-b border-slate-50">
                        <CardTitle className="text-lg font-bold text-slate-900">About You</CardTitle>
                        <CardDescription>Share your professional background and location.</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="title">Professional Title</Label>
                            <div className="relative">
                                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <Input id="title" defaultValue="UI/UX Designer & Developer" className="pl-10" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="location">Location</Label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <Input id="location" defaultValue="San Francisco, USA" className="pl-10" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="bio">Bio</Label>
                            <Textarea 
                                id="bio" 
                                rows={4} 
                                defaultValue="Passionate designer and developer with a love for creating beautiful and functional user experiences." 
                                className="resize-none"
                            />
                            <p className="text-xs text-slate-400 text-right">0/300 characters</p>
                        </div>
                    </CardContent>
                </Card>

                {/* Skills */}
                <Card className="border-0 ring-1 ring-slate-200 shadow-sm bg-white">
                    <CardHeader className="pb-4 border-b border-slate-50">
                        <CardTitle className="text-lg font-bold text-slate-900">Skills & Expertise</CardTitle>
                        <CardDescription>Add tags to highlight your key skills.</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                        <div className="flex gap-2">
                            <Input 
                                placeholder="Type a skill and press Enter..." 
                                value={newSkill}
                                onChange={(e) => setNewSkill(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                                className="flex-1"
                            />
                            <Button onClick={addSkill} size="icon" variant="outline"><Plus className="w-4 h-4" /></Button>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 pt-2 min-h-[60px] p-4 bg-slate-50 rounded-xl border border-slate-100 border-dashed">
                            {skills.length === 0 && <span className="text-sm text-slate-400">No skills added yet.</span>}
                            {skills.map((skill) => (
                                <Badge key={skill} variant="secondary" className="bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 px-3 py-1.5 text-sm font-medium shadow-sm">
                                    {skill}
                                    <X className="w-3 h-3 ml-2 cursor-pointer hover:text-red-500 transition-colors" onClick={() => removeSkill(skill)} />
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Right Col: Social & Links & Logout */}
            <div className="lg:col-span-1 space-y-8">
                <Card className="border-0 ring-1 ring-slate-200 shadow-sm bg-white">
                    <CardHeader className="pb-4 border-b border-slate-50">
                        <CardTitle className="text-lg font-bold text-slate-900">Social Presence</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                        {[
                            { id: 'website', label: 'Website', icon: Globe, placeholder: 'https://...' },
                            { id: 'github', label: 'GitHub', icon: Github, placeholder: 'github.com/...' },
                            { id: 'linkedin', label: 'LinkedIn', icon: Linkedin, placeholder: 'linkedin.com/in/...' },
                            { id: 'twitter', label: 'Twitter', icon: Twitter, placeholder: 'twitter.com/...' },
                        ].map((social) => (
                            <div key={social.id} className="space-y-1.5">
                                <Label htmlFor={social.id} className="text-xs uppercase text-slate-500 font-semibold tracking-wider">{social.label}</Label>
                                <div className="relative group">
                                    <social.icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-slate-900 transition-colors" />
                                    <Input id={social.id} placeholder={social.placeholder} className="pl-10 h-10" />
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                <Card className="border-0 ring-1 ring-slate-200 shadow-sm bg-slate-900 text-white">
                    <CardContent className="p-6 space-y-4">
                        <div className="space-y-1">
                            <h3 className="font-bold text-lg">Your Portfolio Link</h3>
                            <p className="text-slate-400 text-sm">Share this URL to show off your work.</p>
                        </div>
                        
                        <div className="flex items-center gap-2 p-1 bg-white/10 rounded-lg border border-white/10">
                            <div className="flex-1 px-3 py-1 text-sm text-slate-300 truncate font-mono">
                                studentportfolio.com/johndoe
                            </div>
                            <Button size="sm" variant="ghost" className="h-7 w-7 p-0 text-white hover:bg-white/20 hover:text-white">
                                <LinkIcon className="w-3.5 h-3.5" />
                            </Button>
                        </div>
                        
                        <Button variant="outline" className="w-full border-slate-700 bg-transparent text-white hover:bg-white/10 hover:text-white">
                            View Public Page
                        </Button>
                    </CardContent>
                </Card>

                {/* Account Actions / Logout */}
                <Card className="border-0 ring-1 ring-slate-200 shadow-sm bg-white">
                    <CardContent className="p-6">
                        <h3 className="font-bold text-slate-900 mb-2">Account Actions</h3>
                        <p className="text-sm text-slate-500 mb-4">Sign out of your account on this device.</p>
                        <Button 
                            variant="outline" 
                            onClick={handleLogout} 
                            className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 hover:border-red-300 transition-all"
                        >
                            <LogOut className="w-4 h-4 mr-2" />
                            Log Out
                        </Button>
                    </CardContent>
                </Card>
            </div>

        </div>
      </div>
    </div>
  );
}