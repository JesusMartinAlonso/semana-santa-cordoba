import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function RainRadar() {
  return (
    <Card className="w-full h-[600px]">
      <CardHeader>
        <CardTitle>Radar de Lluvia</CardTitle>
      </CardHeader>
      <CardContent className="h-full">
        <iframe
          src="http://panel.seguimeteo.com/radares/sevilla"
          className="w-full h-full border-0"
        />
      </CardContent>
    </Card>
  )
} 