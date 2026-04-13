'use client';

import { ThemeProvider as NextTHemeProvider } from "next-themes";
import { ReactNode } from "react";

export default function ThemeProvider({ children }: { children: ReactNode }) {
    return (
        <NextTHemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange={false}
        >
          {children}
        </NextTHemeProvider>
    );
}