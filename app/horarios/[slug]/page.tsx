import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const scheduleData = {
  "domingo-ramos": {
    title: "Domingo de Ramos",
    imageUrl: "/images/domingo_de_ramos.png",
    alt: "Horarios Domingo de Ramos"
  },
  "lunes-santo": {
    title: "Lunes Santo",
    imageUrl: "/images/lunes_santo.png",
    alt: "Horarios Lunes Santo"
  },
  "martes-santo": {
    title: "Martes Santo",
    imageUrl: "/images/martes_santo.png",
    alt: "Horarios Martes Santo"
  },
  "miercoles-santo": {
    title: "Miércoles Santo",
    imageUrl: "/images/miercoles_santo.png",
    alt: "Horarios Miércoles Santo"
  },
  "jueves-santo": {
    title: "Jueves Santo",
    imageUrl: "/images/jueves_santo.png",
    alt: "Horarios Jueves Santo"
  },
  "viernes-santo": {
    title: "Viernes Santo",
    imageUrl: "/images/viernes_santo.png",
    alt: "Horarios Viernes Santo"
  },
  "domingo-resurreccion": {
    title: "Domingo de Resurrección",
    imageUrl: "/images/domingo_de_resurreccion.png",
    alt: "Horarios Domingo de Resurrección"
  }
} as const

type SearchParamsType = { [key: string]: string | string[] | undefined }

interface PageProps {
  params: Promise<{ slug: string }>
  searchParams: Promise<SearchParamsType>
}

export default async function SchedulePage({ params }: PageProps) {
  const resolvedParams = await params
  const schedule = scheduleData[resolvedParams.slug as keyof typeof scheduleData]

  if (!schedule) {
    notFound()
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">{schedule.title}</h1>
        <Link
          href="/"
          className="px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
        >
          Volver
        </Link>
      </div>
      <div className="relative w-full h-[calc(100vh-200px)] bg-muted rounded-lg overflow-hidden">
        <Image
          src={schedule.imageUrl}
          alt={schedule.alt}
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
        />
      </div>
    </div>
  )
} 