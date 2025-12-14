import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Switch } from '../components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import {
  Lock,
  Bell,
  Globe,
  Eye,
  EyeOff,
  Shield,
  CreditCard,
  Download,
  Trash2,
} from 'lucide-react';
import { toast } from 'sonner';

export function AccountSettings() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  
  // Privacy Settings
  const [profileVisibility, setProfileVisibility] = useState('public');
  const [showEmail, setShowEmail] = useState(false);
  const [allowIndexing, setAllowIndexing] = useState(true);
  
  // Notification Settings
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [projectComments, setProjectComments] = useState(true);
  const [newFollowers, setNewFollowers] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(true);

  const handlePasswordChange = () => {
    toast.success('Password updated successfully!');
  };

  const handleExportData = () => {
    toast.success('Your data export has been started. You will receive an email when ready.');
  };

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans p-6 md:p-8 pb-24">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Account Settings</h1>
          <p className="text-slate-500 mt-1">Manage your account security and preferences</p>
        </div>

        {/* Security - Password */}
        <Card className="border-0 ring-1 ring-slate-200 shadow-sm bg-white">
          <CardHeader className="pb-4 border-b border-slate-50">
            <CardTitle className="text-lg font-bold text-slate-900 flex items-center">
              <Lock className="w-5 h-5 mr-2" />
              Password & Security
            </CardTitle>
            <CardDescription>Update your password and security settings</CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <div className="relative">
                <Input
                  id="current-password"
                  type={showCurrentPassword ? 'text' : 'password'}
                  placeholder="Enter current password"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <div className="relative">
                  <Input
                    id="new-password"
                    type={showNewPassword ? 'text' : 'password'}
                    placeholder="Enter new password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm new password"
                />
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <Button onClick={handlePasswordChange} style={{ backgroundColor: 'var(--color-primary)' }}>
                Update Password
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Two-Factor Authentication */}
        <Card className="border-0 ring-1 ring-slate-200 shadow-sm bg-white">
          <CardHeader className="pb-4 border-b border-slate-50">
            <CardTitle className="text-lg font-bold text-slate-900 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Two-Factor Authentication
            </CardTitle>
            <CardDescription>Add an extra layer of security to your account</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-medium text-slate-900 mb-1">Enable 2FA</h3>
                <p className="text-sm text-slate-600">
                  Protect your account with two-factor authentication using an authenticator app
                </p>
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-900 flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    Two-factor authentication is currently <strong className="ml-1">disabled</strong>
                  </p>
                </div>
              </div>
              <Button variant="outline" className="ml-4">
                Enable 2FA
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Settings */}
        <Card className="border-0 ring-1 ring-slate-200 shadow-sm bg-white">
          <CardHeader className="pb-4 border-b border-slate-50">
            <CardTitle className="text-lg font-bold text-slate-900 flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              Privacy Settings
            </CardTitle>
            <CardDescription>Control who can see your profile and projects</CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="profile-visibility">Profile Visibility</Label>
              <Select value={profileVisibility} onValueChange={setProfileVisibility}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="public">Public - Anyone can see</SelectItem>
                  <SelectItem value="unlisted">Unlisted - Only with link</SelectItem>
                  <SelectItem value="private">Private - Only you</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-slate-500">
                Control who can view your portfolio and projects
              </p>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-slate-100">
              <div>
                <h3 className="font-medium text-slate-900">Show Email on Profile</h3>
                <p className="text-sm text-slate-600">Allow others to see your email address</p>
              </div>
              <Switch checked={showEmail} onCheckedChange={setShowEmail} />
            </div>

            <div className="flex items-center justify-between py-3 border-b border-slate-100">
              <div>
                <h3 className="font-medium text-slate-900">Search Engine Indexing</h3>
                <p className="text-sm text-slate-600">Allow search engines to index your portfolio</p>
              </div>
              <Switch checked={allowIndexing} onCheckedChange={setAllowIndexing} />
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="border-0 ring-1 ring-slate-200 shadow-sm bg-white">
          <CardHeader className="pb-4 border-b border-slate-50">
            <CardTitle className="text-lg font-bold text-slate-900 flex items-center">
              <Bell className="w-5 h-5 mr-2" />
              Notification Preferences
            </CardTitle>
            <CardDescription>Choose what notifications you want to receive</CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-slate-100">
              <div>
                <h3 className="font-medium text-slate-900">Email Notifications</h3>
                <p className="text-sm text-slate-600">Receive notifications via email</p>
              </div>
              <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
            </div>

            <div className="flex items-center justify-between py-3 border-b border-slate-100">
              <div>
                <h3 className="font-medium text-slate-900">Project Comments</h3>
                <p className="text-sm text-slate-600">Get notified when someone comments on your projects</p>
              </div>
              <Switch 
                checked={projectComments} 
                onCheckedChange={setProjectComments}
                disabled={!emailNotifications}
              />
            </div>

            <div className="flex items-center justify-between py-3 border-b border-slate-100">
              <div>
                <h3 className="font-medium text-slate-900">New Followers</h3>
                <p className="text-sm text-slate-600">Get notified when someone follows you</p>
              </div>
              <Switch 
                checked={newFollowers} 
                onCheckedChange={setNewFollowers}
                disabled={!emailNotifications}
              />
            </div>

            <div className="flex items-center justify-between py-3">
              <div>
                <h3 className="font-medium text-slate-900">Weekly Digest</h3>
                <p className="text-sm text-slate-600">Receive weekly summary of your activity</p>
              </div>
              <Switch 
                checked={weeklyDigest} 
                onCheckedChange={setWeeklyDigest}
                disabled={!emailNotifications}
              />
            </div>
          </CardContent>
        </Card>

        {/* Billing */}
        <Card className="border-0 ring-1 ring-slate-200 shadow-sm bg-white">
          <CardHeader className="pb-4 border-b border-slate-50">
            <CardTitle className="text-lg font-bold text-slate-900 flex items-center">
              <CreditCard className="w-5 h-5 mr-2" />
              Billing & Subscription
            </CardTitle>
            <CardDescription>Manage your subscription and billing information</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="p-4 bg-slate-50 rounded-lg mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900">Free Plan</h3>
                  <p className="text-sm text-slate-600">Currently active</p>
                </div>
                <Button variant="outline">Upgrade to Pro</Button>
              </div>
            </div>
            <p className="text-xs text-slate-500">
              No payment method on file. Upgrade to access premium features.
            </p>
          </CardContent>
        </Card>

        {/* Data & Privacy */}
        <Card className="border-0 ring-1 ring-slate-200 shadow-sm bg-white">
          <CardHeader className="pb-4 border-b border-slate-50">
            <CardTitle className="text-lg font-bold text-slate-900 flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Data & Privacy
            </CardTitle>
            <CardDescription>Export or delete your account data</CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
              <div>
                <h3 className="font-medium text-slate-900">Export Your Data</h3>
                <p className="text-sm text-slate-600">Download a copy of all your portfolio data</p>
              </div>
              <Button variant="outline" onClick={handleExportData}>
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-0 ring-1 ring-red-200 shadow-sm bg-white">
          <CardHeader className="pb-4 border-b border-red-50">
            <CardTitle className="text-lg font-bold text-red-900">Danger Zone</CardTitle>
            <CardDescription>Irreversible and destructive actions</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg bg-red-50/50">
              <div>
                <h3 className="font-medium text-red-900">Delete Account</h3>
                <p className="text-sm text-red-600">
                  Permanently delete your account and all associated data
                </p>
              </div>
              <Button variant="destructive">
                <Trash2 className="w-4 h-4 mr-2" />
                Delete Account
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
