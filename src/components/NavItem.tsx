"use client";
import { NAV_CATEGORIES } from "@/config/Index";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = (typeof NAV_CATEGORIES)[number];

interface NavItemProps {
  category: Category;
  handleOpen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}

export default function NavItem({
  category,
  handleOpen,
  isOpen,
  isAnyOpen,
}: NavItemProps) {

  return (
    <div className=" flex">
      <div className="flex items-center">
        <Button onClick={handleOpen} variant={isOpen ? "secondary" : "ghost"}>
          {category.label}
          <ChevronDown className={cn("h-4 w-4", { "-rotate-180": isOpen })} />
        </Button>
      </div>
      {isOpen && (
        <div
          className={cn("absolute  top-full ", {
            "animate-in fade-in-10 slide-in-from-top-5": isAnyOpen,
          })}
        >
          <div
            className="absolute -inset-[2px] dark:-inset-[1.3px] top-full dark:top-full bg-white dark:bg-black  shadow"
            aria-hidden="true"  
          />
          <div className="relative bg-white dark:bg-slate-950">
              <div className="flex pt-5  gap-10  px-10 h-16">
                {category.featured.map((item) => (
                  <div className=" group relative text-base sm:text-sm">
                    <div className="relative aspect-video overflow-hidden group-hover:opacity-50 cursor-pointer">
                      <div className=" " key={item.name}>
                        {" "}
                        {item.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </div>
      )}
    </div>
  );
}
