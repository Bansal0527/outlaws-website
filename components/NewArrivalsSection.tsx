"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { collections } from "@/lib/collections";

const NewArrivalsSection = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-primary font-medium tracking-wider text-sm">
                        FRESH DROPS
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4 mt-2">
                        NEW ARRIVALS
                    </h2>
                    <p className="text-muted-foreground">
                        Explore our latest collections
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                    {collections.map((collection, index) => (
                        <motion.div
                            key={collection.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={`/collection/${collection.id}`}
                                className="group relative block aspect-[3/4] overflow-hidden bg-card"
                            >
                                <Image
                                    src={collection.coverImage}
                                    alt={collection.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent dark:from-background/90 dark:via-background/20" />
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h3 className="font-display text-lg md:text-xl text-white dark:text-foreground group-hover:text-primary transition-colors">
                                        {collection.name}
                                    </h3>
                                    <p className="text-xs text-gray-300 dark:text-muted-foreground mt-1">
                                        {collection.images.length} designs
                                    </p>
                                </div>
                                {/* Hover Border */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary transition-colors" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewArrivalsSection;
