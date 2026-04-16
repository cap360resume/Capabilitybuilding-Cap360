import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { UserPlus, Trash2, Shield } from "lucide-react";

interface AdminUser {
  id: string;
  user_id: string;
  role: string;
  created_at: string;
  email?: string;
  full_name?: string;
}

const ManageAdmins = () => {
  const [admins, setAdmins] = useState<AdminUser[]>([]);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newName, setNewName] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  const fetchAdmins = async () => {
    setFetching(true);
    const { data: roles, error } = await supabase
      .from("user_roles")
      .select("*")
      .eq("role", "admin");

    if (error) {
      toast({ title: "Error", description: "Failed to fetch admins", variant: "destructive" });
      setFetching(false);
      return;
    }

    // Fetch profiles for each admin
    const enriched: AdminUser[] = [];
    for (const role of roles || []) {
      const { data: profile } = await supabase
        .from("profiles")
        .select("full_name")
        .eq("user_id", role.user_id)
        .single();

      enriched.push({
        ...role,
        full_name: profile?.full_name || "Unknown",
        email: role.user_id === user?.id ? user.email : undefined,
      });
    }

    setAdmins(enriched);
    setFetching(false);
  };

  useEffect(() => { fetchAdmins(); }, []);

  const handleAddAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmail || !newPassword) return;

    setLoading(true);

    // Sign up the new user
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email: newEmail,
      password: newPassword,
      options: {
        data: { full_name: newName || newEmail },
        emailRedirectTo: window.location.origin,
      },
    });

    if (signUpError) {
      toast({ title: "Error", description: signUpError.message, variant: "destructive" });
      setLoading(false);
      return;
    }

    if (!signUpData.user) {
      toast({ title: "Error", description: "Failed to create user", variant: "destructive" });
      setLoading(false);
      return;
    }

    // Add admin role
    const { error: roleError } = await supabase
      .from("user_roles")
      .insert({ user_id: signUpData.user.id, role: "admin" as any });

    if (roleError) {
      toast({ title: "Error", description: "User created but failed to assign admin role: " + roleError.message, variant: "destructive" });
    } else {
      toast({ title: "Success", description: `Admin ${newEmail} created successfully. They will need to verify their email.` });
      setNewEmail("");
      setNewPassword("");
      setNewName("");
      fetchAdmins();
    }

    setLoading(false);
  };

  const handleRemoveAdmin = async (roleId: string, adminUserId: string) => {
    if (adminUserId === user?.id) {
      toast({ title: "Error", description: "You cannot remove yourself as admin", variant: "destructive" });
      return;
    }

    const { error } = await supabase
      .from("user_roles")
      .delete()
      .eq("id", roleId);

    if (error) {
      toast({ title: "Error", description: "Failed to remove admin: " + error.message, variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Admin role removed successfully" });
      fetchAdmins();
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Manage Admins</h1>
          <p className="text-muted-foreground mt-1">Add or remove admin users</p>
        </div>

        {/* Add Admin */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserPlus className="w-5 h-5 text-cap-orange" />
              Add New Admin
            </CardTitle>
            <CardDescription>Create a new admin account with email and password</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddAdmin} className="space-y-4">
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" value={newName} onChange={(e) => setNewName(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="admin@cap360.com" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password *</Label>
                  <Input id="password" type="password" placeholder="Min 8 characters" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required minLength={8} />
                </div>
              </div>
              <Button type="submit" disabled={loading}>
                <UserPlus className="w-4 h-4 mr-2" />
                {loading ? "Creating..." : "Add Admin"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Admin List */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-cap-orange" />
              Current Admins
            </CardTitle>
            <CardDescription>
              {admins.length} admin{admins.length !== 1 ? "s" : ""} registered
            </CardDescription>
          </CardHeader>
          <CardContent>
            {fetching ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>User ID</TableHead>
                    <TableHead>Added</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {admins.map((admin) => (
                    <TableRow key={admin.id}>
                      <TableCell className="font-medium">
                        {admin.full_name}
                        {admin.user_id === user?.id && (
                          <span className="ml-2 text-xs text-cap-orange">(you)</span>
                        )}
                      </TableCell>
                      <TableCell className="text-muted-foreground text-xs font-mono">
                        {admin.email || admin.user_id.slice(0, 8) + "..."}
                      </TableCell>
                      <TableCell className="text-muted-foreground text-sm">
                        {new Date(admin.created_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-right">
                        {admin.user_id !== user?.id ? (
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive hover:bg-destructive/10">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Remove Admin</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Are you sure you want to remove this user's admin access? They will no longer be able to access the admin dashboard.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={() => handleRemoveAdmin(admin.id, admin.user_id)} className="bg-destructive hover:bg-destructive/90">
                                  Remove
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        ) : (
                          <span className="text-xs text-muted-foreground">—</span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default ManageAdmins;
