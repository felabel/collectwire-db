"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

import profile from "@/assets/profile.svg";
import { VerifiedIcon } from "../icons/VerifiedIcon";
import { DashboardIcon } from "../icons/DashboardIcon";
import { BusinessIcon } from "../icons/BusinessIcon";
import { WalletIcon } from "../icons/WalletIcon";
import { UserIcon } from "../icons/UserIcon";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1023px)" });

  console.log("pathname", pathname);
  useEffect(() => {
    if (!isMobileOrTablet && isOpen) {
      onClose();
    }
  }, [isMobileOrTablet, isOpen, onClose]);

  const navLinks = [
    {
      icon: DashboardIcon,
      text: "Dashboard",
      href: "/",
      isActive: pathname === "/",
    },
    {
      icon: WalletIcon,
      text: "Payments",
      href: "/payment",
      isActive: pathname.startsWith("/payment"),
    },
    {
      icon: BusinessIcon,
      text: "Businesses",
      href: "/businesses",
      isActive: pathname.startsWith("/businesses"),
    },
    {
      icon: UserIcon,
      text: "Employees",
      href: "/employees",
      isActive: pathname.startsWith("/employees"),
    },
  ];

  return (
    <>
      {isMobileOrTablet && isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden h-full"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-full md:w-[320px] lg:w-[287px] flex-col bg-cwg-darkgreen text-white shadow-xl transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:shadow-none",
          {
            "translate-x-0": isOpen,
            "-translate-x-full": !isOpen && isMobileOrTablet,
          }
        )}
      >
        <div className="flex items-center justify-between px-[32px] py-[32px] lg:py-[56px] border-sidebar-active lg:justify-center">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src={profile}
              alt="PiggyCanvas Inc Logo"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <div className="flex items-center gap-1">
                <span className="text-[18px] font-medium text-text-white">
                  PiggyCanvas Inc{" "}
                </span>
                <VerifiedIcon />{" "}
              </div>
              <p className="text-[14px] text-cwg-06">Sophia Williamson</p>
            </div>
          </Link>
          {isMobileOrTablet && (
            <button
              onClick={onClose}
              className="text-white lg:hidden -mt-[1.2rem]"
            >
              <X size={24} />
            </button>
          )}
        </div>

        <nav className="flex-1 px-[32px] space-y-3">
          {navLinks.map((item, index) => (
            <SidebarLink
              icon={item.icon}
              text={item.text}
              href={item.href}
              isActive={item.isActive}
              key={index}
            />
          ))}
        </nav>
      </aside>
    </>
  );
}

interface SidebarLinkProps {
  icon: React.ElementType;
  text: string;
  href: string;
  isActive?: boolean;
}

function SidebarLink({ icon: Icon, text, href, isActive }: SidebarLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center space-x-3 rounded-md px-6 py-4 text-base font-medium transition-colors duration-200",
        isActive
          ? "bg-sidebar-active text-white01"
          : "text-cwg-05 hover:bg-sidebar-active hover:text-white01"
      )}
    >
      <Icon size={20} stroke={isActive ? "white" : "currentColor"} />
      <span className="mt-[4px]">{text}</span>
    </Link>
  );
}
