"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Search, User, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MobileMenu from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // const navLinks = [
    //     { name: "New Arrivals", href: "/new-arrivals" },
    //     { name: "T-Shirts", href: "/products/tshirts" },
    //     { name: "Polos", href: "/products/polo" },
    //     { name: "Hoodies", href: "/products/hoodies" },
    //     { name: "Shirts", href: "/products/shirts" },
    //     { name: "Oversized", href: "/products/oversized" },
    // ];

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border">
                {/* Announcement Bar */}
                <div className="bg-primary">
                    <div className="container py-2 mx-auto px-4">
                        <p className="text-center text-sm font-medium text-primary-foreground tracking-wide">
                            FREE SHIPPING ON ORDERS OVER ₹1499 | USE CODE: OUTLAWS20
                        </p>
                    </div>
                </div>

                {/* Main Header */}
                <div className="container mx-auto px-2 sm:px-4">
                    <div className="flex items-center justify-between h-16 lg:h-20 gap-2">
                        {/* Left - Menu Button */}
                        <div className="flex items-center lg:flex-1">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsMenuOpen(true)}
                                className="lg:hidden h-9 w-9"
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                        </div>

                        {/* Center - Logo */}
                        <div className="flex items-center justify-center flex-shrink-0 px-2">
                            <Link href="/" className="group">
                                <span 
                                    style={{ 
                                        fontFamily: "'Cinzel', serif",
                                        fontWeight: '900',
                                        letterSpacing: '1px',
                                    }} 
                                    className="text-base sm:text-xl md:text-2xl lg:text-4xl font-bold text-foreground group-hover:text-primary transition-colors whitespace-nowrap"
                                >
                                    THE OUTLAWS
                                </span>
                            </Link>
                        </div>

                        {/* Right - Icons */}
                        <div className="flex items-center justify-end gap-0.5 sm:gap-1 md:gap-2 lg:flex-1">
                            <div className="hidden sm:block">
                                <ThemeToggle />
                            </div>
                            <Button variant="ghost" size="icon" className="h-9 w-9">
                                <User className="h-4 w-4 sm:h-5 sm:w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="relative h-9 w-9">
                                <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" />
                                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center font-bold">
                                    0
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Search Bar */}
                <AnimatePresence>
                    {isSearchOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="border-t border-border overflow-hidden"
                        >
                            <div className="container py-4 mx-auto px-4">
                                <div className="relative max-w-xl mx-auto">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                    <Input
                                        placeholder='Search "Oversized Tees"'
                                        className="pl-12 pr-4 h-12 bg-secondary border-none text-foreground placeholder:text-muted-foreground"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Mobile Menu */}
            {/* <MobileMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                links={navLinks}
            /> */}
        </>
    );
};

export default Header;
