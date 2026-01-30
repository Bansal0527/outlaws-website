"use client";

import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    const footerLinks = {
        shop: [
            { name: "New Arrivals", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Hoodies", href: "#" },
            { name: "Bottoms", href: "#" },
            { name: "Accessories", href: "#" },
        ],
        help: [
            { name: "FAQ", href: "#" },
            { name: "Shipping", href: "#" },
            { name: "Returns", href: "#" },
            { name: "Size Guide", href: "#" },
            { name: "Contact Us", href: "#" },
        ],
        company: [
            { name: "About Us", href: "#" },
            { name: "Careers", href: "#" },
            { name: "Press", href: "#" },
            { name: "Blog", href: "#" },
        ],
    };

    const socials = [
        { icon: Instagram, href: "#", name: "Instagram" },
        { icon: Twitter, href: "#", name: "Twitter" },
        { icon: Facebook, href: "#", name: "Facebook" },
        { icon: Youtube, href: "#", name: "Youtube" },
    ];

    return (
        <footer className="bg-card border-t border-border">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-4 lg:col-span-1">
                        <Image src="/assets/logo.jpeg" alt="The Outlaws Club" width={64} height={64} className="h-16 w-auto mb-4" />
                        <p className="text-muted-foreground text-sm mb-6 max-w-xs">
                            Premium streetwear for those who dare to stand out. Express your style, own the streets.
                        </p>
                        <div className="flex gap-4">
                            {socials.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    aria-label={social.name}
                                >
                                    <social.icon className="h-5 w-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Shop */}
                    <div>
                        <h3 className="font-display text-lg text-foreground mb-4">SHOP</h3>
                        <ul className="space-y-3">
                            {footerLinks.shop.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Help */}
                    <div>
                        <h3 className="font-display text-lg text-foreground mb-4">HELP</h3>
                        <ul className="space-y-3">
                            {footerLinks.help.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-display text-lg text-foreground mb-4">COMPANY</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                        © 2026 The Outlaws Club. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
