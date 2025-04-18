import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function GPSMap() {
  return (
    <Card className="w-full h-[600px]">
      <CardHeader>
        <CardTitle>GPS en Tiempo Real</CardTitle>
      </CardHeader>
      <CardContent className="h-full">
        <iframe
          src="https://semanasantacordoba.wiamgps.com"
          className="w-full h-full border-0"
          allow="geolocation"
        />
      </CardContent>
    </Card>
  )
} 