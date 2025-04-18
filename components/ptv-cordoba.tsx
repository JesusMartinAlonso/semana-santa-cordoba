import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PTVCordoba() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>PTV Córdoba</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/6VzN3me83IU"
            title="PTV Córdoba"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          />
        </div>
      </CardContent>
    </Card>
  )
} 