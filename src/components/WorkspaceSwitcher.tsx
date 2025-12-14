import { useState } from 'react';
import { Check, ChevronsUpDown, Plus, Building2 } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { toast } from 'sonner';

interface Workspace {
  id: string;
  name: string;
  type: 'personal' | 'team';
  members?: number;
}

const workspaces: Workspace[] = [
  { id: '1', name: 'Personal Portfolio', type: 'personal' },
  { id: '2', name: 'Design Team', type: 'team', members: 5 },
  { id: '3', name: 'Freelance Projects', type: 'team', members: 2 },
];

export function WorkspaceSwitcher() {
  const [currentWorkspace, setCurrentWorkspace] = useState<Workspace>(workspaces[0]);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newWorkspaceName, setNewWorkspaceName] = useState('');

  const handleCreateWorkspace = () => {
    if (newWorkspaceName.trim()) {
      toast.success(`Workspace "${newWorkspaceName}" created successfully!`);
      setIsCreateDialogOpen(false);
      setNewWorkspaceName('');
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className="w-full justify-between bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white"
          >
            <div className="flex items-center space-x-2 min-w-0">
              <Building2 className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{currentWorkspace.name}</span>
            </div>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64" align="start">
          <DropdownMenuLabel>Workspaces</DropdownMenuLabel>
          <DropdownMenuSeparator />
          
          {workspaces.map((workspace) => (
            <DropdownMenuItem
              key={workspace.id}
              onClick={() => setCurrentWorkspace(workspace)}
              className="flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center space-x-2 min-w-0 flex-1">
                <Building2 className="w-4 h-4 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="truncate font-medium">{workspace.name}</div>
                  {workspace.type === 'team' && workspace.members && (
                    <div className="text-xs text-gray-500">{workspace.members} members</div>
                  )}
                </div>
              </div>
              {currentWorkspace.id === workspace.id && (
                <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
              )}
            </DropdownMenuItem>
          ))}
          
          <DropdownMenuSeparator />
          
          <DropdownMenuItem
            onClick={() => setIsCreateDialogOpen(true)}
            className="cursor-pointer text-blue-600"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create Workspace
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Create Workspace Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="animate-scale-in">
          <DialogHeader>
            <DialogTitle>Create New Workspace</DialogTitle>
            <DialogDescription>
              Create a separate workspace for different teams or projects.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="workspace-name">Workspace Name</Label>
              <Input
                id="workspace-name"
                placeholder="e.g., Marketing Team"
                value={newWorkspaceName}
                onChange={(e) => setNewWorkspaceName(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleCreateWorkspace()}
              />
            </div>
          </div>
          
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleCreateWorkspace} style={{ backgroundColor: 'var(--color-primary)' }}>
              Create Workspace
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
