"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const slides = [
    {
        id: 1,
        image: "/assets/hero-3.jpg",
        title: "PRODUCT 10",
        subtitle: "NEW ARRIVAL",
        description: "Elevate your style",
        cta: "Shop Now",
    },
    {
        id: 2,
        image: "/assets/hero-1.jpg",
        title: "STREET STYLE",
        subtitle: "NEW DROP",
        description: "Unleash your urban edge",
        cta: "Shop Now",
    },
    {
        id: 3,
        image: "/assets/hero-2.jpg",
        title: "URBAN ESSENTIALS",
        subtitle: "HOODIES",
        description: "Comfort meets culture",
        cta: "Explore",
    },
    {
        id: 4,
        image: "/assets/product-9.jpg",
        title: "PRODUCT 9",
        subtitle: "NEW ARRIVAL",
        description: "Elevate your style",
        cta: "Shop Now",
    },
];

const HeroCarousel = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={slides[current].image}
                        alt={slides[current].title}
                        fill
                        priority
                        className="object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Content */}
            <div className="relative h-full container mx-auto px-4 flex items-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-xl"
                    >
                        <span className="inline-block px-4 py-1 bg-primary text-primary-foreground text-sm font-medium tracking-wider mb-4">
                            {slides[current].subtitle}
                        </span>
                        <h2 className="font-display text-6xl md:text-8xl lg:text-9xl text-foreground leading-none mb-4">
                            {slides[current].title}
                        </h2>
                        <p className="text-lg md:text-xl text-foreground/80 mb-8">
                            {slides[current].description}
                        </p>
                        <Button variant="hero" size="lg">
                            {slides[current].cta}
                        </Button>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={prev}
                    className="border border-foreground/20 hover:border-primary hover:text-primary rounded-full w-10 h-10"
                >
                    <ChevronLeft className="h-5 w-5" />
                </Button>
                <div className="flex gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`h-2 transition-all duration-300 ${index === current
                                    ? "w-8 bg-primary"
                                    : "w-2 bg-foreground/30 hover:bg-foreground/50"
                                } rounded-full`}
                        />
                    ))}
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={next}
                    className="border border-foreground/20 hover:border-primary hover:text-primary rounded-full w-10 h-10"
                >
                    <ChevronRight className="h-5 w-5" />
                </Button>
            </div>
        </section>
    );
};

export default HeroCarousel;
