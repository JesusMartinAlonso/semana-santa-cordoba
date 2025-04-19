'use client';

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Suspense } from "react";

declare global {
  interface Window {
    twttr: any;
  }
}

function TwitterTimeline() {
  const timelineContainer = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTwitterTimeline = async (): Promise<void> => {
      if (typeof window === 'undefined') return; // Guard against SSR

      try {
        // Load Twitter widgets script
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        
        const scriptLoadPromise = new Promise<void>((resolve, reject) => {
          script.onload = () => resolve();
          script.onerror = () => reject(new Error("Failed to load Twitter script"));
        });

        document.body.appendChild(script);

        await scriptLoadPromise;
        
        if (!timelineContainer.current) {
          throw new Error("Container not found");
        }

        try {
          // Try to create timeline with list ID first
          const widget = await window.twttr.widgets.createTimeline(
            {
              sourceType: "profile",
              screenName: "HermandadesCor"
            },
            timelineContainer.current,
            {
              height: "100%",
              chrome: "noheader nofooter noborders transparent",
              theme: "light",
            }
          );

          if (widget) {
            console.log("Timeline loaded successfully");
            setIsLoading(false);
            return;
          }
          
          throw new Error("Widget creation failed");
        } catch (err) {
          console.error("Failed to load timeline:", err);
          throw err;
        }
      } catch (err) {
        console.error("Twitter timeline error:", err);
        setError("No se pudo cargar la línea de tiempo de Twitter. Por favor, inténtelo de nuevo más tarde.");
      } finally {
        setIsLoading(false);
      }
    };

    loadTwitterTimeline();

    return () => {
      const script = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div ref={timelineContainer} className="w-full h-full">
      {isLoading && (
        <div className="flex items-center justify-center h-full">
          <div className="animate-pulse">Cargando tweets de Semana Santa Córdoba...</div>
        </div>
      )}
    </div>
  );
}

export default function TwitterPage() {
  return (
    <div className="fixed inset-0 flex flex-col">
      <div className="p-4 bg-background">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold">Twitter Semana Santa Córdoba</h1>
          <Link
            href="/"
            className="px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
          >
            Volver
          </Link>
        </div>
      </div>
      <div className="flex-1 w-full bg-background overflow-hidden">
        <Suspense fallback={
          <div className="flex items-center justify-center h-full">
            <div className="animate-pulse">Cargando...</div>
          </div>
        }>
          <TwitterTimeline />
        </Suspense>
      </div>
    </div>
  );
} 