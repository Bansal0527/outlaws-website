"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
    return (
        <section className="py-20 bg-background relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            hsl(var(--foreground)) 10px,
            hsl(var(--foreground)) 11px
          )`
                }} />
            </div>

            <div className="container mx-auto px-4 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <span className="text-primary font-medium tracking-wider text-sm">
                        STAY UPDATED
                    </span>
                    <h2 className="font-display text-4xl md:text-6xl text-foreground mt-2 mb-4">
                        JOIN THE OUTLAWS
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Subscribe to get early access to new drops, exclusive deals, and streetwear tips.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="h-12 bg-secondary border-none text-foreground placeholder:text-muted-foreground flex-1"
                        />
                        <Button variant="hero" size="lg" type="submit">
                            Subscribe
                        </Button>
                    </form>

                    <p className="text-xs text-muted-foreground mt-4">
                        By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Newsletter;
