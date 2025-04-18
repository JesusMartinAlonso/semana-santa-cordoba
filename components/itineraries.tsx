import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const scheduleList = [
  {
    title: "Domingo de Ramos",
    slug: "domingo-ramos",
    description: "Horarios de las procesiones del Domingo de Ramos"
  },
  {
    title: "Lunes Santo",
    slug: "lunes-santo",
    description: "Horarios de las procesiones del Lunes Santo"
  },
  {
    title: "Martes Santo",
    slug: "martes-santo",
    description: "Horarios de las procesiones del Martes Santo"
  },
  {
    title: "Miércoles Santo",
    slug: "miercoles-santo",
    description: "Horarios de las procesiones del Miércoles Santo"
  },
  {
    title: "Jueves Santo",
    slug: "jueves-santo",
    description: "Horarios de las procesiones del Jueves Santo"
  },
  {
    title: "Viernes Santo",
    slug: "viernes-santo",
    description: "Horarios de las procesiones del Viernes Santo"
  },
  {
    title: "Domingo de Resurrección",
    slug: "domingo-resurreccion",
    description: "Horarios de las procesiones del Domingo de Resurrección"
  }
]

export function Itineraries() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Horarios por día</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          {scheduleList.map((schedule) => (
            <Link
              key={schedule.slug}
              href={`/horarios/${schedule.slug}`}
              className="block p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <div>
                <h3 className="font-semibold">{schedule.title}</h3>
                <p className="text-sm text-muted-foreground">{schedule.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 