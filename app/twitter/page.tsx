import Link from "next/link"
import Script from "next/script"

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
        <a 
          className="twitter-timeline" 
          data-height="100%" 
          data-theme="light"
          data-chrome="noheader nofooter noborders transparent"
          href="https://twitter.com/agrupacioncor"
        >
          Loading tweets from Agrupación de Cofradías...
        </a>
        <Script 
          src="https://platform.twitter.com/widgets.js" 
          strategy="afterInteractive"
        />
      </div>
    </div>
  )
} 