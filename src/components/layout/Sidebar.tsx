// src/components/layout/Sidebar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import {
  LayoutDashboard,
  CreditCard,
  Building,
  Users,
  X, // Close icon
  Menu, // Menu icon
} from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming you have a cn utility for class merging

import profile from "@/assets/profile.svg"; // Adjust the path as necessary
import { VerifiedIcon } from "../icons/VerifiedIcon";
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1023px)" }); // Tailwind's 'lg' breakpoint is 1024px

  useEffect(() => {
    if (!isMobileOrTablet && isOpen) {
      onClose();
    }
  }, [isMobileOrTablet, isOpen, onClose]);

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
          "fixed inset-y-0 left-0 z-50 flex w-full md:w-[320px] lg:w-[287] flex-col bg-cwg-darkgreen text-white shadow-xl transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:shadow-none",
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
          <SidebarLink
            icon={LayoutDashboard}
            text="Dashboard"
            href="/"
            isActive
          />
          <SidebarLink icon={CreditCard} text="Payments" href="/" />
          <SidebarLink icon={Building} text="Businesses" href="/" />
          <SidebarLink icon={Users} text="Employees" href="/" />
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
      <Icon size={20} />
      <span>{text}</span>
    </Link>
  );
}
