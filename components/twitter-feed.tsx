import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Script from "next/script"

export function TwitterFeed() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Twitter Semana Santa Córdoba</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[600px] overflow-y-auto">
          <a
            className="twitter-timeline"
            href="https://twitter.com/i/lists/109894398"
            data-height="600"
          >
            Semana Santa Córdoba
          </a>
          <Script async src="https://platform.twitter.com/widgets.js" />
        </div>
      </CardContent>
    </Card>
  )
} 