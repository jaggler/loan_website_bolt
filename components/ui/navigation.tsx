"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Wallet, Menu } from "lucide-react";

const navItems = ["Home", "About", "Services", "Contact"];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 mb-8 px-6 py-4 glass-effect">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-2">
          <Wallet className="h-8 w-8 text-teal-800" />
          <span className="text-xl font-bold text-teal-800">Macho Co-operative</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Button key={item} variant="ghost" className="text-teal-800 hover:text-teal-600 hover:bg-white/50">
              {item}
            </Button>
          ))}
          <Button className="bg-teal-700 hover:bg-teal-800 text-white">
            Join Now
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-teal-800">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[400px] glass-effect border-none">
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Button
                    key={item}
                    variant="ghost"
                    className="w-full justify-start text-teal-800 hover:text-teal-600 hover:bg-white/50"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Button>
                ))}
                <Button 
                  className="w-full bg-teal-700 hover:bg-teal-800 text-white mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  Join Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}