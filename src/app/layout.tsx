import type { Metadata } from "next";
import "./globals.css";
import { ReduxProvider } from "@/providers/Provider";
import {ThemeProvider} from "@/providers/theme-provider";
import {ReactNode} from "react";


export const metadata: Metadata = {
  title: "Canvas Chat",
  description: "another pet base build",
};

export default function RootLayout({children}:
  Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-inter text-4xl">
        <ReduxProvider>
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
          >
              {children}
          </ThemeProvider>
        </ReduxProvider>
        
      </body>
    </html>
  );
}
