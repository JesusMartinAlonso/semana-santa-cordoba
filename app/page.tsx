import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Itineraries } from "@/components/itineraries"

const sections = [
  {
    title: "GPS en Tiempo Real",
    description: "Sigue en tiempo real la ubicación de las procesiones",
    href: "/gps"
  },
  {
    title: "PTV Córdoba",
    description: "Retransmisión en directo de la Semana Santa",
    href: "/ptv"
  },
  {
    title: "Twitter",
    description: "Últimas actualizaciones de la Semana Santa en Twitter",
    href: "/twitter"
  },
  {
    title: "Radar de Lluvia",
    description: "Consulta el estado meteorológico en tiempo real",
    href: "/radar"
  }
]

export default function Home() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Semana Santa Córdoba 2025
      </h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        {sections.map((section) => (
          <Link key={section.href} href={section.href}>
            <Card className="h-full hover:bg-muted/50 transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{section.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
        <div className="md:col-span-2">
          <Itineraries />
        </div>
      </div>
    </main>
  )
}
