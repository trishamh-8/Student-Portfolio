import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Badge } from '../components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '../components/ui/dialog';
import {
  Building2,
  Users,
  Plus,
  Trash2,
  Mail,
  Crown,
  Shield,
  Eye,
  Settings as SettingsIcon,
  Copy,
  Check,
} from 'lucide-react';
import { toast } from 'sonner';

interface WorkspaceMember {
  id: string;
  name: string;
  email: string;
  role: 'owner' | 'admin' | 'member' | 'viewer';
  avatar?: string;
  joinedAt: string;
}

const members: WorkspaceMember[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'owner',
    joinedAt: 'Dec 2023',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'admin',
    joinedAt: 'Jan 2024',
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike.j@example.com',
    role: 'member',
    joinedAt: 'Jan 2024',
  },
];

export function WorkspaceSettings() {
  const [isInviteDialogOpen, setIsInviteDialogOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState<string>('member');
  const [copied, setCopied] = useState(false);

  const handleInviteMember = () => {
    if (inviteEmail) {
      toast.success(`Invitation sent to ${inviteEmail}`);
      setIsInviteDialogOpen(false);
      setInviteEmail('');
      setInviteRole('member');
    }
  };

  const handleCopyInviteLink = () => {
    navigator.clipboard.writeText('https://studentportfolio.com/invite/abc123');
    setCopied(true);
    toast.success('Invite link copied!');
    setTimeout(() => setCopied(false), 2000);
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'owner':
        return <Crown className="w-4 h-4 text-yellow-600" />;
      case 'admin':
        return <Shield className="w-4 h-4 text-blue-600" />;
      case 'member':
        return <Users className="w-4 h-4 text-green-600" />;
      case 'viewer':
        return <Eye className="w-4 h-4 text-gray-600" />;
      default:
        return null;
    }
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'owner':
        return 'bg-yellow-100 text-yellow-700';
      case 'admin':
        return 'bg-blue-100 text-blue-700';
      case 'member':
        return 'bg-green-100 text-green-700';
      case 'viewer':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans p-6 md:p-8 pb-24">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Workspace Settings</h1>
            <p className="text-slate-500 mt-1">Manage your workspace and team members</p>
          </div>
        </div>

        {/* Workspace Info */}
        <Card className="border-0 ring-1 ring-slate-200 shadow-sm bg-white">
          <CardHeader className="pb-4 border-b border-slate-50">
            <CardTitle className="text-lg font-bold text-slate-900 flex items-center">
              <Building2 className="w-5 h-5 mr-2" />
              Workspace Information
            </CardTitle>
            <CardDescription>Basic information about your workspace</CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="workspace-name">Workspace Name</Label>
                <Input id="workspace-name" defaultValue="Design Team" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="workspace-url">Workspace URL</Label>
                <Input id="workspace-url" defaultValue="design-team" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="workspace-description">Description</Label>
              <Input
                id="workspace-description"
                placeholder="Brief description of your workspace"
                defaultValue="Our creative design team's portfolio workspace"
              />
            </div>

            <div className="flex justify-end pt-4">
              <Button style={{ backgroundColor: 'var(--color-primary)' }}>
                <SettingsIcon className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Team Members */}
        <Card className="border-0 ring-1 ring-slate-200 shadow-sm bg-white">
          <CardHeader className="pb-4 border-b border-slate-50">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg font-bold text-slate-900 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Team Members
                </CardTitle>
                <CardDescription>Manage who has access to this workspace</CardDescription>
              </div>
              <Button
                onClick={() => setIsInviteDialogOpen(true)}
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                <Plus className="w-4 h-4 mr-2" />
                Invite Member
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {members.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback className="bg-slate-100 text-slate-600">
                        {member.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center space-x-2">
                        <p className="font-medium text-slate-900">{member.name}</p>
                        <Badge className={`text-xs ${getRoleBadgeColor(member.role)}`}>
                          <span className="mr-1">{getRoleIcon(member.role)}</span>
                          {member.role}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-500">{member.email}</p>
                      <p className="text-xs text-slate-400">Joined {member.joinedAt}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {member.role !== 'owner' && (
                      <>
                        <Select defaultValue={member.role}>
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="admin">Admin</SelectItem>
                            <SelectItem value="member">Member</SelectItem>
                            <SelectItem value="viewer">Viewer</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="ghost" size="icon" className="text-red-600 hover:bg-red-50">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Invite Link */}
            <div className="mt-6 pt-6 border-t border-slate-200">
              <Label className="text-sm font-medium mb-2 block">Invite Link</Label>
              <div className="flex items-center space-x-2">
                <Input
                  value="https://studentportfolio.com/invite/abc123"
                  readOnly
                  className="flex-1 bg-slate-50"
                />
                <Button variant="outline" onClick={handleCopyInviteLink}>
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Anyone with this link can join as a member
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Role Permissions */}
        <Card className="border-0 ring-1 ring-slate-200 shadow-sm bg-white">
          <CardHeader className="pb-4 border-b border-slate-50">
            <CardTitle className="text-lg font-bold text-slate-900 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Role Permissions
            </CardTitle>
            <CardDescription>Overview of what each role can do</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {[
                {
                  role: 'Owner',
                  icon: Crown,
                  color: 'text-yellow-600',
                  permissions: [
                    'Full workspace access',
                    'Manage billing and subscription',
                    'Delete workspace',
                    'Manage all members',
                  ],
                },
                {
                  role: 'Admin',
                  icon: Shield,
                  color: 'text-blue-600',
                  permissions: [
                    'Manage workspace settings',
                    'Invite and remove members',
                    'Manage all projects',
                    'View analytics',
                  ],
                },
                {
                  role: 'Member',
                  icon: Users,
                  color: 'text-green-600',
                  permissions: [
                    'Create and edit own projects',
                    'Comment on projects',
                    'View team projects',
                    'Upload media',
                  ],
                },
                {
                  role: 'Viewer',
                  icon: Eye,
                  color: 'text-gray-600',
                  permissions: [
                    'View projects only',
                    'Comment on projects',
                    'No editing permissions',
                  ],
                },
              ].map((roleInfo) => (
                <div key={roleInfo.role} className="p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <roleInfo.icon className={`w-5 h-5 ${roleInfo.color}`} />
                    <h3 className="font-semibold text-slate-900">{roleInfo.role}</h3>
                  </div>
                  <ul className="space-y-1">
                    {roleInfo.permissions.map((permission) => (
                      <li key={permission} className="text-sm text-slate-600 flex items-center">
                        <Check className="w-4 h-4 mr-2 text-green-600" />
                        {permission}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-0 ring-1 ring-red-200 shadow-sm bg-white">
          <CardHeader className="pb-4 border-b border-red-50">
            <CardTitle className="text-lg font-bold text-red-900">Danger Zone</CardTitle>
            <CardDescription>Irreversible actions for this workspace</CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg bg-red-50/50">
              <div>
                <h3 className="font-medium text-red-900">Delete Workspace</h3>
                <p className="text-sm text-red-600">
                  Permanently delete this workspace and all its data
                </p>
              </div>
              <Button variant="destructive">Delete Workspace</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Invite Member Dialog */}
      <Dialog open={isInviteDialogOpen} onOpenChange={setIsInviteDialogOpen}>
        <DialogContent className="animate-scale-in">
          <DialogHeader>
            <DialogTitle>Invite Team Member</DialogTitle>
            <DialogDescription>
              Send an invitation to join this workspace
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="invite-email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  id="invite-email"
                  type="email"
                  placeholder="colleague@example.com"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="invite-role">Role</Label>
              <Select value={inviteRole} onValueChange={setInviteRole}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="member">Member</SelectItem>
                  <SelectItem value="viewer">Viewer</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsInviteDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleInviteMember} style={{ backgroundColor: 'var(--color-primary)' }}>
              <Mail className="w-4 h-4 mr-2" />
              Send Invitation
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
