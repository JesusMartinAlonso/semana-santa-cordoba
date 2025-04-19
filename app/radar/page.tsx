import Link from "next/link"

export default function RadarPage() {
  return (
    <div className="fixed inset-0 flex flex-col">
      <div className="p-4 bg-background">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold">Radar de Lluvia</h1>
          <Link
            href="/"
            className="px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
          >
            Volver
          </Link>
        </div>
      </div>
      <div className="flex-1 w-full">
        <iframe
          src="https://www.tiempo.com/radar-sevilla-LEZL-reflect.html"
          className="w-full h-full border-0"
        />
      </div>
    </div>
  )
} 