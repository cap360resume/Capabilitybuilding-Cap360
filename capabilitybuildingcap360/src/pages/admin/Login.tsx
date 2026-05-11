import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, Lock, UserPlus, LogIn } from "lucide-react";
import logo from "@/assets/cap360-logo.png";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<"login" | "signup" | "forgot">("login");
  const { signIn, signUp, resetPassword } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const validatePassword = (pw: string) => {
    if (pw.length < 8) return "Password must be at least 8 characters";
    if (!/[A-Z]/.test(pw)) return "Password must contain an uppercase letter";
    if (!/[a-z]/.test(pw)) return "Password must contain a lowercase letter";
    if (!/[0-9]/.test(pw)) return "Password must contain a number";
    if (!/[^A-Za-z0-9]/.test(pw)) return "Password must contain a special character";
    return null;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const { error } = await signIn(email, password);
    if (error) {
      toast({ title: "Login failed", description: error.message, variant: "destructive" });
    } else {
      navigate("/admin");
    }
    setIsLoading(false);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const pwError = validatePassword(password);
    if (pwError) {
      toast({ title: "Weak password", description: pwError, variant: "destructive" });
      return;
    }
    if (password !== confirmPassword) {
      toast({ title: "Passwords don't match", description: "Please re-enter your password.", variant: "destructive" });
      return;
    }
    if (!fullName.trim()) {
      toast({ title: "Name required", description: "Please enter your full name.", variant: "destructive" });
      return;
    }
    setIsLoading(true);
    const { error } = await signUp(email, password, fullName.trim());
    if (error) {
      toast({ title: "Signup failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Check your email", description: "A confirmation link has been sent. Verify your email before signing in." });
      setMode("login");
      setPassword("");
      setConfirmPassword("");
    }
    setIsLoading(false);
  };

  const handleForgot = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const { error } = await resetPassword(email);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Check your email", description: "A password reset link has been sent." });
    }
    setIsLoading(false);
  };

  const titles = { login: "Admin Login", signup: "Create Account", forgot: "Reset Password" };
  const descriptions = {
    login: "Sign in to access the admin dashboard",
    signup: "Create your account — an admin must grant you access after signup",
    forgot: "Enter your email to receive a reset link",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md border-border/50">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto">
            <img src={logo} alt="CAP360" className="h-10 mx-auto" />
          </div>
          <CardTitle className="text-2xl font-bold text-foreground">{titles[mode]}</CardTitle>
          <CardDescription>{descriptions[mode]}</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={mode === "login" ? handleLogin : mode === "signup" ? handleSignup : handleForgot}
            className="space-y-4"
          >
            {mode === "signup" && (
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" placeholder="John Doe" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            {mode !== "forgot" && (
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {mode === "signup" && (
                  <p className="text-xs text-muted-foreground">Min 8 chars, uppercase, lowercase, number & special character</p>
                )}
              </div>
            )}
            {mode === "signup" && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" type={showPassword ? "text" : "password"} placeholder="••••••••" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
              </div>
            )}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {mode === "signup" ? <UserPlus className="w-4 h-4 mr-2" /> : <Lock className="w-4 h-4 mr-2" />}
              {isLoading ? "Please wait..." : mode === "login" ? "Sign In" : mode === "signup" ? "Create Account" : "Send Reset Link"}
            </Button>
            <div className="flex flex-col gap-2 text-center">
              {mode === "login" && (
                <>
                  <button type="button" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMode("signup")}>
                    Don't have an account? Sign up
                  </button>
                  <button type="button" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMode("forgot")}>
                    Forgot your password?
                  </button>
                </>
              )}
              {mode === "signup" && (
                <button type="button" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMode("login")}>
                  Already have an account? Sign in
                </button>
              )}
              {mode === "forgot" && (
                <button type="button" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMode("login")}>
                  Back to login
                </button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
