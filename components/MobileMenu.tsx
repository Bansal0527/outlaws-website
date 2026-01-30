"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    links: { name: string; href: string }[];
}

const MobileMenu = ({ isOpen, onClose, links }: MobileMenuProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
                    />

                    {/* Menu Panel */}
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed left-0 top-0 bottom-0 w-full max-w-sm bg-card z-50 overflow-y-auto"
                    >
                        <div className="p-6">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-10">
                                <h2 className="font-display text-2xl tracking-wider">MENU</h2>
                                <Button variant="ghost" size="icon" onClick={onClose}>
                                    <X className="h-6 w-6" />
                                </Button>
                            </div>

                            {/* Nav Links */}
                            <nav className="space-y-6">
                                {links.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={onClose}
                                            className="block font-display text-3xl text-foreground hover:text-primary transition-colors uppercase"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Footer */}
                            <div className="mt-16 pt-8 border-t border-border">
                                <div className="flex gap-4">
                                    <Link
                                        href="#"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        <Instagram className="h-6 w-6" />
                                    </Link>
                                    <Link
                                        href="#"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        <Twitter className="h-6 w-6" />
                                    </Link>
                                </div>
                                <p className="mt-6 text-sm text-muted-foreground">
                                    © 2026 The Outlaws Club. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
