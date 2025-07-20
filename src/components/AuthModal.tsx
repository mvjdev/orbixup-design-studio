import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "./ui/dialog";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "signin" | "signup";
}

const AuthModal = ({ isOpen, onClose, initialMode = "signin" }: AuthModalProps) => {
  const [mode, setMode] = useState<"signin" | "signup">(initialMode);

  const toggleMode = () => {
    setMode(mode === "signin" ? "signup" : "signin");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[480px] w-[95vw] max-h-[95vh] overflow-y-auto bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl p-0">
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 w-8 h-8 rounded-full bg-muted/80 hover:bg-muted transition-colors flex items-center justify-center"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>

          {/* Content */}
          <div className="p-6 sm:p-8">
            {mode === "signin" ? (
              <SignIn onToggle={toggleMode} />
            ) : (
              <SignUp onToggle={toggleMode} />
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;