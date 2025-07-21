import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "./ui/dialog";
import { Button } from "./ui/button";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "signin" | "signup";
}

const AuthModal = ({ isOpen, onClose, initialMode = "signin" }: AuthModalProps) => {
  const [mode, setMode] = useState<"signin" | "signup">(initialMode);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] w-[95vw] max-h-[95vh] overflow-y-auto bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl p-0">
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 w-8 h-8 rounded-full bg-muted/80 hover:bg-muted transition-colors flex items-center justify-center"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>

          {/* Toggle Buttons */}
          <div className="p-6 pb-0">
            <div className="flex bg-muted/50 rounded-xl p-1 mb-6">
              <Button
                variant={mode === "signin" ? "default" : "ghost"}
                className={`flex-1 rounded-lg transition-all ${
                  mode === "signin"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "hover:bg-muted/80"
                }`}
                onClick={() => setMode("signin")}
              >
                Se connecter
              </Button>
              <Button
                variant={mode === "signup" ? "default" : "ghost"}
                className={`flex-1 rounded-lg transition-all ${
                  mode === "signup"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "hover:bg-muted/80"
                }`}
                onClick={() => setMode("signup")}
              >
                S'inscrire
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 pb-6">
            {mode === "signin" ? <SignIn /> : <SignUp />}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;