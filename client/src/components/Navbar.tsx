import { Link, useLocation } from "wouter";
import { Github, Linkedin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Navbar() {
  const [location] = useLocation();

  const isActive = (path: string) => location === path ? "text-primary font-semibold cursor-pointer" : "text-muted-foreground hover:text-primary transition-colors cursor-pointer";

  return (
    <nav className="w-full max-w-4xl mx-auto py-8 px-6 flex flex-col md:flex-row items-center justify-between border-b border-gray-100 mb-12">
      <div className="flex items-center space-x-6 text-sm md:text-base mb-4 md:mb-0">
        <Link href="/" className={isActive("/")}>
          About
        </Link>
        <Link href="/portfolio" className={isActive("/portfolio")}>
          Portfolio
        </Link>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          Github
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          Linkedin
        </a>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right hidden md:block">
          <h2 className="text-sm font-bold text-gray-900 leading-tight">Sébastien Saunier</h2>
          <p className="text-xs text-gray-500 italic">Co-founder of Le Wagon 🚌</p>
        </div>
        <Avatar className="h-10 w-10">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>SS</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}
