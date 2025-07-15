// src/components/layout/Navbar.tsx
import { Bell, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Assuming Shadcn Avatar
import { Button } from "@/components/ui/button"; // Assuming Shadcn Button

interface NavbarProps {
  onMenuClick: () => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <nav className="flex py-[56px] items-center justify-between bg-white px-4 shadow-sm lg:px-8">
      <Button
        variant="ghost"
        size="icon"
        onClick={onMenuClick}
        className="text-gray-700 lg:hidden"
      >
        <Menu size={24} />
      </Button>

      <h1 className="text-[24px] md:text-[32px] font-medium text-text-primary">
        Good morning, Sophia
      </h1>
      {/* Right side: Notification and Avatar */}
      <div className="flex items-center space-x-4 border border-cwg-04 rounded-full">
        <Button variant="ghost" size="icon" className="text-gray-700">
          <Bell size={20} />
        </Button>
      </div>
    </nav>
  );
}
