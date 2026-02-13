"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const collections = [
    {
        id: 3,
        name: "Urban Street Hoodie",
        coverImage: "/assets/final-collection/3/IMG-20260202-WA0058.jpg",
        imageCount: 4,
    },
    {
        id: 5,
        name: "Classic Graphic Tee",
        coverImage: "/assets/final-collection/5/IMG-20260202-WA0042.jpg",
        imageCount: 6,
    },
    {
        id: 6,
        name: "Oversized Drop Shoulder Tee",
        coverImage: "/assets/final-collection/6/IMG-20260202-WA0027.jpg",
        imageCount: 5,
    },
    {
        id: 7,
        name: "Premium Polo Shirt",
        coverImage: "/assets/final-collection/7/IMG-20260205-WA0002.jpg",
        imageCount: 5,
    },
    {
        id: 9,
        name: "Essential Solid Tee",
        coverImage: "/assets/final-collection/9/IMG-20260203-WA0018.jpg",
        imageCount: 4,
    },
];

const FinalCollection = () => {
    return (
        <section id="final-collection" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-primary font-medium tracking-wider text-sm">
                        LATEST DROPS
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl text-foreground mt-2">
                        Final Collection
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Explore our latest collection featuring exclusive designs
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {collections.map((collection, index) => (
                        <motion.div
                            key={collection.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={`/products/collection/${collection.id}`}>
                                <div className="group cursor-pointer">
                                    {/* Image Container */}
                                    <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4 rounded-lg">
                                        <Image
                                            src={collection.coverImage}
                                            alt={collection.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        {/* Overlay on hover */}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div className="text-white text-center">
                                                <p className="text-lg font-semibold">View Collection</p>
                                                
                                            </div>
                                        </div>
                                    </div>

                                    {/* Collection Info */}
                                    <div className="text-center">
                                        <h3 className="font-medium text-lg text-foreground group-hover:text-primary transition-colors">
                                            {collection.name}
                                        </h3>
                                        <p className="text-muted-foreground text-sm mt-1">
                                            {collection.imageCount} Items
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FinalCollection;
