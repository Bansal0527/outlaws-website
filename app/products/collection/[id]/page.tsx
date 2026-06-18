"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ShoppingBag, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getCollectionById } from "@/lib/collections";

export default function CollectionDetailPage() {
    const params = useParams();
    const id = params?.id as string;
    const [selectedImage, setSelectedImage] = useState(0);
    const collection = getCollectionById(id);

    if (!collection) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Collection Not Found</h1>
                    <Link href="/">
                        <Button variant="hero">Back to Home</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const nextImage = () => {
        setSelectedImage((prev) => (prev + 1) % collection.images.length);
    };

    const prevImage = () => {
        setSelectedImage((prev) => (prev - 1 + collection.images.length) % collection.images.length);
    };

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                    <Link href="/" className="hover:text-foreground transition-colors">
                        Home
                    </Link>
                    <span>/</span>
                    <Link href="/#final-collection" className="hover:text-foreground transition-colors">
                        Collections
                    </Link>
                    <span>/</span>
                    <span className="text-foreground">{collection.name}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                        {/* Main Image */}
                        <div className="relative aspect-[3/4] bg-secondary rounded-lg overflow-hidden">
                            <motion.div
                                key={selectedImage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-full h-full"
                            >
                                <Image
                                    src={collection.images[selectedImage]}
                                    alt={`${collection.name} - Image ${selectedImage + 1}`}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>

                            {/* Navigation Arrows */}
                            {collection.images.length > 1 && (
                                <>
                                    <Button
                                        variant="secondary"
                                        size="icon"
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full"
                                    >
                                        <ChevronLeft className="h-5 w-5" />
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        size="icon"
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full"
                                    >
                                        <ChevronRight className="h-5 w-5" />
                                    </Button>
                                </>
                            )}

                            {/* Image Counter */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                                {selectedImage + 1} / {collection.images.length}
                            </div>
                        </div>

                        {/* Thumbnail Strip */}
                        <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                            {collection.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`relative aspect-square rounded-md overflow-hidden ${
                                        selectedImage === index
                                            ? "ring-2 ring-primary"
                                            : "ring-1 ring-border hover:ring-primary/50"
                                    } transition-all`}
                                >
                                    <Image
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-6">
                        <div>
                            <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium tracking-wider rounded-full mb-3">
                                NEW COLLECTION
                            </span>
                            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
                                {collection.name}
                            </h1>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-3xl font-bold text-foreground">₹{collection.price}</span>
                                <span className="text-xl text-muted-foreground line-through">₹{collection.originalPrice}</span>
                                <span className="px-2 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-medium rounded">
                                    {Math.round(((collection.originalPrice - collection.price) / collection.originalPrice) * 100)}% OFF
                                </span>
                            </div>
                        </div>

                        {/* Description Placeholder */}
                        <div className="space-y-4 border-t border-b border-border py-6">
                            <h3 className="font-semibold text-lg">Product Details</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {collection.description}
                            </p>
                            <div className="mt-4">
                                <h4 className="font-semibold text-sm mb-3">Key Features:</h4>
                                <ul className="space-y-2 text-muted-foreground">
                                    {collection.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Size Selection Placeholder */}
                        <div className="space-y-3">
                            <h3 className="font-semibold">Select Size</h3>
                            <div className="flex gap-2">
                                {["S", "M", "L", "XL", "XXL"].map((size) => (
                                    <button
                                        key={size}
                                        className="px-6 py-3 border border-border hover:border-primary hover:bg-primary/5 rounded-lg transition-all"
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3 pt-6">
                            <Button variant="hero" size="lg" className="w-full gap-2">
                                <ShoppingBag className="h-5 w-5" />
                                Add to Cart
                            </Button>
                            <div className="grid grid-cols-2 gap-3">
                                <Button variant="outline" size="lg" className="gap-2">
                                    <Heart className="h-5 w-5" />
                                    Add to Wishlist
                                </Button>
                                <Button variant="outline" size="lg" className="gap-2">
                                    <Share2 className="h-5 w-5" />
                                    Share
                                </Button>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="bg-secondary/50 p-4 rounded-lg space-y-2 text-sm">
                            <p className="flex justify-between">
                                <span className="text-muted-foreground">Free Shipping</span>
                                <span className="font-medium">On orders above ₹999</span>
                            </p>
                            <p className="flex justify-between">
                                <span className="text-muted-foreground">Easy Returns</span>
                                <span className="font-medium">7 days return policy</span>
                            </p>
                            <p className="flex justify-between">
                                <span className="text-muted-foreground">Cash on Delivery</span>
                                <span className="font-medium">Available</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Back to Collections */}
                <div className="mt-12 text-center">
                    <Link href="/#final-collection">
                        <Button variant="outline" size="lg">
                            ← Back to Collections
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
