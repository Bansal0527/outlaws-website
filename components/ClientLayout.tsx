"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <Header />
            {children}
            <Footer />
        </ThemeProvider>
    );
}
