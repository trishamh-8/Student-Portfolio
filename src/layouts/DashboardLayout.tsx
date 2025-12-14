import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import { 
  LayoutDashboard, 
  FolderKanban, 
  FileText, 
  Activity, 
  Award, 
  Image, 
  Settings as SettingsIcon,
  ChevronLeft,
  Bell,
  Search,
  User,
  Building2,
  ShieldCheck
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { WorkspaceSwitcher } from '../components/WorkspaceSwitcher';
import { AIAssistantButton } from '../components/AIAssistant';

const navigation = [
  { name: 'Dashboard', href: '/app', icon: LayoutDashboard },
  { name: 'Projects', href: '/app/projects', icon: FolderKanban },
  { name: 'Articles', href: '/app/articles', icon: FileText },
  { name: 'Activities', href: '/app/activities', icon: Activity },
  { name: 'Achievements', href: '/app/achievements', icon: Award },
  { name: 'Gallery', href: '/app/gallery', icon: Image },
  { name: 'Settings', href: '/app/settings', icon: SettingsIcon },
];

export function DashboardLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === '/app') {
      return location.pathname === '/app';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="flex h-screen bg-neutral-100">
      {/* Sidebar */}
      <aside 
        className={`transition-sidebar bg-[var(--color-primary-dark)] text-white flex flex-col ${
          sidebarCollapsed ? 'w-20' : 'w-64'
        }`}
        style={{ backgroundColor: 'var(--color-primary-dark)' }}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-white/10">
          {!sidebarCollapsed && (
            <Link to="/app" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
                <span className="font-bold">SP</span>
              </div>
              <span className="font-semibold">Student Portfolio</span>
            </Link>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="text-white hover:bg-white/10"
          >
            <ChevronLeft className={`w-5 h-5 transition-transform ${sidebarCollapsed ? 'rotate-180' : ''}`} />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`
                  flex items-center px-3 py-2.5 rounded-lg transition-all
                  ${active 
                    ? 'bg-[var(--color-primary)] text-white' 
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }
                  ${sidebarCollapsed ? 'justify-center' : 'space-x-3'}
                `}
                title={sidebarCollapsed ? item.name : undefined}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {!sidebarCollapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Workspace Switcher & Settings at bottom */}
        {!sidebarCollapsed && (
          <div className="px-3 py-4 border-t border-white/10 space-y-2">
            <WorkspaceSwitcher />
            <Link
              to="/app/workspace"
              className="flex items-center px-3 py-2 rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-all text-sm"
            >
              <Building2 className="w-4 h-4 mr-2" />
              Workspace Settings
            </Link>
            <Link
              to="/app/account"
              className="flex items-center px-3 py-2 rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-all text-sm"
            >
              <ShieldCheck className="w-4 h-4 mr-2" />
              Account & Privacy
            </Link>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <div className="flex items-center flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Search projects, articles..."
                className="pl-10 bg-gray-50 border-0"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=student" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="text-left hidden md:block">
                    <div className="text-sm font-medium">John Doe</div>
                    <div className="text-xs text-gray-500">Student</div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/app/settings">
                    <User className="mr-2 w-4 h-4" />
                    Profile Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/app/workspace">
                    <Building2 className="mr-2 w-4 h-4" />
                    Workspace Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/app/account">
                    <ShieldCheck className="mr-2 w-4 h-4" />
                    Account & Privacy
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/portfolio/johndoe">
                    View Public Portfolio
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/">
                    Logout
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 animate-fade-in">
          <Outlet />
        </main>
      </div>

      {/* AI Assistant Floating Button */}
      <AIAssistantButton />
    </div>
  );
}