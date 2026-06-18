"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <Header />
            <div className="pt-[104px] lg:pt-[120px]">
                {children}
            </div>
            <Footer />
        </ThemeProvider>
    );
}
