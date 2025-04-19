'use client';

import Link from "next/link"
import { useEffect } from "react"

export default function TwitterPage() {
  useEffect(() => {
    // Load Twitter widgets script
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      const script = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col">
      <div className="p-4 bg-background">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold">Twitter Semana Santa</h1>
          <Link
            href="/"
            className="px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
          >
            Volver
          </Link>
        </div>
      </div>
      <div className="flex-1 w-full p-4">
        <a
          className="twitter-timeline"
          data-height="100%"
          data-theme="light"
          data-chrome="noheader nofooter noborders transparent"
          href="https://twitter.com/agrupacioncor"
        >
          Tweets by @agrupacioncor
        </a>
      </div>
    </div>
  );
} 